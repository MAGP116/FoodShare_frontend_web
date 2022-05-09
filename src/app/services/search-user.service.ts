import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserSearch {
  _id: string;
  username: string;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class SearchUserService {
  private url = 'http://localhost:300/'; //TODO: CHANGE TO REAL URL
  user: UserSearch | null = null;

  constructor(private readonly http: HttpClient) {}

  getUser(id: string) {
    return this.http.get<UserSearch | null>(`${this.url}/user/search`, {
      withCredentials: true,
    });
  }
}
