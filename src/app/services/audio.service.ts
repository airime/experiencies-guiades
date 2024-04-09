import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private stop$ = new Subject();
  private audioObj = new Audio();

  constructor() { }

  //in case we switch the audio file before it's finished playing
  stop() {
    this.stop$.next('stop');
  }

  //in case we select an audio file to play
  playStream(url: any) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  private streamObservable(url: any) {

    return new Observable(observer => {
      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      return () => {
        // Stop Playing
        observer.complete();
      };
    });
  }
}
