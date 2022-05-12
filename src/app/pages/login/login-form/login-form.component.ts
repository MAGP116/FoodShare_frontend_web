import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { AuthService, logInFormatInterface } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  sending: boolean = false;
  constructor(private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly route: Router,
    private readonly snackBar: MatSnackBar) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    }
    );
  }

  onSubmit(formValue: logInFormatInterface) {
    this.sending = true;
    this.authService.login(formValue).subscribe({
      next: (val:any) => {
        console.log('aq',val)
        this.userService.loadUser();
        this.route.navigate(['/home']);

      },
      error:(err)=>{
        console.log(err);
        this.sending = false;
        if(err.error === '400 invalid Input: email or password invalid'){
          this.snackBar.open('email or password invalid','close');
        }
        this.route.navigate(['/']);
      }
    });

  }

  onSignup() {
    this.route.navigate(['/signup']);
  }

  onLoginGoogle() {
    window.location.href = 'http://localhost:3000/auth/google/login' //TODO: CHANGE TO REAL URL

  }

  onLoginFacebook() {
    window.location.href = 'http://localhost:3000/auth/facebook/login' //TODO: CHANGE TO REAL URL
  }

  ngOnInit(): void {
  }

}
