import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { SERVER_URL } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  constructor(private readonly http: HttpClient) { }
  private url = `${SERVER_URL}`;

  createPost(formData: FormData): Observable<Object> {
    return this.http.post(`${this.url}/post`, formData, { headers: new HttpHeaders({'auth':window.localStorage.getItem('auth')||''}) });
  }
}
