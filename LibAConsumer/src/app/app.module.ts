import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModuleBModule } from 'lib-a';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModuleBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
