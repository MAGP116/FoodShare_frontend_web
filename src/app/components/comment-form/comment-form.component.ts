import { Component, Input, OnInit } from '@angular/core';
import { CommentPageService } from 'src/app/comment-page.service';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input()postId:string = '';
  text:string = '';
  uploading:boolean = false;
  constructor(
    private readonly commentService:CommentService,
    public readonly commentPage: CommentPageService) {
  }

  ngOnInit(): void {
  }

  sumbit(){
    console.log(this.text);
    if(this.postId === ''){
      return;
    }
    this.uploading = !this.uploading;
    this.commentService.create(this.postId,this.text).subscribe({complete:()=>{
        this.text = '';
        this.uploading = false;
        this.commentPage.reload();
      }})

  }

}
