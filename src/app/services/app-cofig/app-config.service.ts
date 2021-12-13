import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/app/interfaces/app-config';
import { ICity } from 'src/app/interfaces/icity';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  private appConfig: AppConfig;

  constructor(private http: HttpClient) {
    this.loadAppConfig();
  }

  loadAppConfig(): Promise<any> {
    return this.http.get('./../../../assets/config/config.json').toPromise()
      .then(config => {
        this.appConfig = <AppConfig>config;
      });;
  }

  getForecastUrl(lat: number, long: number): string {
    return `${this.appConfig.apiBaseUrl}${this.appConfig.apiWeatherForecastUrlPart}lat=${lat}&lon=${long}&appid=${this.appConfig.apiKey}`
  }

  getCurrentWeatherUrl(cityName: string) {
    return `${this.appConfig.apiBaseUrl}${this.appConfig.apiCurrentWeatherUrlPart}q=${cityName}&appid=${this.appConfig.apiKey}`;
  }

  getCitiesList(): ICity[] {
    return this.appConfig.cities;
  }
  getIconUrl(): string {
    return this.appConfig.apiIcon;
  }
}
