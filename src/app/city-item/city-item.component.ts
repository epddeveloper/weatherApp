import {Component, Input, OnInit} from '@angular/core';
import {ICity} from '../interfaces/icity';
import {ApiWeatherService} from '../services/api-weather/api-weather.service';
import {ICurrentWeather} from "../interfaces/icurrent-weather";

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.scss']
})
export class CityItemComponent implements OnInit {

  @Input() city: ICity;
  currentWeather:ICurrentWeather;

  constructor(private apiWeather: ApiWeatherService) {
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.apiWeather.getCurrentWeather(this.city).subscribe(weather => {
      this.currentWeather = weather;
      },
      error => {
        console.error(error);
      })
  }
}
