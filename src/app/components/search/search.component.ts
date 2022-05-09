import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../../services/search-user.service';
import { debounceTime } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  data = [];
  subject: Subject<any> = new Subject();
  autoCompletFormControl = new FormControl();
  constructor(private readonly SearchUserService: SearchUserService) {}

  ngOnInit(): void {}
  getUsersSearch(name: any) {
    const keywork = name.target.value;
    // const debounceExample = keywork.pipe(debounce(() => timer(6000)));
    // const result = debounceExample.subscribe((val: any) => {
    //   console.log('Val:', val);
    //   console.log("Val2: ", debounceExample);
    // });

    this.SearchUserService.getUser(keywork).subscribe((response: any) => {
      this.data = response
      console.log(this.data);
    });
  }
}
