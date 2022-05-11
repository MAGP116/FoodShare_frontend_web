import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs';
import {
  followInterface,
  FollowService,
} from 'src/app/services/follow/follow.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-follow-card',
  templateUrl: './follow-card.component.html',
  styleUrls: ['./follow-card.component.css'],
})
export class FollowCardComponent implements OnInit {
  @Input() follow: followInterface | null = null;
  @Input() showUnfollow: boolean = false;
  show: boolean = true;
  constructor(
    private readonly followService: FollowService,
    public readonly userService: UserService,
    private readonly profile: ProfileService
  ) {}

  ngOnInit(): void {
    console.log(this.follow);
    
  }
  
  
  onUnfollow() {
    this.show = false;
    this.followService.unfollow(this.follow!._id).subscribe({
      complete: () => {
        this.profile.loadCountFollowing();
      },
    });
  }
}
