import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/app/app.module';
import { UserPreviewInterface } from '../user/user.service';


export interface LikeInterface {
  userId:UserPreviewInterface;
  postId: string|null;
  _id: string;
}

export interface countInterface {
  count:number;
  liked:boolean;
}


@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private url = `${SERVER_URL}`; 
  constructor(private readonly http: HttpClient) {}

  getbyPost(id:string){
    return this.http.get<LikeInterface[]>(`${this.url}/like/post/${id}`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  getCountByPost(id:string){
    return this.http.get<countInterface>(`${this.url}/like/post/${id}/count`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  likedByUser(id:string){
    return this.http.get<boolean>(`${this.url}/like/${id}`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  create(postId:string){
    return this.http.post<LikeInterface>(`${this.url}/like/${postId}`,{}, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  delete(postId:string){
    return this.http.delete<void>(`${this.url}/like/${postId}`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
}

