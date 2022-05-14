import { Component } from '@angular/core';
import { SERVER_URL } from './app.module';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodShare';
  isAuthenticated = false;

  constructor(private readonly authService: AuthService, public readonly userService: UserService){
    this.authService.isAuthenticated().subscribe({
      next:(res)=>{
        
        this.isAuthenticated = res.status === 200;
      },error:(err)=>{
      }
    })

    userService.loadUser();
  }

  logOut(){
    window.localStorage.removeItem('auth');
    window.location.href=`${SERVER_URL}/auth/logout`
  }


}
