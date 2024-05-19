import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../type/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAllProductlist(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }
}
