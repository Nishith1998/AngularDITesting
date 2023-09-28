import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSubModule } from './first-sub/first-sub.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirstSubModule
  ],
  exports: [
    FirstSubModule
  ]
})
export class FirstCommonModule { }
