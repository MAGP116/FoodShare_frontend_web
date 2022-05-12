import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PostInterface, PostService } from 'src/app/services/post/post.service';
import { MiniPostDialogComponent } from '../mini-post-dialog/mini-post-dialog.component';

@Component({
  selector: 'app-mini-post-image',
  templateUrl: './mini-post-image.component.html',
  styleUrls: ['./mini-post-image.component.css']
})
export class MiniPostImageComponent implements OnInit {
  @Input()post:PostInterface|null = null;
  constructor(
    private readonly dialog:MatDialog,
    private readonly route: Router,
    private readonly postService: PostService,
    ) { }

  ngOnInit(): void {
  }

  onClick(id:string){
    this.route.navigate([`/post/${id}`])
  }
}
