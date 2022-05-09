import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserPreviewInterface} from './user.service'


export interface PostInterface {
  image: string;
  description: string;
  publishedAt: Date;
  userId:UserPreviewInterface;
  __v: number;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'http://localhost:3000/'; //TODO: CHANGE TO REAL URL

  constructor(private readonly http: HttpClient) {}

  getPosts() {
    return this.http.get<PostInterface[]>(`${this.url}post`, {
      withCredentials: true,
    });
  }

  getUserPosts(id:string){
    return this.http.get<PostInterface[]>(`${this.url}post/user/${id}`, {
      withCredentials: true,
    });
  }
}
