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

  // in this method we get value from navbar component
  // and then use it to connect to new api to
  // get the current weather of the city we want.
  //  we use add method for our loading after we subscribe to our apiService method
  // after that store our data in a field called cityNameForWeather
  // we pass it to the main component
  //
  cityName(name: any) {
    this.loading = true;
    this.apiService.getRealTimeWeather(name).subscribe((value: any) => {
      console.log(value);
      this.cityNameForWeather = value;
    }).add(() => {
      this.loading = false;
    });
  }
}
