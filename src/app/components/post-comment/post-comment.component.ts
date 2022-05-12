import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { iif, mergeMap, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LikeService } from 'src/app/services/like/like.service';
import { PostInterface, PostService } from 'src/app/services/post/post.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css'],
})
export class PostCommentComponent implements OnInit {
  @Input() post: PostInterface | null = null;
  @Input() inComments: boolean = false;
  likes: number = 0;
  liked: boolean = false;

  constructor(
    private readonly likeService: LikeService,
    private readonly authService: AuthService,
    public readonly userService: UserService,
    private readonly postService: PostService,
    private readonly profile:ProfileService,
    private readonly route: Router,
  ) {}

  onFav() {
    if (!this.liked) {
      this.likeService.create(this.post!._id).subscribe({
        next: (val) => {
          this.liked = true;
          this.likes += 1;
        },
      });
    } else {
      this.likeService.delete(this.post!._id).subscribe({
        next: () => {
          this.liked = false;
          this.likes -= 1;
        },
      });
    }
  }

  onSeeLikes() {}

  onDelete() {   
    this.postService.delete(this.post!._id).subscribe();
    this.route.navigate([`/profile/${this.post!.userId._id}`])
    this.profile.loadPosts();
  }

  ngOnInit(): void {
    this.likeService
      .getCountByPost(this.post!._id)
      .pipe()
      .subscribe({
        next: (likes) => {
          this.likes = likes.count;
        },
      });

    this.authService
      .isAuthenticated()
      .pipe(
        mergeMap((res) =>
          iif(
            () => {
              return res.status == 200;
            },
            this.likeService.likedByUser(this.post!._id),
            of(false)
          )
        )
      )
      .subscribe({
        next: (liked) => {
          this.liked = liked;
        },
      });
  }
}
