import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SERVER_URL } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  private url = `${SERVER_URL}`;
  constructor(private readonly http: HttpClient) { }

  getFollowers(id:string){
    return this.http.get<Array<followInterface>>(`${this.url}/follows/${id}/followers`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
  
  getFollowing(id:string){
    return this.http.get<Array<followInterface>>(`${this.url}/follows/${id}/following`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  getCountFollowers(id:string){
    return this.http.get<followCountInterface>(`${this.url}/follows/${id}/count/followers`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  getCountFollowing(id:string){
    return this.http.get<followCountInterface>(`${this.url}/follows/${id}/count/following`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  follow(id:string){
    return this.http.post<Array<followInterface>>(`${this.url}/follows/${id}`,{},{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
  unfollow(id:string){
    return this.http.delete<void>(`${this.url}/follows/${id}`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  isFollowed(id:string){
    return this.http.get<boolean>(`${this.url}/follows/${id}/find`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
}

export interface followInterface{
  _id:string;
  username:string;
  name:string;
  image:string;
}

export interface followCountInterface{
  follows:number;
}