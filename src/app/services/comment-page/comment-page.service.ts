import { Injectable } from '@angular/core';
import { combineLatestWith } from 'rxjs';
import { CommentInterface, CommentService } from '../comment/comment.service';
import { PostInterface, PostService } from '../post/post.service';

@Injectable({
  providedIn: 'root'
})
export class CommentPageService {
  postId:string|null = null;
  post:PostInterface|null = null;
  comments:CommentInterface[] = [];
  
  constructor(private readonly postService: PostService,
    private readonly commentService: CommentService) { }

  load(postId:string){
    this.postId = postId;
    this.post = null;
    this.comments = [];
    this.reload();

  }

  reload(){
    if(this.postId == null){
      return;
    }
    this.postService.getPost(this.postId).pipe(
      combineLatestWith(this.commentService.getComments(this.postId))
    ).subscribe({next:([post, comments])=>{
      this.post = post;
      this.comments = comments;
    }})
  }
}
