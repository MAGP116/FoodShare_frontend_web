import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { SERVER_URL } from 'src/app/app.module';



export interface signUpFormInterface{
  username:string;
  password:string;
  password2:string;
}

export interface logInFormatInterface{
  username:string;
  password:string;
}

export interface AuthResponseInterface {
  status: number;
  message : string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private readonly http: HttpClient) { }
  private url = `${SERVER_URL}`;

  
  isAuthenticated(): Observable<AuthResponseInterface>{
    return this.http.get<AuthResponseInterface>(`${this.url}/auth/verifyLogin`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) })
    .pipe(
      catchError(err=>{
        return of(<AuthResponseInterface>{status:err.status,message:err.error.error })
      }
      )
    );
  }

  login(login:logInFormatInterface){
    return this.http.post(`${this.url}/auth/login`,login,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  logOut(){
    console.log("a");
    window.localStorage.removeItem('auth');
    return this.http.get(`${this.url}/auth/logout`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) })
  }

  register(PostData:signUpFormInterface){
    return this.http.post(`${this.url}/auth/signup`,PostData);

  }
  loginGoogle(){
    return this.http.get(`${this.url}/auth/google/login`,{ headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'}) });
  }
}
