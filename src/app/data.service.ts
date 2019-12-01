import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient) { }

   url = 'http://localhost:9009/employee';
  Select()
  {
    return this.http.get(this.url);
  }
}
