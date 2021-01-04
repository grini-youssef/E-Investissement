import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { throwError } from 'rxjs';
import { CommentPayload } from 'src/app/comment/comment.payload';
import { CommentService } from 'src/app/comment/comment.service';
import { IdeeModel } from 'src/app/shared/idee-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  ideeId: number;
  post: IdeeModel;
  commentForm: FormGroup;
  commentPayload: CommentPayload;
  comments: CommentPayload[];
  faComments = faComments;

  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
    private commentService: CommentService, private router: Router) { 
      this.ideeId = this.activateRoute.snapshot.params.id;

      this.commentForm = new FormGroup({
        text: new FormControl('', Validators.required)
      });
      this.commentPayload = {
        text: '',
        ideeId: this.ideeId
      };
   }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
  }

  private getPostById() {
    this.postService.getIdee(this.ideeId).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(error);
    });
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text').value;
    this.commentService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text').setValue('');
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    })
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.ideeId).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }

}
