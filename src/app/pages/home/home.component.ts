import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly titleService: Title) {
    this.titleService.setTitle('Home');
  }

  ngOnInit(): void {
  }

}
