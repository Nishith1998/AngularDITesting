import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonLazyService {
  nonLazyVar: string = "nonLazyVar";
  constructor() {
    console.log("non-lazy module:: non-lazy service --> instantiated")
   }
}
