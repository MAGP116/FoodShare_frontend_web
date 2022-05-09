import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserPreviewInterface} from '../services/user.service'


export interface postInterface {
  image: string;
  description: string;
  publishedAt: Date;
  userId:UserPreviewInterface;
  __v: number;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = 'http://localhost:3000/'; //TODO: CHANGE TO REAL URL

  constructor(private readonly http: HttpClient) {}

  getPosts() {
    return this.http.get<postInterface[]>(`${this.url}post`, {
      withCredentials: true,
    });
  }
}
