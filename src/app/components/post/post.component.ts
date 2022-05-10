import { Component, OnInit, Input } from '@angular/core';
import { combineLatestWith, iif, mergeMap, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LikeService } from 'src/app/services/like/like.service';
import { PostInterface } from 'src/app/services/post/post.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: PostInterface | null = null;
  @Input() inComments: boolean = false;
  likes:number = 0;
  liked:boolean = false;

  constructor(private readonly likeService: LikeService,
    private readonly authService:AuthService) {
      console.log(this.post);
  }

  onFav(){

    if(!this.liked){
      this.likeService.create(this.post!._id).subscribe(
        {next:(val)=>{
          this.liked = true;
          this.likes += 1;
        }}
      );
    }else{
      this.likeService.delete(this.post!._id).subscribe({next:()=>{
        this.liked = false;
        this.likes -= 1;
      }})
    }
  }

  onSeeLikes(){

  }

  ngOnInit(): void {
    console.log(this.post);
    this.likeService.getCountByPost(this.post!._id).pipe(
    ).subscribe({next:(likes)=>{
      this.likes = likes.count;
      
    }});
    
    this.authService.isAuthenticated().pipe(
      mergeMap(
        (res)=>iif(
          ()=>{
            console.log(res);
            return res.status==200
          },
          this.likeService.likedByUser(this.post!._id),
          of(false)
          )
        )
      ).subscribe({
        next:(liked)=>{
          this.liked = liked;
        }
      })

  }


}
