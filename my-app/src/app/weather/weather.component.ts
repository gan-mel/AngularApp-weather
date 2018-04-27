import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {WeatherService} from '../weather.service';

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

  constructor(private _weatherService: WeatherService) {


  }
  // Bind to the weather fucntions with interval of 60 seconds
  // TODO: Need to fix the timings, either with the interval or the template so the images load together with the content immediately
  ngOnInit() {
      setInterval(this.submitDataBox.bind(this, this.cityName), 60000);
      setInterval(this.submitData.bind(this, this.cityName), 60000);
      setInterval(this.weatherImage.bind(this), 5000);
      setInterval(this.currentImg.bind(this), 2000);
  }

  // Change icons of the forecast for each of the items

  weatherImage() {

      for (let i = 0, len = this.forecasts.list.length; i < len; i++) {

          if (this.forecasts.list[i].weather[0].main.toLowerCase().indexOf('rain') > -1) {

              this.forecasts.list[i].image = 'http://icons.iconarchive.com/icons/icons8/ios7/96/Weather-Rain-icon.png';

          } else if (this.forecasts.list[i].weather[0].main.toLowerCase().indexOf('clouds') > -1) {

              this.forecasts.list[i].image = 'http://icons.iconarchive.com/icons/icons8/windows-8/96/Weather-Clouds-icon.png';

          } else if (this.forecasts.list[i].weather[0].main.toLowerCase().indexOf('clear') > -1) {

              this.forecasts.list[i].image = 'http://icons.iconarchive.com/icons/icons8/ios7/96/Weather-Sun-icon.png';

          }
      }
  }

  // Change large image of the current weather

  currentImg() {


      if (this.weathers.weather[0].main.toLowerCase().indexOf('rain') > -1) {

          // tslint:disable-next-line:max-line-length
          this.weathers.weather[0].image = 'https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&h=350';

      } else if (this.weathers.weather[0].main.toLowerCase().indexOf('clouds') > -1) {

          // tslint:disable-next-line:max-line-length
          this.weathers.weather[0].image = 'https://www.gannett-cdn.com/-mm-/8def3dce02e63b9ecafc9c62c37410ffe371f780/c=0-206-2054-1751&r=x404&c=534x401/local/-/media/MIGroup/PortHuron/2014/08/27/1409139184000-Cloudy.jpg';

      } else if (this.weathers.weather[0].main.toLowerCase().indexOf('clear') > -1) {

          this.weathers.weather[0].image = 'http://www.pocketables.com/images/2012/07/sunny-608x333.jpg';
      }

  }




  // Get the CURRENT weather

  submitData(cityName) {
      const mycity = this.cityName;
      this._weatherService.getWeather(mycity)
      .subscribe( weathers => {
          this.weathers = weathers;
        }
      );
      return this.weathers;
  }


  // Get a five day forecast divided with 3 hour jumps

  submitDataBox(cityName) {
      const mycity = this.cityName;
      this._weatherService.getForecast(mycity).subscribe(forecasts => {
          this.forecasts = forecasts;


      });
      return this.forecasts;
  }



}
