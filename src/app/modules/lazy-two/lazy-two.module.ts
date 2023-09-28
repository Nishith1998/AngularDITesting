import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTwoComponent } from './lazy-two/lazy-two.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LazyTwoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: LazyTwoComponent}])
  ]
})
export class LazyTwoModule {
  constructor() {
    console.log("lazy-two module --> instantiated")
  }
 }
