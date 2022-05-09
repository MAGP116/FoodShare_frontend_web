import { Component, OnInit } from '@angular/core';
import { PostService, PostInterface } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';

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
    private readonly HomeService: PostService
  ) {

    this.HomeService.getPosts().subscribe((response: any) => {   
      console.log(response);
         
      this.posts = response
    });
  }

  ngOnInit(): void {}
}
