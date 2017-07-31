import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from "rxjs/Rx";
import { City } from "../models/city";
import { Weather } from "../models/weather";
import { History } from "../models/history";
import { AppSettings } from "../app.settings";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class WeatherService {  
  private weathers: Array<Weather> = new Array<Weather>();
  private cities: Array<City> = new Array<City>();
  private histories: Array<History> = new Array<History>();
  constructor(private http: HttpClient) { }

  getMainCities():Array<City>{   
    this.http
    .get<City[]>(AppSettings.API_ENDPOINT + "DefaultCities")
    .subscribe(data => 
      {        
        this.saveCitiesValues(data);        
      }); 
    return this.cities; 
  }
  getWeathers(cityName: string, countOfDays: number):Array<Weather>{
      this.http
      .get<Weather[]>(AppSettings.API_ENDPOINT + "Weathers/" + cityName + "/" + countOfDays)
      .subscribe(data => 
        {        
          this.saveWeathersValues(data);        
        });   
      return this.weathers;  
  }

  getHistories():Array<History>{
      this.http
      .get<History[]>(AppSettings.API_ENDPOINT + "Histories")
      .subscribe(data => 
        {        
          this.saveHistoriesValues(data);        
        });           
      return this.histories;  
  }


  private saveWeathersValues(data:Array<Weather>){
    for(let item in data){
      this.weathers[item] = data[item];    
    }
  }

  private saveCitiesValues(data:Array<City>){
    for(let item in data){
      this.cities[item] = data[item];    
    }
  }

  private saveHistoriesValues(data:Array<History>){
    for(let item in data){
      this.histories[item] = data[item];    
    }
  }  
}
