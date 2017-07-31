import { Component, OnInit } from '@angular/core';
import { History } from "../models/history";
import { WeatherService } from "../services/weather.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-history-presentation',
  templateUrl: './history-presentation.component.html',
  styleUrls: ['./history-presentation.component.css']
})
export class HistoryPresentationComponent implements OnInit {
  histories: Array<History>; 
  loading:boolean;

  constructor(private service: WeatherService,
  private location: Location) {    
   }

  ngOnInit() {
    this.loading = true;
    this.histories = this.service.getHistories(); 
    this.loading = false;   
  }

  goBack(): void {
  this.location.back();
  }
}
