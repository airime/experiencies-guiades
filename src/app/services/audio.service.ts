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

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next('stop');
  }

  seekTo( seconds: number ) {
    this.audioObj.currentTime = seconds;
  }

  convertToPercentage( seconds: number, duration: number) {
    return (seconds*100)/duration;
  }

  convertToSeconds(percent: number | { lower: number; upper: number }) {
    let converted: number = typeof percent === 'number' ? percent : percent.lower;
    return (converted*this.audioObj.duration)/100;
  }

  playStream(url: any) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  private streamObservable(url: any) {
    let events = [ //full list of events can be found at https://www.w3schools.com/tags/ref_av_dom.asp
      'error', 'timeupdate'
    ];

    const addEvents = function(obj: HTMLAudioElement, events: any[], handler: (event: any) => void) {
      events.forEach((event: any) => {
        obj.addEventListener(event, handler);
      });
    };

    const removeEvents = function(obj: HTMLAudioElement, events: any[], handler: (event: any) => void) {
      events.forEach((event: any) => {
        obj.removeEventListener(event, handler);
      });
    };

    return new Observable(observer => {
      // Media Events
      const handler = (event: any) => observer.next(event);
      addEvents(this.audioObj, events, handler);

      // Play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();
      return () => {
        // Remove EventListeners
        removeEvents(this.audioObj, events, handler);

        // Stop Playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;
        observer.complete();
      };
    });
  }
}
