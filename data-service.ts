import { Injectable, ErrorHandler } from '@angular/core';
import { Employee } from './Employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry,catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  getEmployee():Observable<Employee>
  {
    return this.http.get<Employee>("assets/Data.json").pipe(retry(1),catchError(this.errorHand));
  }
  errorHand(error)
  {
    console.log(error);
    return throwError(error);
  }

}
