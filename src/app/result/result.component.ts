import { Component, OnInit } from '@angular/core';
import {weather} from './../weather';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  private weatherDetails:Array<weather>=[];

   

  constructor(private weatherDetail: WeatherServiceService) { }

  ngOnInit() {
    this.weatherDetails=this.weatherDetail.weatherDetails;
  }

}
