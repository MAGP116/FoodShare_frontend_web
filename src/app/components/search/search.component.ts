import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, startWith, Subject, switchMap } from 'rxjs';
import {
  SearchUserService,
  UserSearch,
} from '../../services/search-user/search-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  data: UserSearch[] = [];
  searchUser$ = new Subject();
  key: string = '';
  constructor(private readonly SearchUserService: SearchUserService) {}

  ngOnInit(): void {
    this.searchUser$
      .pipe(
        debounceTime(450),
        switchMap((key: any) => {
          return this.SearchUserService.getUser(key);
        })
      )
      .subscribe({
        next: (usersearch: any) => {
          this.data = usersearch;
          console.log('Cambios: ', this.data);
        },
      });
  }

  getUsersSearch(name: any) {
    this.key = name.target.value;
    this.searchUser$.next(this.key);
  }
}
