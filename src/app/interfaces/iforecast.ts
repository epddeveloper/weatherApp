interface IWeather {
  icon:string;
  description:string;
}

export interface IForecast {
  hourly:IHourly[];
}

interface IHourly {
  dt: number;
  temp:number;
  wind_speed:number;
  weather:IWeather[];
}


