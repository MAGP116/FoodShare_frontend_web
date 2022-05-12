import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { UserInterface, UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodShare';
  isAuthenticated = false;

  constructor(private readonly authService: AuthService, public readonly userService: UserService){
    authService.isAuthenticated().subscribe({
      next:(res)=>{
        console.log(res);
        this.isAuthenticated = res.status === 200;
      },error:(err)=>{
        console.log(err);
        
      }
    })

    userService.loadUser();
  }

  logOut(){
    window.location.href="https://food-share-back-end.herokuapp.com/auth/logout"
  }


}
