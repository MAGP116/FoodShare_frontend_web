import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }
  url = 'http://localhost:3000'
  isAuthenticated(): Observable<Object>{
    return this.http.get(`${this.url}/auth/verifyLogin`);
  }
}
