import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, mapTo, mergeMap } from 'rxjs';
import { UserInterface, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:UserInterface|null = null;
  isSelf:boolean=false;
  constructor(private readonly route: ActivatedRoute, private readonly userService: UserService) {
    this.route.params
    .pipe(
      mergeMap((params)=>this.userService.getUser(params["id"])))
    .subscribe({
      next:(user)=>{
        this.user = user;
        this.isSelf = this.user!._id === this.userService.user!._id;
      }
    });

  }

  ngOnInit(): void {

  }

}
