import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { NonLazyService } from '../non-lazy.service';

@Component({
  selector: 'app-non-lazy',
  templateUrl: './non-lazy.component.html',
  styleUrls: ['./non-lazy.component.scss'],
})
export class NonLazyComponent {
  constructor(
    public nonLazyService: NonLazyService,
    public sharedService: SharedService
  ) {}
}
