import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService, signUpFormInterface } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  form: FormGroup;
  sending: boolean = false;
  
  constructor(private readonly authService: AuthService,
    private readonly route: Router,
    private readonly snackBar: MatSnackBar,private readonly userService:UserService) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.email,
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    }
    );
  }

  onSubmit(formValue: signUpFormInterface){
    this.sending = true;
    this.authService.register(formValue).subscribe({
      next:()=>{
        this.userService.loadUser();
        this.route.navigate(['/home']);
      },
      error:(err)=>{
        this.sending = false;
        if(err.error === '400 invalid Input: Email already used'){
          this.snackBar.open('email already used','close');
        }
      }
    });
  }

  onGoBack(){
    this.route.navigate(['']);
  }

  ngOnInit(): void {
  }

}
