import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  endpoint = 'https://dummyjson.com/products';
getProducts() {
  return this.http.get(this.endpoint);
}

}
