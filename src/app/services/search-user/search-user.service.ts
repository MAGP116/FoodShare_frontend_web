import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';

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
  private url = 'http://localhost:3000/'; //TODO: CHANGE TO REAL URL
  user: UserSearch | null = null;

  constructor(private readonly http: HttpClient) {}

  getUser(name: string):Observable<UserSearch>{
    return this.http.get<UserSearch>(`${this.url}user/search?q=${name}`, {
      withCredentials: true,
    });
  }

  search(terms: Observable<UserSearch>){
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      
    )
  }
}
