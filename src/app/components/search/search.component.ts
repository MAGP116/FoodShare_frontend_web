import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  filter,
  Subject,
  switchMap,
} from 'rxjs';
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
  constructor(private readonly SearchUserService: SearchUserService) {}

  ngOnInit(): void {}

  getUsersSearch(name: any) {
    const keywork = name.target.value;

    this.searchUser$
      .pipe(
        filter((k) => k != ''),
        debounceTime(2000),
        switchMap(() => {
          return this.SearchUserService.getUser(keywork);
        })
      )
      .subscribe({
        next: (usersearch: any) => {
          this.data = usersearch;
          console.log('Cambios: ', this.data);
        },
      });
  }
}
