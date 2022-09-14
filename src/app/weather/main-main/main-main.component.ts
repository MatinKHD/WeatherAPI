import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-main',
  templateUrl: './main-main.component.html',
  styleUrls: ['./main-main.component.scss']
})
export class MainMainComponent implements OnInit {
  @Input() cityNameForMainMain: any;
  constructor() {
  }

  ngOnInit(): void {
  }

}
