import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) { }
  url = 'http://localhost:3000'
  isAuthenticated(): Observable<FooInterface>{
    return this.http.get<FooInterface>(`${this.url}/auth/verifyLogin`,{ withCredentials: true });
  }
}
export interface FooInterface {
  status: string;
  response : string;
}