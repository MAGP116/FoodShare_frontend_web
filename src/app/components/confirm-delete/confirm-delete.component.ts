import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user/user.service';
import { PostService } from 'src/app/services/post/post.service';
import { DataPost } from 'src/app/components/post-comment/post-comment.component';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent implements OnInit {
  constructor(
    private readonly user: UserService,
    private readonly post: PostService,
    private readonly postService: PostService,
    private readonly profile: ProfileService,
    private readonly route: Router,
    @Inject(MAT_DIALOG_DATA) public data: DataPost
  ) {}

  ngOnInit(): void {}

  onDelete() {
    console.log('Empieza a funcionar', this.data.userId);
    console.log('post', this.data.postId);

    this.postService.delete(this.data.postId).subscribe();
    this.route.navigate([`/profile/${this.data.userId}`])
    this.profile.loadPosts();
  }
}
