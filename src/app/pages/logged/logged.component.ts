import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor(
    private readonly router: ActivatedRoute,
    private readonly route: Router,
    private readonly userService: UserService) { }

  ngOnInit(): void {
    this.router.params.subscribe({next:(params)=>{
      window.localStorage.setItem('auth',params['token']);
      this.userService.loadUser();
      this.route.navigate(['/home']);
    }})
  }

}
