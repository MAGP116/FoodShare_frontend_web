import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserPreviewInterface} from '../user/user.service'


export interface PostInterface {
  image: string;
  description: string;
  publishedAt: Date;
  userId:UserPreviewInterface;
  _id: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url = 'https://food-share-back-end.herokuapp.com/'; //TODO: CHANGE TO REAL URL
  post: PostInterface | null = null;
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
  getPost(id:string){
    return this.http.get<PostInterface>(`${this.url}post/${id}`, {
      withCredentials: true,
    });
  }

  delete(id:string){
    return this.http.delete<void>(`${this.url}post/${id}`, {
      withCredentials: true,
    });
  }
}
