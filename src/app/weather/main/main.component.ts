import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {
  @Input() cityNameForMain: any;
  loading = false;
  constructor() {
  }

  ngOnChanges(changes: any): void {
    console.log(this.cityNameForMain);
    if (!this.cityNameForMain?.forecast) {
      this.loading = true;
    } else {
      this.loading = false;
    }
  }

  ngOnInit(): void {
  }
}
