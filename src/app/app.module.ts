import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCommonModule } from 'src/first-common/first-common.module';
import { UsersComponent } from './components/users/users.component';
import { ItemsPerPagePipe } from './pipes/items-per-page.pipe';
import { SharedModule } from './modules/shared/shared.module';
import { NonLazyModule } from './modules/non-lazy/non-lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ItemsPerPagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstCommonModule,
    // SharedModule,
    NonLazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log("Root(App) Module instantiated")

  }
}
