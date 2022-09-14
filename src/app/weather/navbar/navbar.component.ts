import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../services/api.service";


declare function collapseAnimation(): any; // comes form navbar.js


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnChanges {

  @Output() cityNameForNavbar = new EventEmitter<string>(); //send cityName to Weather Component
  options: any[] = [];
  filteredOptions?: Observable<string[]>;
  valueInput = '';
  continentElement = false;
  countries = false;
  moreInformation = false;

  constructor(
    private apiService: ApiService,
  ) {
  }

  ngOnChanges() {

  }

  ngOnInit(): void {
    collapseAnimation();
  }

  //in each word that user write in search box we check that
  // if we have word and the length of the word
  // is greater than 3 words or char and then store the value of
  // search box to valueInput field
  getValueOfSearchBox(event: any) {
    if (event.target.value && event.target.value.length > 3) {
      this.valueInput = event.target.value;
    }
  }

  // we set options field to an empty array
  // then we get the input element in html to use focus fun
  // after that we connect to our api and put valueInput field
  // in autoComplete method that comes from apiService
  // after we subscribe to it we set options fields to value
  // and after that we go to our html file and loop throw this
  // in autoComplete tag
  changeCity() {
    this.options = [];
    document.getElementById('input')!.focus();
    this.apiService.autocompelete(this.valueInput).subscribe((value: any) => {
      this.options = value;
    });
  }

  // get the value from search box and send to parent component
  // in this case weather.component.ts
  getValueFromSearchBox(name: any) {
    this.cityNameForNavbar.emit(name);

  }

  // this method changes the value of continentElement
  // with each click on sub-more-first-button.
  // we use this to show or hide the continent selector.
  continent() {
    this.continentElement = !this.continentElement;
  }

  country() {
    this.countries = !this.countries;
  }

  moreInfo() {
    this.moreInformation = !this.moreInformation
  }
}
