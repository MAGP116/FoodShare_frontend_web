import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { iif, mergeMap, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LikeService } from 'src/app/services/like/like.service';
import { PostInterface, PostService } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

export interface DataPost {
  postId: string;
  userId:string;
}

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
    
    public dialog: MatDialog
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
    this.dialog.open(ConfirmDeleteComponent, {
      data: {
        postId: this.post!._id,
        userId: this.userService.user!._id
      },
    });
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
