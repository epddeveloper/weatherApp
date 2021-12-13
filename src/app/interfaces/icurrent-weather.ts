interface IWind {
  speed:number;
}

export interface IMain {
  temp: number;
}

export interface ICoord{
  lon:number;
  lat:number;
}

export interface ICurrentWeather {
    main: IMain;
    coord:ICoord;
    wind: IWind;
}
