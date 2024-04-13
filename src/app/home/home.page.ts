import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { File, FileService } from '../services/file.service';
import { AudioService } from '../services/audio.service';
import { ToastController, RangeCustomEvent, SegmentCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lang = {value: 'cat'};
  files: File[] = [];
  currentFile: any = {};
  seekbar: number = 0;
  isSeeking: boolean = false;
  isPaused: boolean = false;
  isCreditsModalOpen: boolean = false;

  constructor(
    public fileService: FileService,
    public audioService: AudioService,
    public translate: TranslateService,
    private toastController: ToastController,
  ) {
    translate.setDefaultLang('cast');
    this.getDocuments('cast');
  }

  setCreditsOpen(isOpen: boolean) {
    this.isCreditsModalOpen = isOpen;
  }

  selectLang(event: Event) {
    let lang = (event as SegmentCustomEvent).detail.value ? (event as SegmentCustomEvent).detail.value?.toString() : 'cat';
    this.lang.value = lang ? lang : 'cast';
    this.translate.use(this.lang.value);
    this.getDocuments(lang ? lang : 'cast');
  }

  getDocuments(lang: string) {
    this.fileService.getFiles(lang).subscribe(files => {
      this.files = files;
    });
  }

  getColorSelected(index: number): string {
    if (this.currentFile.index === index) return 'humanist';
    return 'light';
  }

  openFile(file: File, index: number) {
    this.currentFile = { index, file };
    this.playStream(file.url);
    this.isPaused = false;
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
    this.isPaused = false;
  }

  pause() {
    this.audioService.pause();
    this.isPaused = true;
  }

  stop() {
    this.isPaused = false;
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

  onSeekStart() {
    this.isSeeking = true;
  }

  onSeekEnd(event: Event) {
    this.isSeeking = false;
    let percent = (event as RangeCustomEvent).detail.value;
    this.audioService.seekTo(this.audioService.convertToSeconds(percent));
    this.play();
  }

  private onTimeUpdate(seconds: number, duration: number) {
    if (!this.isSeeking) this.seekbar = this.audioService.convertToPercentage(seconds, duration);
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
