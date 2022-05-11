import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {FollowService } from 'src/app/services/follow/follow.service';
import {MatDialog} from '@angular/material/dialog';
import { FollowsDialogComponent } from '../../components/follows-dialog/follows-dialog.component';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly followService: FollowService,
    public readonly profile:ProfileService,
    private readonly dialog:MatDialog) {
    this.route.params.subscribe({next:(params)=>{
        this.profile.load(params["id"])
      }})
  }

  openFollowers(){
    console.log(this.profile.posts);
    this.followService.getFollowers(this.profile.user!._id).subscribe({
      next:(follows)=>{
        var ref = this.dialog.open(FollowsDialogComponent);
        console.log(follows);
        ref.componentInstance.follows = follows;
        ref.componentInstance.title = 'followers';
        ref.componentInstance.showUnfollow = false;
      }
    });
  }
  
  openFollows(){
    this.followService.getFollowing(this.profile.user!._id).subscribe({
      next:(follows)=>{
        var ref = this.dialog.open(FollowsDialogComponent);
        ref.componentInstance.follows = follows;
        ref.componentInstance.title = 'follows';
        ref.componentInstance.showUnfollow = this.profile.isSelf;
      }
    });
  }
  onFollow(){
    if(this.profile.id == null){
      return
    }
    // this.followService.follow(this.profile.id).subscribe({complete:()=>{
    //   this.profile.followed = true;
    //   this.profile.followers += 1;
    // }})
    this.followService.follow(this.profile.id).subscribe({
      complete:()=>{
        this.profile.loadCountFollowers()
        this.profile.followed = true;
      }
    })
  }

  onUnfollow(){
    if(this.profile.id == null){
      return
    }
    this.followService.unfollow(this.profile.id).subscribe({
      complete:()=>{
        this.profile.loadCountFollowers()
        this.profile.followed = false;
      }
    })
  }

  onEdit(){
    this.router.navigate(['/edit/profile']);
  }

  ngOnInit(): void {
  }

}