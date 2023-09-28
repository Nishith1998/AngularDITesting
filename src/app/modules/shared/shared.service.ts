import { Injectable } from '@angular/core';
import { SharedModule } from './shared.module';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SharedService {
  sharedVar: string = "sharedServiceVar";
  constructor() { 
    console.log("shared module:: shared service --> instantiated");
  }
}
