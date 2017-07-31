import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./main-page/main-page.component";
import { WeatherPresentationComponent } from "./weather-presentation/weather-presentation.component";
import { HistoryPresentationComponent } from "./history-presentation/history-presentation.component";


const routes: Routes = [
    { path:'', redirectTo:'/mainpage', pathMatch:'full'},
    { path:'mainpage', component:MainPageComponent},
    { path:'mainpage/weathers/:cityName/:countOfDays', component:WeatherPresentationComponent},
    { path:'mainpage/histories', component:HistoryPresentationComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}