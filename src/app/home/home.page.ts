import { Component } from '@angular/core';
import { File, FileService } from '../services/file.service';
import { AudioService } from '../services/audio.service';
import { RangeCustomEvent } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  files: File[] = [];
  currentFile: any = {};
  currentTime: string = '0:00';
  seekbar: number = 0;
  isCreditsModalOpen = false;

  constructor(
    public fileService: FileService,
    public audioService: AudioService,
    private toastController: ToastController,
  ) {
    this.getDocuments();
  }

  getDocuments() {
    this.fileService.getFiles().subscribe(files => {
      this.files = files;
    });
  }

  getColorSelected(index: number): string {
    if (this.currentFile.index === index) return 'primary';
    return 'light';
  }

  openFile(file: { url: string; name: string}, index: number) {
    this.currentFile = { index, file };
    this.playStream(file.url);
  }

  playStream(url: any) {
    // stop any track that might be playing now
    this.audioService.stop();

    this.audioService.playStream(url).subscribe((event: any) => {
      const audioObj = event.target;
      // the list of possible events we're listening is on the audio service method
      switch (event.type) {
        case 'error':
          this.presentErrorToast();
          break;

        case 'timeupdate':
          this.onTimeUpdate(audioObj.currentTime, audioObj.duration);
          break;
      }
    });
  }

  play() {
    this.audioService.play();
  }

  pause() {
    this.audioService.pause();
  }

  stop() {
    this.audioService.stop();
    this.currentFile = {};
  }

  next() {
    let index: number = this.currentFile.index === this.files.length-1 ? 0 : this.currentFile.index + 1;
    let file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    let index: number = this.currentFile.index === 0 ? this.files.length - 1 : this.currentFile.index - 1;
    let file = this.files[index];
    this.openFile(file, index);
  }

  updatePin = (percent: number) => {
    let sec: number = Math.floor(this.audioService.convertToSeconds(percent));
    let min: number = Math.floor(sec/60);
    sec = Math.floor(sec%60);
    return `${min}:${sec > 9 ? sec : '0'+sec}`;
  }

  onSeek(event: Event) {
    let percent = (event as RangeCustomEvent).detail.value;
    this.audioService.seekTo(this.audioService.convertToSeconds(percent));
    this.play();
  }

  setOpen(isOpen: boolean) {
    this.isCreditsModalOpen = isOpen;
  }

  private onTimeUpdate(seconds: number, duration: number) {
    this.seekbar = this.audioService.convertToPercentage(seconds, duration);
  }

  private async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'Hi ha hagut un error de reproducció. Sisplau, torna-ho a intentar',
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
  }
}
