import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient)
  apiURL = 'http://localhost:3000/user';
  constructor() { }

  getAllUser() {
    return this.http.get(this.apiURL);
  }

  login(email: string, password: string) {
    return this.http.post(this.apiURL, { email, password });
  }

  register( fullname: string , email: string, password: string) {
    return this.http.post(this.apiURL, { fullname ,email, password });
  }
}
