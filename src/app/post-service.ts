import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpService } from "./http-service";
import { Post } from "./post.model";

@Injectable()
export class PostService {
    posts: Post[] = [];
    currentEditingItemIndex=-1
    postsChanged=new Subject<Post[]>();


    constructor(private httpService: HttpService) { }

    setPosts(posts: Post[]) {
        this.posts = posts;
    }

    getAllPosts() {
        this.httpService.getAllPosts().subscribe((response) => {
            this.setPosts(response);
        });
        return this.posts;
    }
    getPostById(id: number) {
        this.httpService.getPostsById(id);
    }
    getPostByIndex(index: number): Post {
        return this.posts.slice()[index];
    }
    addPost(post: Post) {
        this.httpService.addPost(post);
        this.postsChanged.next(this.posts.slice());
        this.getAllPosts();
    }
    updatePost(id: number, post: Post) {
        this.httpService.editPost(id, post);
        this.postsChanged.next(this.posts.slice());
        this.getAllPosts();
    }

    deletePost(id: number) {
        this.httpService.deletePost(id);
        this.postsChanged.next(this.posts.slice());
        this.getAllPosts();
    }


}