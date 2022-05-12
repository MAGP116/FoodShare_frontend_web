import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, mergeMap, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  UserService,
  UserUpdateInterface,
} from 'src/app/services/user/user.service';

@Component({
  selector: 'app-complete-user',
  templateUrl: './complete-user.component.html',
  styleUrls: ['./complete-user.component.css'],
})
export class CompleteUserComponent implements OnInit {
  constructor(public readonly userService: UserService,
    private readonly router: Router,
    private readonly authService: AuthService) {}

  ngOnInit(): void {}

  onCancel(){
    this.authService.logOut().pipe(catchError((err)=>{
     return of({})})).subscribe({complete:()=>{
      this.router.navigate([`/`]);
    }})
    
  }

  onSubmit(event: UserUpdateInterface) {
    this.userService.uploadProfileImage(event.file!).pipe(mergeMap(
      (url)=>this.userService.update({
        name:event.name,
        username:event.username,
        email:event.email,
        description:event.description,
        image:url.url
      })
    )).subscribe({complete:()=>{
      this.userService.loadUser();
      this.router.navigate([`/home`]);
    }})
  }
}
