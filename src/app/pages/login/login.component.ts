import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Login Component');
    
  }


  ngOnInit(): void {
  }

}
