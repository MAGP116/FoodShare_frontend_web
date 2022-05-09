import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000'//TODO: CHANGE TO REAL URL
  user:UserInterface|null=null;

  constructor(private readonly http: HttpClient) { }
  uploadProfileImage(file:File){
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.url}/user/profilePicture`, formData, {withCredentials: true,headers:{'Accept': 'application/json'}});
  }

  loadUser(){
    return this.http.get<UserInterface|null>(`${this.url}/user`,{withCredentials:true}).subscribe({next:(val)=>{
      this.user = val;
    }})
  }

  getUser(id:string){
    return this.http.get<UserInterface|null>(`${this.url}/user/${id}`,{withCredentials:true});
  }
}

export interface UserInterface {
  _id: string;
  username : string;
  email:string;
  name:string;
  description:string;
  image:string
}

export interface UserPreviewInterface{
  _id: string;
  username:string;
  name:string;
  image:string;
}

