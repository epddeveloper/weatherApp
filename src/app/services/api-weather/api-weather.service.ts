import {HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICity } from 'src/app/interfaces/icity';
import { AppConfigService } from '../app-cofig/app-config.service';
import {ICurrentWeather} from "../../interfaces/icurrent-weather";
import {Observable} from "rxjs";
import {IForecast} from "../../interfaces/iforecast";

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  constructor(private http: HttpClient, private appConfig:AppConfigService) { }

  getWeatherForecast(city:ICity):Observable<IForecast>{
    return this.http.get(this.appConfig.getForecastUrl(city.lat,city.lon)) as Observable<IForecast>;
  }

  getCurrentWeather(city:ICity): Observable<ICurrentWeather> {
    return this.http.get(this.appConfig.getCurrentWeatherUrl(city.name)) as Observable<ICurrentWeather>;
  }
}
