import { Component, Input, OnInit } from '@angular/core';
import { CommentPageService } from 'src/app/comment-page.service';
import { CommentInterface, CommentService } from 'src/app/services/comment/comment.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input() comment:CommentInterface|null = null;
  constructor(public readonly userService: UserService,
    private readonly commentService:CommentService,
    private readonly commentPage: CommentPageService) { }

  ngOnInit(): void {
  }

  onDelete(){
    if(this.comment === null){
      return;
    }
    this.commentService.delete(this.comment._id).subscribe({complete:()=>{
      this.commentPage.reload();
    }})
    
  }
}
