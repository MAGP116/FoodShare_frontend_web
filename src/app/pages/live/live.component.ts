import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {
  public id: string = "";

  constructor(
    private readonly route: ActivatedRoute, 
    public readonly userService: UserService,
  ) {
    this.route.params.subscribe({
      next: (params) => {
        this.id = params["id"]
      },
    });
    this.userService.loadUser()
  }

  ngOnInit(): void {}
}
