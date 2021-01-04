import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdeeModel } from 'src/app/shared/idee-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-investir',
  templateUrl: './investir.component.html',
  styleUrls: ['./investir.component.css']
})
export class InvestirComponent implements OnInit {

  posts: Array<IdeeModel> = [];

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  
  }

  ngOnInit(): void {    
  

  }

  

}
