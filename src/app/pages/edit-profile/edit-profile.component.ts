import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { UserService, UserUpdateInterface } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(public readonly userService: UserService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(event:UserUpdateInterface){
    if(event.file){
      this.userService.uploadProfileImage2(event.file!).pipe(mergeMap(
        (url)=>this.userService.update({
          name:event.name,
          username:event.username,
          email:event.email,
          description:event.description,
          image:url.url
        })
      )).subscribe({complete:()=>{
        this.userService.loadUser();
        this.router.navigate([`/profile/${this.userService.user?._id}`])
      }})
    }
    else{
      this.userService.update({
        name:event.name,
        username:event.username,
        email:event.email,
        description:event.description
      }).subscribe({complete:()=>{
        this.userService.loadUser();
        this.router.navigate([`/profile/${this.userService.user?._id}`])
      }})
    }
  }

}
