import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostInterface, PostService } from 'src/app/services/post/post.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
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
    private readonly route: Router,
    public readonly userService: UserService,
    private readonly profile:ProfileService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(){
    this.postService.delete(this.post!._id).subscribe();
    this.profile.loadPosts();
  }

  onComment(){
    this.route.navigate([`/post/${this.post?._id}`])
  }

}
