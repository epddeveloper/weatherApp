import {Component, OnInit, ViewChild} from '@angular/core';
import {ICity} from '../interfaces/icity';
import {ApiWeatherService} from '../services/api-weather/api-weather.service';
import {AppConfigService} from '../services/app-cofig/app-config.service';
import {WeatherDetailsComponent} from "../weather-details/weather-details.component";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  cities: ICity[];
  @ViewChild(WeatherDetailsComponent) weatherDetails:WeatherDetailsComponent;

  constructor(private appConfig: AppConfigService) {
  }

  ngOnInit(): void {
    this.cities = this.appConfig.getCitiesList();
  }

  showForecastForCity(city: ICity) {
    this.weatherDetails.getForecast(city);
  }

}
