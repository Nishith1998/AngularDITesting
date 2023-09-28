import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Subject, fromEvent, interval, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  unSubscribeAll: Subject<boolean> = new Subject();

  @ViewChild('alphaContainer') alphaContainer!: ElementRef;

  alphabetList: { char: string; margin: number }[] = [];
  isGameOver: boolean = false;
  difficulty: { level: number; time: number } = { level: 1, time: 800 };
  score: number = 0;
  wrongFlag: boolean = false;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    interval(20000)
      .pipe(takeWhile(() => !this.isGameOver))
      .subscribe(() => {
        this.difficulty = {
          time: this.difficulty.time - 100,
          level: this.difficulty.level + 1,
        };
        this.commonService.increaseDifficulty(this.difficulty.time);
      });
    this.commonService
      .getRandomNumbers()
      .pipe(takeUntil(this.unSubscribeAll))
      .subscribe((char) => {
        // console.log("char: ", char);
        if (
          this.alphaContainer.nativeElement.scrollHeight <=
          this.alphaContainer.nativeElement.offsetHeight
        ) {
          this.alphabetList.unshift({ char, margin: this.randomNoGenerator() });
        } else {
          this.isGameOver = true;
          this.unSubscribeAll.next(true);
        }
      });
  }

  randomNoGenerator() {
    let min = 0;
    let max = 98;
    return Math.floor(Math.random() * (max - min) + min);
  }

  ngAfterViewInit() {
    fromEvent(window, 'keydown')
      .pipe(takeWhile(() => !this.isGameOver))
      .subscribe((data: any) => {
        if (
          data['key'] == this.alphabetList[this.alphabetList.length - 1].char
        ) {
          this.alphabetList.splice(this.alphabetList.length - 1, 1);
          this.alphabetList = [...this.alphabetList];
          this.score += this.difficulty.level * 2;
          this.wrongFlag = false;
        } else {
          this.wrongFlag = true;
        }
      });
  }

  ngOnDestroy() {
    this.unSubscribeAll.next(true);
    this.unSubscribeAll.complete();
  }
}
