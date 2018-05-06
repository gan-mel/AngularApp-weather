import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class WeatherService {


 private url = 'weather/getCity/' ;


  constructor(private http: Http ) {
  }


// TODO: error handling
  // getEmployees(city): Observable<Testing[]> {
  //   return this.httpc.get<Testing[]>(this.url + city)
  //                   .catch(this.errorHandler);
  // }
  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || 'Server Error');
  // }



  getWeather(city): Observable<any[]> {
    return this.http.get('weather/getCity/' + city)
      .map(res => res.json())     ;
  }
  getForecast(city): Observable<any[]> {
    return this.http.get('weather/getCity/fiveday/' + city)
      .map(res => res.json())    ;
  }

}
