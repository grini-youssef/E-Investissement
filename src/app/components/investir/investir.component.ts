import { Component, OnInit } from '@angular/core';
import { IdeeModel } from 'src/app/shared/idee-model';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-investir',
  templateUrl: './investir.component.html',
  styleUrls: ['./investir.component.css']
})
export class InvestirComponent implements OnInit {

  idees: Array<IdeeModel> = [];

  constructor(private postService: PostService) { 
    this.postService.getAllPosts().subscribe(post => {
      this.idees = post;
    });
   }

  ngOnInit(): void {
  }

}
