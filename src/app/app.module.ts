import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './services/app-cofig/app-config.service';
import { WeatherComponent } from './weather/weather.component';
import { CityItemComponent } from './city-item/city-item.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CityItemComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CardModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    deps: [AppConfigService],
    useFactory: (appConfigService: AppConfigService) => () => appConfigService.loadAppConfig()
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
