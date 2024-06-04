import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient)
  apiURL = 'http://localhost:3000/users';
  constructor() { }

  getAllUser() {
    return this.http.get(this.apiURL);
  }
  
}
