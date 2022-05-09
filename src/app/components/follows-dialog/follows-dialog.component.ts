import { Component, OnInit } from '@angular/core';
import { followInterface } from 'src/app/services/follow/follow.service';


@Component({
  selector: 'app-follows-dialog',
  templateUrl: './follows-dialog.component.html',
  styleUrls: ['./follows-dialog.component.css']
})
export class FollowsDialogComponent implements OnInit {
  title:string = '';
  follows:Array<followInterface> = [];
  showUnfollow:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
