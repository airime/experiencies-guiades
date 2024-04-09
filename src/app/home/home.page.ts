import { Component } from '@angular/core';
import { File, FileService } from '../services/file.service';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  files: File[] = [];
  currentFile: any = {};

  constructor(
    public fileService: FileService,
    public audioService: AudioService,
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

    //we're not interacting with the audio stream yet, so no events
    this.audioService.playStream(url).subscribe();
  }

}
