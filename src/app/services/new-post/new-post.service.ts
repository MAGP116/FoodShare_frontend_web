import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor(private readonly http: HttpClient) { }
  private url = 'http://localhost:3000';

  createPost(formData: FormData): Observable<Object> {
    return this.http.post(`${this.url}/post`, formData, {withCredentials: true});
  }
}
