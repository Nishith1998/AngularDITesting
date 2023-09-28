import { Injectable } from '@angular/core';

@Injectable(
  // {
  //   providedIn: LazyFeatureModule // This is wrong as lazy module will not be available at compile time
  // }
)
export class LazyService {
  lazyVar: string = "lazyVar";
  constructor() { 
    console.log("lazy-feature module:: lazy service --> instantiated")
  }
}
