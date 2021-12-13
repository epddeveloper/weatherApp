import {TestBed} from '@angular/core/testing';

import {ApiWeatherService} from './api-weather.service';
import {AppConfigService} from "../app-cofig/app-config.service";
import any = jasmine.any;
import {ICity} from "../../interfaces/icity";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ICurrentWeather} from "../../interfaces/icurrent-weather";

describe('ApiWeatherService', () => {
  let service: ApiWeatherService;
  let configService: AppConfigService;

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(ApiWeatherService);
    configService =TestBed.inject(AppConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('xx', () =>{

    let city : ICity= JSON.parse('{ "name":"Krakow" ,"lat":0, "lon":0}');
    let response : ICurrentWeather = JSON.parse('{"main":{"temp":100}}')

    spyOn(configService, "getCurrentWeatherUrl").and.returnValue("http://localhost/Krakow");

    service.getCurrentWeather(city).subscribe(data=>{
      expect(data).toEqual(response);
    })

    const req = httpTestingController.expectOne("http://localhost/Krakow");
    req.flush(response);
  })

});
