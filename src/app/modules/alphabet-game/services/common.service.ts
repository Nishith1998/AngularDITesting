import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, mergeMap, switchMap, tap } from 'rxjs';
import { getRandomChar } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  intervalSubject = new BehaviorSubject<number>(800);
  constructor() {}

  getRandomNumbers() {
    return this.intervalSubject.pipe(
      switchMap((time) => interval(time).pipe(map(() => getRandomChar())))
    );
  }
  increaseDifficulty(millsTime: number) {
    this.intervalSubject.next(millsTime);
  }
}
