import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostInterface, PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
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
    private readonly postService: PostService,
    ) { }

  ngOnInit(): void {
  }

  onClick(id:string){
    console.log(id);
    this.postService.getPost(id).subscribe({next:(post)=>{
      var ref = this.dialog.open(MiniPostDialogComponent);
      ref.componentInstance.post = post;
    }})
  }
}
