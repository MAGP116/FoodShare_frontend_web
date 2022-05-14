import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserPreviewInterface} from '../user/user.service'
import { SERVER_URL } from 'src/app/app.module';


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
  private url = `${SERVER_URL}`; 
  post: PostInterface | null = null;
  constructor(private readonly http: HttpClient) {}

  getPosts() {
    return this.http.get<PostInterface[]>(`${this.url}/post`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  getUserPosts(id:string){
    return this.http.get<PostInterface[]>(`${this.url}/post/user/${id}`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
  getPost(id:string){
    return this.http.get<PostInterface>(`${this.url}/post/${id}`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  delete(id:string){
    return this.http.delete<void>(`${this.url}/post/${id}`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
}
