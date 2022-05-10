import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly http: HttpClient) { }
  private url = 'http://localhost:3000'//TODO: CHANGE TO REAL URL

  
  isAuthenticated(): Observable<AuthResponseInterface>{
    return this.http.get<AuthResponseInterface>(`${this.url}/auth/verifyLogin`,{ withCredentials: true })
    .pipe(
      catchError(err=>{
        console.log(err);
        return of(<AuthResponseInterface>{status:err.status,response:err.error.response })
      }
      )
    );
  }

  logOut(){
    return this.http.get(`${this.url}/auth/logout`,{ withCredentials: true })
  }
}
export interface AuthResponseInterface {
  status: number;
  response : string;
}