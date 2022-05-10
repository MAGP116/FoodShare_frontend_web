import { Component, OnInit } from '@angular/core';
import { debounceTime, forkJoin, map, of, startWith, Subject, switchMap } from 'rxjs';
import { SearchUserService, UserSearch,} from '../../services/search-user/search-user.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  data: UserSearch[] = [];
  searchUser$ = new Subject();
  constructor(private readonly SearchUserService: SearchUserService) {}

  ngOnInit(): void {
    
  }
  getUsersSearch(name: any) {
    const keywork = name.target.value;

    // const debounceExample = keywork.pipe(debounceTime(3000));
    // console.log(debounceExample);
    
    this.searchUser$
      .pipe(
        debounceTime(2000),
        switchMap(() => {
          return forkJoin([this.SearchUserService.getUser(keywork)]);
        })
      )
      .subscribe((response:any)=>{
        console.log(response)
        this.data = response
      });
  }
}
