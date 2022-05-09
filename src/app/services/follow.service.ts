import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  private url = 'http://localhost:3000'//TODO: CHANGE TO REAL URL
  constructor(private readonly http: HttpClient) { }

  getFollowers(id:string){
    return this.http.get<Array<followInterface>>(`${this.url}/follows/${id}/followers`,{withCredentials:true});
  }
  
  getFollowing(id:string){
    return this.http.get<Array<followInterface>>(`${this.url}/follows/${id}/following`,{withCredentials:true});
  }

  getCountFollowers(id:string){
    return this.http.get<followCountInterface>(`${this.url}/follows/${id}/count/followers`,{withCredentials:true});
  }

  getCountFollowing(id:string){
    return this.http.get<followCountInterface>(`${this.url}/follows/${id}/count/following`,{withCredentials:true});
  }

  follow(id:string){
    return this.http.post<Array<followInterface>>(`${this.url}/follows/${id}`,{},{withCredentials:true});
  }
  unfollow(id:string){
    return this.http.delete<void>(`${this.url}/follows/${id}`,{withCredentials:true});
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