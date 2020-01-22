import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatergoriesComponent } from './catergories/catergories.component';
import { ContentComponent } from './content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    CatergoriesComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
