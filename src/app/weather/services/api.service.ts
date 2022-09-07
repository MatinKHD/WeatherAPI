import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GlobalVariableService} from "./global-variable.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   options = {
     method: 'GET',
     headers: {
       'X-RapidAPI-Key': 'afa1da8a5fmshc609267f4774855p16c365jsna5da90612395',
       'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
     }
   };


  constructor(
    private http: HttpClient,
    private globalVariableService: GlobalVariableService,
  ) {

  }

  // weather  --------------------------------------------------------------------------------
  // autocomplete------------------------------------------------
  autocompelete(cityName: any) {
    return this.http.get(this.globalVariableService.search + `${cityName}`, this.options);
  }

  // realtime weather -------------------------------
  getRealTimeWeather(cityname: any) {
    return this.http.get(this.globalVariableService.forecast + `${cityname}&days=5`, this.options);
  }
}
