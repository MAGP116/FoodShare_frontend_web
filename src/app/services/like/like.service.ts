import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  private url = 'http://localhost:3000/'; //TODO: CHANGE TO REAL URL
  constructor(private readonly http: HttpClient) {}

  getbyPost(id:string){
    return this.http.get<LikeInterface[]>(`${this.url}like/post/${id}`, {
      withCredentials: true,
    });
  }

  getCountByPost(id:string){
    return this.http.get<countInterface>(`${this.url}like/post/${id}/count`, {
      withCredentials: true,
    });
  }

  likedByUser(id:string){
    return this.http.get<boolean>(`${this.url}like/${id}`, {
      withCredentials: true,
    });
  }

  create(postId:string){
    return this.http.post<LikeInterface>(`${this.url}like/${postId}`,{}, {
      withCredentials: true,
    });
  }

  delete(postId:string){
    return this.http.delete<void>(`${this.url}like/${postId}`, {
      withCredentials: true,
    });
  }
}

