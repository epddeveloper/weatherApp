import {Component, Input, OnInit} from '@angular/core';
import {ICity} from "../interfaces/icity";
import {ApiWeatherService} from "../services/api-weather/api-weather.service";
import {IForecast} from "../interfaces/iforecast";
import {AppConfigService} from "../services/app-cofig/app-config.service";

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {

  forecast: IForecast;
  city: ICity;


  constructor(private apiWeather: ApiWeatherService, private appConfigService: AppConfigService) {
  }

  ngOnInit(): void {

  }

  getForecast(city: ICity):void {
    this.apiWeather.getWeatherForecast(city).subscribe(forecast => {
      this.forecast = forecast;
      this.city = city;
    }, error => console.error(error))
  }

  formatDate(date:any){
    // convert s to ms
    return new Date(date*1000);
  }

  iconUrl(icon: string) {
    return this.appConfigService.getIconUrl().replace("${icon}",icon);
  }
}
