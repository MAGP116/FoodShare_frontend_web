import { Component, OnInit, Input } from '@angular/core';
import { postInterface } from 'src/app/services/home.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: postInterface | null = null;

  

  constructor() { 
    console.log(this.post);
    
  }

  ngOnInit(): void {
  }


}
