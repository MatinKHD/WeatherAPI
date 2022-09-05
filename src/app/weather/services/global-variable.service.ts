import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  // weather --------------------------------------------------------------------------------
  weather = 'https://weatherapi-com.p.rapidapi.com/search.json?q=';
}
