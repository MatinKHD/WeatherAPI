import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() cityNameForNavbar = new EventEmitter<string>();
  options: any[] = [];
  filteredOptions?: Observable<string[]>;
  valueInput = '';

  constructor(
    private apiService: ApiService,
  ) {
  }

  ngOnInit(): void {
  }

  changeCity() {
    this.options = [];
    document.getElementById('input')!.focus();
    this.apiService.autocompelete(this.valueInput).subscribe((value: any) => {
      this.options = value;
    });
  }

  dastan(name: any) {
    this.cityNameForNavbar.emit(name);
  }

  getValue(event: any) {
    if (event.target.value && event.target.value.length > 3) {
      this.valueInput = event.target.value;
    }
  }
}
