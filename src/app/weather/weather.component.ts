import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityNameForWeather!: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  cityName(name: any) {
    console.log('cityName For Weather', name);
    this.cityNameForWeather = name;
  }
}
