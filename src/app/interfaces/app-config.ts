import {ICity} from "./icity";

export interface AppConfig {
  apiBaseUrl: any;
  apiCurrentWeatherUrlPart: string;
  apiWeatherForecastUrlPart:string;
  apiKey: string;
  cities: ICity[];
}
