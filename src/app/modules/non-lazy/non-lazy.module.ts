import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonLazyComponent } from './non-lazy/non-lazy.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NonLazyComponent
  ],
  exports: [NonLazyComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NonLazyModule {
  constructor() {
    console.log("Non lazy module instantiated")
  }
 }
