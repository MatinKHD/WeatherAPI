import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() cityNameForMain: string = '';
  cityNameForMainn: any;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {
  }

  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(m => {
      this.cityNameForMainn = m;
    })
    console.log('sharedService', this.cityNameForMainn);
    if (this.cityNameForMain) {
      console.log('citynameForMain', this.cityNameForMain);
      this.apiService.getRealTimeWeather(this.cityNameForMain).subscribe(p => {
        console.log('p', p);
      })
    } else
      this.apiService.getRealTimeWeather('paris').subscribe(p => {
        console.log('paris', p);
      })
  }

}
