import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { LazyService } from '../lazy.service';

@Component({
  selector: 'app-lazy-layout',
  templateUrl: './lazy-layout.component.html',
  styleUrls: ['./lazy-layout.component.scss']
})
export class LazyLayoutComponent {
  constructor(public sharedService: SharedService, public lazyService: LazyService) {}
}
