import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private _http:HttpClient) { }

    getJsonData():Observable<any>{
      return this._http.get('assets/data.json');
    }
    getResourceData():Observable<any>{
      return this._http.get('assets/language.json');
    }

}
