import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from 'src/app/app.module';
import { UserPreviewInterface } from '../user/user.service';


export interface CommentInterface {
  _id: string;
  userId: UserPreviewInterface;
  postId: string;
  text:string
}

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = `${SERVER_URL}`;

  constructor(private readonly http: HttpClient) { }

  getComments(postId:string){
    return this.http.get<CommentInterface[]>(`${this.url}/comment/${postId}`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
  create(postId:string, text:string){
    return this.http.post(`${this.url}/comment/`,{postId,text},{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
  delete(commentId:string){
    return this.http.delete(`${this.url}/comment/${commentId}`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
}


