import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './services/posts.service';
import { IPost } from './types/post.interface';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit{
  public posts:IPost[] = []
  private readonly postsService = inject(PostsService);


  ngOnInit(): void {
      this.postsService.loadPosts().subscribe(response => {
       this.posts = response;
      })
  }


}
