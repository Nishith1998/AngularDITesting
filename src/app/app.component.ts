import { Component } from '@angular/core';
import { SharedService } from './modules/shared/shared.service';
import { LazyService } from './modules/lazy-feature/lazy.service';
import { NonLazyService } from './modules/non-lazy/non-lazy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-prac';

  constructor(/*public sharedService: SharedService,*/ public nonLazyService: NonLazyService,/*public lazyService: LazyService*/) {}
}
