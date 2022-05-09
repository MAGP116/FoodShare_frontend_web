import { Component, OnInit, Input } from '@angular/core';
import { PostInterface } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: PostInterface | null = null;

  

  constructor() { 
    console.log(this.post);
    
  }

  ngOnInit(): void {
  }


}
