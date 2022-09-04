import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WeatherRoutingModule} from './weather-routing.module';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatSliderModule,
    MatButtonModule,
  ]
})
export class WeatherModule {
}
