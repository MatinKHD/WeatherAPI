import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WeatherRoutingModule} from './weather-routing.module';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {WeatherComponent} from "./weather.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NavbarComponent} from './navbar/navbar.component';


@NgModule({
  declarations: [
    WeatherComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class WeatherModule {
}
