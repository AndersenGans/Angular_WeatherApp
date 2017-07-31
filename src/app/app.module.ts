import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WeatherPresentationComponent } from './weather-presentation/weather-presentation.component';
import { WeatherService } from "./services/weather.service";
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from "./app.routing";
import { HistoryPresentationComponent } from './history-presentation/history-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WeatherPresentationComponent,
    HistoryPresentationComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
