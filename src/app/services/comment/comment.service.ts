import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  private url = 'http://localhost:3000'//TODO: CHANGE TO REAL URL

  constructor(private readonly http: HttpClient) { }

  getComments(postId:string){
    return this.http.get<CommentInterface[]>(`${this.url}/comment/${postId}`,{withCredentials:true});
  }
  create(postId:string, text:string){
    return this.http.post(`${this.url}/comment/`,{postId,text},{withCredentials:true});
  }
  delete(commentId:string){
    return this.http.delete(`${this.url}/comment/${commentId}`,{withCredentials:true});
  }
}


