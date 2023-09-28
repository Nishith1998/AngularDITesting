import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLayoutComponent } from './lazy-layout/lazy-layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LazyService } from './lazy.service';

@NgModule({
  declarations: [LazyLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LazyLayoutComponent },
    ]),
  ],
  providers: [LazyService]
})
export class LazyFeatureModule {
  constructor() {
    console.log("LayFeatureModule instantiated");
  }
}
