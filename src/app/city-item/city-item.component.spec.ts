import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityItemComponent } from './city-item.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ApiWeatherService} from "../services/api-weather/api-weather.service";
import {of} from "rxjs";
import {ICurrentWeather} from "../interfaces/icurrent-weather";
import {ICity} from "../interfaces/icity";


describe('CityItemComponent', () => {
  let component: CityItemComponent;
  let fixture: ComponentFixture<CityItemComponent>;
  let apiWeather: ApiWeatherService;
  let city: ICity = JSON.parse('{"name":"Cracow"}');


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityItemComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityItemComponent);
    component = fixture.componentInstance;
    component.city= city;

  });

  it('should create',
    () => {
      apiWeather = fixture.debugElement.injector.get(ApiWeatherService);
      let response: ICurrentWeather= JSON.parse('{"main":{"temp":20}}');
      spyOn(apiWeather, "getCurrentWeather").and.returnValue(of(response));
      fixture.detectChanges();
      expect(component).toBeTruthy();
      expect(component.currentWeather).toEqual(JSON.parse('{"main":{"temp":20}}'));
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('.temperature').textContent).toContain('Temperature: 20 ^C');
    });

});
