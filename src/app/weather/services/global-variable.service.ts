import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  // weather --------------------------------------------------------------------------------
  search = 'https://weatherapi-com.p.rapidapi.com/search.json?q=';
  forecast = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q='
}
