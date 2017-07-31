import { Component, OnInit } from '@angular/core';
import { City } from "../models/city";
import { WeatherService } from "../services/weather.service";
import { Weather } from "../models/weather";
import { Router } from "@angular/router";

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  cities: Array<City>;
  weathers: Array<Weather>;
  
  cityName: string;  
  countOfDays: number = 3;

  constructor(private service: WeatherService,
  private router: Router) {    
   }

  ngOnInit() {
    this.cities = this.service.getMainCities();    
  }

  onChange(selectedItem){
    let days = 3;    
    this.router.navigate(['/mainpage/weathers', selectedItem, days]);
  }  
}
