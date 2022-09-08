import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {
  @Input() cityNameForMain: any;
  loading = false;
  hours: any;
  date = new Date().getHours() - 1;

  constructor() {
  }

  // this life cycle hook gets change value everytime that anything changed
  ngOnChanges(changes: any): void {
    this._loading();
    this.getTime();
    console.log('sexy', this.hours);
    console.log(this.cityNameForMain);
  }

  ngOnInit(): void {
  }

  //this method will check if we connect to our api or not.
  // if so will store hours array of hours of our api in a
  // variable called hoursOfArray then we use date field to
  // loop throw of it to five more because we need five cards in
  // our html.
  //in our for loop we push hoursOfArray[i] to the field called hours
  // then after all we can use *ngFor to loop throw an hours in our html
  getTime() {
    this.hours = []
    if (this.cityNameForMain?.forecast) {
      let hoursOfArray = this.cityNameForMain?.forecast?.forecastday['0']?.hour;
      for (let i = this.date; i < this.date + 5; i++) {
        console.log(hoursOfArray[i]);
        this.hours.push(hoursOfArray[i]);
      }
    }
  }

  // this method is for our loading
  private _loading() {
    this.loading = !this.cityNameForMain?.forecast;
  }

}
