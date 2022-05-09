import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { mergeMap } from 'rxjs';
import { followCountInterface, followInterface, FollowService } from 'src/app/services/follow/follow.service';
import { UserInterface, UserService } from 'src/app/services/user/user.service';
import {MatDialog} from '@angular/material/dialog';
import { FollowsDialogComponent } from '../../components/follows-dialog/follows-dialog.component';
import { PostInterface, PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:UserInterface|null = null;
  isSelf:boolean=false;
  followers:number = 0;
  following:number = 0;
  posts:PostInterface[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
    private readonly followService: FollowService,
    private readonly postService: PostService,
    private readonly dialog:MatDialog) {
    this.route.params
    .pipe(
      mergeMap((params)=>this.userService.getUser(params["id"])),
      mergeMap((user)=>{
        this.user = user;
        this.isSelf = this.user!._id === this.userService.user!._id;
        return this.followService.getCountFollowers(this.user!._id);
      }),
      mergeMap((follows)=>{
        this.followers = follows.follows;
        return this.followService.getCountFollowing(this.user!._id);
      }),
      mergeMap((follows)=>{
        this.following = follows.follows;
        return this.postService.getUserPosts(this.user!._id);
      }),
      ).subscribe({next:(posts)=>{
        this.posts = posts;
      }})
  }

  openFollowers(){
    this.followService.getFollowers(this.user!._id).subscribe({
      next:(follows)=>{
        var ref = this.dialog.open(FollowsDialogComponent);
        console.log(follows);
        ref.componentInstance.follows = follows;
        ref.componentInstance.title = 'your followers';
        ref.componentInstance.showUnfollow = false;
      }
    });
  }
  openFollows(){
    this.followService.getFollowing(this.user!._id).subscribe({
      next:(follows)=>{
        var ref = this.dialog.open(FollowsDialogComponent);
        ref.componentInstance.follows = follows;
        ref.componentInstance.title = 'your follows';
        ref.componentInstance.showUnfollow = this.isSelf;
      }
    });
  }



  ngOnInit(): void {

  }

}
