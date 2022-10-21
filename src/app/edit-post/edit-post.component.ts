import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../post-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  @ViewChild('editForm')
  editForm!: NgForm;


  editItemId!: number;

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.editItemId = params['id'];
      this.loadOlderValues();

    });

    this.route.params.subscribe(data => {
      this.editForm.setValue(this.postService.getPostByIndex(this.postService.currentEditingItemIndex));
    })
    // this.editForm = new FormGroup({
    //   title: new FormControl(),
    //   content: new FormControl(),
    //  });
    // this.editForm.nativeElement.resetForm()
    // this.editForm.nativeElement.setValue(this.postService.getPostByIndex(this.postService.currentEditingItemIndex));
  }
  onSubmit() {
    const post = new Post(this.editItemId, this.editForm.value.title, this.editForm.value.content);
    this.postService.updatePost(this.editItemId, post);
    this.router.navigate(['all']);
  }

  onDeleteItem() {
    this.postService.deletePost(this.editItemId);
    this.router.navigate(['all']);
  }
  loadOlderValues() {
    const post = this.postService.getPostByIndex(this.postService.currentEditingItemIndex);
    this.editForm.setValue({
      content: "post.content",
      title: "post.title"
    })
  }
}
