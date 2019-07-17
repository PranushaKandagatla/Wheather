import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WheatherValuesComponent } from './wheather-values/wheather-values.component';
import { SearchService } from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    WheatherValuesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
