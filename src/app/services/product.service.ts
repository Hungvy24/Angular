import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../type/product';
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
  deleteProduct(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  addProduct(product: Product){
    return this.http.post<Product>(this.apiURL, product);
  }
  updateProduct(product: Product){
    return this.http.put<Product>(`${this.apiURL}/${product.id}`, product);
  }

  getProductDetail(id: number){
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }
}
