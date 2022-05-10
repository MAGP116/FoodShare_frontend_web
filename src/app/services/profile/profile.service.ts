import { Injectable } from '@angular/core';
import { iif, mergeMap, of } from 'rxjs';
import { FollowService } from '../follow/follow.service';
import { PostInterface, PostService } from '../post/post.service';
import { UserInterface, UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  id:string|null = null;
  user:UserInterface|null = null;
  isSelf:boolean=false;
  followed:boolean= false;
  followers:number = 0;
  following:number = 0;
  posts:PostInterface[] = [];
  constructor(
    private readonly userService: UserService,
    private readonly followService: FollowService,
    private readonly postService: PostService,
  ) { }

  load(id:string){
    this.id = null;
    this.id = id;
    this.reload();
  }

  reload(){
    if(this.id == null){
      return;
    }
    this.user = null;
    this.isSelf=false;
    this.followers=0;
    this.following = 0;
    this.posts = [];
    this.userService.getUser(this.id).pipe(
      mergeMap(
        (user)=>iif(
          ()=>{
            this.user = user;
            this.isSelf = this.id === this.userService.user!._id;
            return !this.isSelf
          },
          this.followService.isFollowed(this.id!),
          of(false)
          )
        ),
    ).subscribe({next:(val)=>{
      this.followed = val;
    }})
    this.followService.getCountFollowers(this.id).subscribe({
      next:(follows)=>{
        this.followers = follows.follows;
      }
    })
    this.followService.getCountFollowing(this.id).subscribe({
      next:(follows)=>{
        this.following = follows.follows;
      }
    })
    this.postService.getUserPosts(this.id).subscribe({
      next:(posts)=>{
        this.posts = posts;
      }
    })

  }
}
