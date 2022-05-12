import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor(private readonly http: HttpClient) { }
  private url = 'https://food-share-back-end.herokuapp.com/';

  createPost(formData: FormData): Observable<Object> {
    return this.http.post(`${this.url}/post`, formData, {withCredentials: true});
  }
}
