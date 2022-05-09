import { Component, OnInit } from '@angular/core';
import { HomeService, PostInterface } from 'src/app/services/home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isSelf: boolean = false;
  posts: Array<PostInterface> = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly HomeService: HomeService
  ) {

    this.HomeService.getPosts().subscribe((response: any) => {            
      this.posts = response
    });
  }

  ngOnInit(): void {}
}
