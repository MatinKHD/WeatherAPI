import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WeatherRoutingModule} from './weather-routing.module';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {WeatherComponent} from "./weather.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {NavbarComponent} from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MainComponent} from './main/main.component';
import {WeatherService} from "./services/weather.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    WeatherComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule {
}
