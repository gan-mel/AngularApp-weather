import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-weather-component',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public shown = false;
  cityName: string;
  weathers: any = [];
  forecasts: any = [];
  weatherType: string;


  constructor(private _weatherService: WeatherService) {


  }

  ngOnInit() {
    setInterval(this.submitDataBox.bind(this, this.cityName), 60000);
    setInterval(this.submitData.bind(this, this.cityName), 60000);
  }



  submitData(cityName) {
   const mycity = this.cityName;
   this._weatherService.getWeather(mycity).subscribe(weathers => {
      this.weathers = weathers;
    });
    return this.weathers;
 }


  submitDataBox(cityName) {
    const mycity = this.cityName;
    this._weatherService.getForecast(mycity).subscribe(forecasts => {
      this.forecasts = forecasts;
    });
    return this.forecasts;
  }



}
