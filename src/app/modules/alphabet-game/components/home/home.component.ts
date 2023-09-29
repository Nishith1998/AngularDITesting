import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonService } from '../../services/common.service';
import {
  Subject,
  Subscription,
  debounceTime,
  fromEvent,
  interval,
  of,
  takeUntil,
  takeWhile,
  throttle,
} from 'rxjs';
import { Alphabet, Difficulty } from '../../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  alphabetList: Alphabet[] = [];
  isGameOver: boolean = false;
  difficulty: Difficulty = { level: 1, time: 800 };
  score: number = 0;
  wrongFlag: boolean = false;
  inputStr: string = '';

  getRandomNumbersSubscription!: Subscription;
  unSubscribeAll: Subject<boolean> = new Subject();
  @ViewChild('alphaContainer') alphaContainer!: ElementRef;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    // this.initializeGame();
  }

  initializeGame() {
    this.isGameOver = this.wrongFlag = false;
    this.alphabetList = [];
    this.difficulty = { level: 1, time: 800 };
    this.score = 0;
    interval(20000)
      .pipe(
        takeWhile(() => !this.isGameOver),
        takeUntil(this.unSubscribeAll)
      )
      .subscribe(() => {
        this.setDifficultyLevel();
      });
    this.getRandomNumbersSubscription = this.commonService
      .getRandomNumbers()
      .pipe(takeUntil(this.unSubscribeAll))
      .subscribe((char) => {
        this.generateRandomWords(char);
      });
    fromEvent(window, 'keydown')
      .pipe(takeWhile(() => !this.isGameOver))
      .subscribe((data: Event) => {
        this.removeFoundCharacter(data);
      });
  }
  setDifficultyLevel() {
    this.difficulty = {
      time: this.difficulty.time - 100,
      level: this.difficulty.level + 1,
    };
    this.commonService.increaseDifficulty(this.difficulty.time);
  }

  generateRandomWords(char: string[]) {
    if (
      this.alphaContainer.nativeElement.scrollHeight <=
      this.alphaContainer.nativeElement.offsetHeight
    ) {
      this.alphabetList.unshift({
        char,
        margin: this.randomNoGenerator(0, 100 - char.length * 2),
      });
    } else {
      this.isGameOver = this.wrongFlag  = true;
      this.getRandomNumbersSubscription.unsubscribe();
    }
  }

  randomNoGenerator(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  removeFoundCharacter(data: any) {
    if (
      data['key'] == this.alphabetList[this.alphabetList.length - 1].char[0]
    ) {
      this.alphabetList[this.alphabetList.length - 1].char =
        this.alphabetList[this.alphabetList.length - 1].char.slice(1);
      if (this.alphabetList[this.alphabetList.length - 1].char === '') {
        this.alphabetList.splice(this.alphabetList.length - 1, 1);
      }
      this.score += this.difficulty.level * 2;
      this.wrongFlag = false;
    } else {
      this.wrongFlag = true;
    }
  }

  restart() {

    this.initializeGame();
  }

  ngOnDestroy() {
    this.unSubscribeAll.next(true);
    this.unSubscribeAll.complete();
  }
}
