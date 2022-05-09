import { Component, OnInit } from '@angular/core';
import { HomeService, postInterface } from 'src/app/services/home.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isSelf: boolean = false;
  posts: Array<postInterface> = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly HomeService: HomeService
  ) {

    this.HomeService.getPosts().subscribe((response: any) => {   
      console.log(response);
         
      this.posts = response
    });
  }

  ngOnInit(): void {}
}
