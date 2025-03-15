import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../types/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly http = inject(HttpClient);

  loadPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }

}
