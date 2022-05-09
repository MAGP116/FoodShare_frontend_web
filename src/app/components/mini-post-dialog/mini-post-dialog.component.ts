import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostInterface, PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-mini-post-dialog',
  templateUrl: './mini-post-dialog.component.html',
  styleUrls: ['./mini-post-dialog.component.css']
})
export class MiniPostDialogComponent implements OnInit {
  post:PostInterface|null = null;
  constructor(
    private readonly postService: PostService,
    public readonly userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.postService.delete(this.post!._id).subscribe();
  }

}
