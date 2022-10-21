import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { HttpService } from '../http-service';
import { PostService } from '../post-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  posts: Post[]=[];
  subscription!:Subscription;
  index=new Subject<number>();

  constructor(private postService: PostService, private router: Router, private httpService:HttpService) { }

  ngOnInit(): void {
    this.postService.currentEditingItemIndex=-1
    this.subscription=this.postService.postsChanged.subscribe(
      (posts: Post[])=>{
        this.posts=posts;
      }
    );
    this.httpService.getAllPosts().subscribe((response) => {
      this.posts=response;
      this.postService.setPosts(response);
    });
  }
  onItemClick(index: number) {
    this.postService.currentEditingItemIndex=index;
    this.router.navigate(['edit', this.posts[index].id])
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
