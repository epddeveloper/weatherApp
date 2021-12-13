import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherDetailsComponent} from './weather-details.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ApiWeatherService} from "../services/api-weather/api-weather.service";
import {ICity} from "../interfaces/icity";
import {IForecast} from "../interfaces/iforecast";
import {of} from "rxjs";

describe('WeatherDetailsComponent', () => {
  let component: WeatherDetailsComponent;
  let fixture: ComponentFixture<WeatherDetailsComponent>;
  let apiWeather: ApiWeatherService;
  let city: ICity = JSON.parse('{"name":"London","lat":51.5085,"lon":-0.1257}');


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherDetailsComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailsComponent);
    component = fixture.componentInstance;

    apiWeather = fixture.debugElement.injector.get(ApiWeatherService);
    let resp: IForecast = JSON.parse('{"hourly":[{"dt":1639386000,"temp":283.81,"wind_speed":3.24,"weather":[{"icon":"04d","description":"overcast clouds"}]}]}');
    spyOn(apiWeather, "getWeatherForecast").and.returnValue(of(resp));

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return weather forecast', () => {

    component.getForecast(city);

    expect(component.forecast.hourly.length).toBeGreaterThan(0);
    expect(component.forecast.hourly[0].temp).toEqual(283.81);
    expect(component.forecast.hourly[0].wind_speed).toEqual(3.24);
    expect(component.forecast.hourly[0].dt).toEqual(1639386000);
    expect(component.forecast.hourly[0].weather.length).toBeGreaterThan(0);
    expect(component.forecast.hourly[0].weather[0].icon).toEqual("04d");
    expect(component.forecast.hourly[0].weather[0].description).toEqual("overcast clouds");
  });


  it('should render title', () => {
    component.getForecast(city);
    const compiled = fixture.nativeElement;
    component.city = city;
    fixture.detectChanges();
    expect(compiled.querySelector('.app-weather-details__header').textContent).toContain('Forecast for London');
  });
});
