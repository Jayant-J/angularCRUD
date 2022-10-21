import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(private http: HttpClient) { }

    getAllPosts() {
        return this.http.get<Post[]>("http://localhost:8081/posts/all");
    }

    addPost(postData: Post) {
        this.http.post("http://localhost:8081/posts/add", postData).subscribe((response) => console.log("addPost : ", postData));
    }
    getPostsById(id: number) {
        return this.http.get<Post>("http://localhost:8081/posts/byId", {params: {id: id}}).subscribe((response) => console.log("getPostsById : ", id));
    }
    deletePost(id: number) {
        console.log(this.http.delete('http://localhost:8081/posts/delete/'+id).subscribe((response)=>console.log("deletePost : ", id)));
    }
    editPost(id: number, post: Post){
        console.log(this.http.put('http://localhost:8081/posts/edit/'+id, post) .subscribe((response)=>console.log("editPost : ", id)));
    }
}