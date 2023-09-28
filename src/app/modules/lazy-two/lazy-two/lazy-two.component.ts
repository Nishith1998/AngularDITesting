import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-lazy-two',
  templateUrl: './lazy-two.component.html',
  styleUrls: ['./lazy-two.component.scss'],
})
export class LazyTwoComponent {
  constructor(public sharedService: SharedService) {}
}
