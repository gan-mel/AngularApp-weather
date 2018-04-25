import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class WeatherService {


 private url = 'weather/getCity/' ;


  constructor(private http: Http ) {
  }


  getWeather(city) {
    return this.http.get('weather/getCity/' + city)
      .map(res => res.json())     ;
  }
  getForecast(city) {
    return this.http.get('weather/getCity/fiveday/' + city)
      .map(res => res.json())    ;
  }
}
