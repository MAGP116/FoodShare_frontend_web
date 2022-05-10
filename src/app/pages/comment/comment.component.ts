import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentPageService } from 'src/app/comment-page.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute,
    public readonly commentPage: CommentPageService,
    ){
      this.route.params.subscribe({
        next:(params)=>{
          this.commentPage.load(params["id"]);
        }
      })
    }

  ngOnInit(): void {

  }

}