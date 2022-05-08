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

  getUser(){
    return this.http.get<UserInterface|null>(`${this.url}/user`,{withCredentials:true}).subscribe({next:(val)=>{
      this.user = val;
    }})
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

