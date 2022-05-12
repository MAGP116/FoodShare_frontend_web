import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';



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
  private url = 'https://food-share-back-end.herokuapp.com'//TODO: CHANGE TO REAL URL

  
  isAuthenticated(): Observable<AuthResponseInterface>{
    return this.http.get<AuthResponseInterface>(`${this.url}/auth/verifyLogin`,{ withCredentials: true })
    .pipe(
      catchError(err=>{
        return of(<AuthResponseInterface>{status:err.status,message:err.error.error })
      }
      )
    );
  }

  login(login:logInFormatInterface){
    return this.http.post(`${this.url}/auth/login`,login,{ withCredentials: true });
  }

  logOut(){
    return this.http.get(`${this.url}/auth/logout`,{ withCredentials: true })
  }

  register(PostData:signUpFormInterface){
    return this.http.post(`${this.url}/auth/signup`,PostData);

  }
}
