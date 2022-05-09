import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { followInterface, FollowService } from 'src/app/services/follow.service';
import { UserInterface, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  fileName:String = '';
  file:File|null = null;
  follows:Array<followInterface> = [];
  constructor(private readonly titleService: Title,
    public readonly userService: UserService,
    private readonly followService: FollowService) {
    this.titleService.setTitle('Test');
  }

  ngOnInit(): void {
  }

  onFileSelect(file:File){
    this.file = file;
    this.fileName = this.file.name
  }
  onSubmitFile(){
    if(this.file == null){
      return
    }
    this.userService.uploadProfileImage(this.file).subscribe({next:(val)=>{
      console.log(val);
    }})
  }

  onGetUser(){
    this.userService.loadUser();
  }

  onGetFollowers(){
    if(!this.userService.user){
      return;
    }
    console.log("Aqui")
    this.followService.getFollowers(this.userService.user!._id).subscribe({next:(val)=>{
      console.log(val);
      this.follows = val;
    }})
  }

  onGetFollowing(){
    if(!this.userService.user){
      return;
    }
    console.log("Aqui")
    this.followService.getFollowing(this.userService.user!._id).subscribe({next:(val)=>{
      console.log(val);
      this.follows = val;
    }})
  }
  onFollow(){
    this.followService.follow("6275d38d64a2569382f7622a").subscribe({next:(val)=>{}})
  }
  onUnfollow(){
    this.followService.unfollow("6275d38d64a2569382f7622a").subscribe();
  }
}
