import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {weather} from './weather'

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private url: string = 'http://api.openweathermap.org/data/2.5/weather?q='+' ' +'&APPID=b3690e93f79bb11463290fe2ef1ccaf1';
  private details;
  public weatherDetails:Array<weather>=[];
  constructor(private http: HttpClient) { 

  }

  getWeatherDetails(city){
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+city+'&APPID=b3690e93f79bb11463290fe2ef1ccaf1').subscribe((details)=>{
      this.details=details;
      console.log(this.details);
      for(var i=0,j=0;i<40;i+=8,j++){
        this.weatherDetails[j]={date:this.details.list[i].dt_txt,humidity:this.details.list[i].main.humidity,temp:this.details.list[i].main.temp,pressure:this.details.list[i].main.pressure,image:this.details.list[i].weather[0].icon};
      }
      console.log(this.weatherDetails);
    })
    
     
    return this.weatherDetails;
  }


}
