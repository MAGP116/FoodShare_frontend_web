import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUsernameService {

  constructor(private readonly http: HttpClient) { }

  randomUsername(){
    return this.http.get<any>("https://randomuser.me/api/?inc=login").pipe(map((val)=>val["results"][0]["login"]["username"]))
  }
}
