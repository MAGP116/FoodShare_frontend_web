import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../../services/search-user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  data = [];
  constructor(private readonly SearchUserService: SearchUserService) {}
  
  ngOnInit(): void {}
  getUsersSearch(name: any) {
    const keywork = name.target.value;
    console.log(keywork);
    this.SearchUserService.getUser(keywork).subscribe((response: any) => {            
      this.data = response
      console.log(this.data);
    });
    
  }
}
