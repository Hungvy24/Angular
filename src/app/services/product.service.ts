import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CreateProduct, Product } from '../type/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // tạo intace
  http = inject(HttpClient);
  apiURL = 'http://localhost:3000/products';
  constructor() { }
  // getAPIProduct
  getAllProduct(){
    return this.http.get<Product[]>(this.apiURL);
  }
  getAllCreate(){
    return this.http.get<CreateProduct[]>(this.apiURL);
  }
  deleteProduct(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  createProducts(data: Partial<CreateProduct> | any) {
    return this.http.post(this.apiURL, data);
  }
  updateProduct(id: string, data: CreateProduct) {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }

  getProductDetail(id: number){
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }
  searchProduct(searchText: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiURL}?title=${searchText}`);
  }
}
