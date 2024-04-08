import { Component } from '@angular/core';
import { File, FileService } from '../services/file.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  files: File[] = [];

  constructor(
    public fileService: FileService,
  ) {
    this.getDocuments();
  }

  getDocuments() {
    this.fileService.getFiles().subscribe(files => {
      this.files = files;
    });
  }

}
