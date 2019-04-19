import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import {weather} from './../weather'
 
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public city='';
  public weatherDetails:Array<weather>=[];
  public submitted;
  
  
  constructor(private weatherDetail: WeatherServiceService) { }
  

  ngOnInit() {
    
    console.log(this.weatherDetails);
  }
  method(){
    this.weatherDetails=this.weatherDetail.getWeatherDetails(this.city);
    this.submitted=true;
    
    };
      
      
      
  }
  
  


