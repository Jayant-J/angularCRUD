import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @ViewChild('f')
  formEle!: NgForm;

  content!: string;
  title!: string;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const post = new Post(-1, this.formEle.value.title, this.formEle.value.content);
    this.postService.addPost(post);
    this.router.navigate(['all']);
  }
  
}
