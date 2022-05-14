import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL } from 'src/app/app.module';

export interface UserInterface {
  _id: string;
  username : string;
  email:string;
  name:string;
  description:string;
  image:string;
  resgitrationCompleted:boolean;
}

export interface UserUpdateInterface {
  username: string;
  email: string;
  name: string;
  description: string;
  file: File | null;
}

export interface UserPreviewInterface {
  _id: string;
  username: string;
  name: string;
  image: string;
}

export interface UserImageInterface {
  status: number;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = `${SERVER_URL}`;
  user: UserInterface | null = null;

  constructor(private readonly http: HttpClient) {}
  uploadProfileImage(file: File) {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<UserImageInterface>(
      `${this.url}/user/profilePicture`,
      formData,
      {headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||'', Accept: 'application/json' }),}
    );
  }

  update(params: Object) {
    return this.http.put(`${this.url}/user`, params, {
      withCredentials: true,
      headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||'', Accept: 'application/json' }),
    });
  }

  loadUser(){
    this.http.get<UserInterface|null>(`${this.url}/user`,{ headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) }).subscribe({next:(val)=>{
      this.user = val;
    },error:()=>{}})
  }

  getUser(id: string) {
    return this.http.get<UserInterface | null>(`${this.url}/user/${id}`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
}
