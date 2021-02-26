import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';  
import { HttpInterceptor } from '@angular/common/http'


import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) 
  
   { }

postUserData(body):Observable<any>{
  return this.http.post("http://localhost:3001/api/v1/userData",body);
}


}
