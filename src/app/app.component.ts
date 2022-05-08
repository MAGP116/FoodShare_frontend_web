import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserInterface, UserService } from './services/user.service';

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
      }
    })

    userService.loadUser();
  }

  logOut(){
    window.location.href="http://localhost:3000/auth/logout"
  }


}
