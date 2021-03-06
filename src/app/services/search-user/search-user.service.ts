import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { SERVER_URL } from 'src/app/app.module';

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
  private url = `${SERVER_URL}`;
  user: UserSearch | null = null;

  constructor(private readonly http: HttpClient) {}

  getUser(name: string):Observable<UserSearch>{
    return this.http.get<UserSearch>(`${this.url}/user/search?q=${name}`, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }

  search(terms: Observable<UserSearch>){
    return terms.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      
    )
  }
}
