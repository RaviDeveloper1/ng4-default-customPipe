import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SortPipe } from './sort.pipe';


@NgModule({
  declarations: [
    SortPipe, // SortPipe should be declared before Appcomponent 
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
