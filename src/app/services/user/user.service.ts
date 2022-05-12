import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  private url = 'https://food-share-back-end.herokuapp.com'; //TODO: CHANGE TO REAL URL
  user: UserInterface | null = null;

  constructor(private readonly http: HttpClient) {}
  uploadProfileImage(file: File) {
    let formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<UserImageInterface>(
      `${this.url}/user/profilePicture`,
      formData,
      { withCredentials: true, headers: { Accept: 'application/json' } }
    );
  }

  update(params: Object) {
    return this.http.put(`${this.url}/user`, params, {
      withCredentials: true,
      headers: { Accept: 'application/json' },
    });
  }

  loadUser(){
    this.http.get<UserInterface|null>(`${this.url}/user`,{withCredentials:true}).subscribe({next:(val)=>{
      this.user = val;
    },error:()=>{}})
  }

  getUser(id: string) {
    return this.http.get<UserInterface | null>(`${this.url}/user/${id}`, {
      withCredentials: true,
    });
  }
}
