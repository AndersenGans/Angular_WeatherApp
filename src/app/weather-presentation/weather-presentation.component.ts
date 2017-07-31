import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Weather } from "../models/weather";
import { WeatherService } from "../services/weather.service";
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({
  selector: 'weather-presentation',
  templateUrl: './weather-presentation.component.html',
  styleUrls: ['./weather-presentation.component.css']
})
export class WeatherPresentationComponent implements OnInit {
  weathers: Array<Weather>;
  loading: boolean;
  
  constructor(private service: WeatherService,
  private route: ActivatedRoute,
  private location: Location) {
    this.getWeathers();   
   }

  ngOnInit() {   
    this.loading = true;
    this.getWeathers();  
    this.loading = false; 
  }  

  getWeathers(){    
    let cityName = this.route.snapshot.paramMap.get('cityName');    
    let countOfDays = this.route.snapshot.paramMap.get('countOfDays');    
    this.weathers = this.service.getWeathers(cityName, +countOfDays);       
  }

  goBack(): void {  
     
  this.location.back();
}
}
