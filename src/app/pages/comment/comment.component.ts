import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import { PostInterface, PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  post:PostInterface|null = null;
  constructor(private readonly route: ActivatedRoute,
    private readonly postService: PostService,
    ){
      this.route.params.pipe(
        mergeMap((params)=>this.postService.getPost(params["id"])),
        //TODO: ADD COMMENTS
      ).subscribe({
        next:(post)=>{
          this.post = post;
        }
      })
    }

  ngOnInit(): void {

  }

}
