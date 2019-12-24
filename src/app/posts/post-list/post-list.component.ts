import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostsService } from "../posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
posts: Post[] = [];
private postsSub: Subscription;
// posts = [
//   {title:'First Post', content:'This is the first post\'s content'},
//   {title:'Second Post', content:'This is the Second post\'s content'},
//   {title:'Third Post', content:'This is the Third post\'s content'}
// ];
  constructor(public postsService: PostsService) { }
  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
     .subscribe( (posts:Post[]) => {
      this.posts = posts;
    });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
