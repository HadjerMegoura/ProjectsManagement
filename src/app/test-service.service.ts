import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http:HttpClient) { }
  test(){
   return this.http.get('/api/test')
  }
}
