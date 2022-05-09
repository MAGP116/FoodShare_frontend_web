import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewPostService } from 'src/app/services/new-post/new-post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  description: string = '';
  image: File | null = null;
  filename: string = '';

  constructor(
    private readonly newPostService: NewPostService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onFileSelect(file: File) {
    this.image = file;
    this.filename = this.image.name;
  }

  sumbit() {
    if (this.image == null) {
      return;
    }
    const formData = new FormData();
    formData.append('description', this.description);
    formData.append('image', this.image);
    this.newPostService.createPost(formData).subscribe({
      next: (post) => {
        console.log(post);
        this.router.navigate(['/home']);
      },
    });
  }
}
