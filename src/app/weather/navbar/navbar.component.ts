import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ApiService} from "../services/api.service";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() cityNameForNavbar = new EventEmitter<string>();
  myControl = new FormControl('');
  options: any[] = [];
  filteredOptions?: Observable<string[]>;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService
  ) {

  }

  ngOnInit(): void {
    // console.log(this.filteredOptions);

  }

  changeCity(event: any) {
    if (event.target.value) {
      this.apiService.autocompelete(event.target.value).subscribe((value: any) => {
        console.log('value', value);
        for (let i = 0; i < value.length; i++) {
          this.options.push(value[i]?.name)
        }
        console.log(this.options);
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }, error => {

      }).add(() => {

      });
    }
  }

  dastan(name: any) {
    this.cityNameForNavbar.emit(name);
    this.sharedService.changeMessage(name);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  //

}
