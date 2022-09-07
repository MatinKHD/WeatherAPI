import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  cityNameForWeather!: any;
  test: any;
  loading = false;

  constructor(
    private apiService: ApiService
  ) {
  }

  ngOnInit(): void {
  }

  cityName(name: any) {
    this.loading = true;
    this.apiService.getRealTimeWeather(name).subscribe((value: any) => {
      console.log(value);
      this.test = value;
    }).add(() => {
      this.loading = false;
    });
  }
}
