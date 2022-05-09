import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;
  constructor(private readonly authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('', Validators.compose([
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
   
  onSubmit(formValue: FormGroup){
    console.log(formValue);//TODO: IMPLEMENT LOGIN WITH EMAIL
  }

  onLoginGoogle(){
  window.location.href='http://localhost:3000/auth/google/login' //TODO: CHANGE TO REAL URL

  }

  onLoginFacebook(){
    window.location.href='http://localhost:3000/auth/facebook/login' //TODO: CHANGE TO REAL URL
  }

  ngOnInit(): void {
  }

}
