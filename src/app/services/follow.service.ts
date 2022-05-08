import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  private url = 'http://localhost:3000'//TODO: CHANGE TO REAL URL
  constructor(private readonly http: HttpClient) { }

  getFollowers(id:string){
    console.log('id ',id);
    return this.http.get<Array<followResponseInterface>>(`${this.url}/follows/${id}/followers`,{withCredentials:true});
  }
  
  getFollowing(id:string){
    return this.http.get<Array<followResponseInterface>>(`${this.url}/follows/${id}/following`,{withCredentials:true});
  }
  follow(id:string){
    return this.http.post<followResponseInterface>(`${this.url}/follows/${id}`,{},{withCredentials:true});
  }
  unfollow(id:string){
    return this.http.delete<followResponseInterface>(`${this.url}/follows/${id}`,{withCredentials:true});
  }
}

export interface followResponseInterface{
  followee:followInterface|null;
  follower:followInterface|null;
  followedAt:string;
  __v:number;
}

export interface followInterface{
  _id:string;
  username:string;
  name:string;
  description:string;
  image:string;
}