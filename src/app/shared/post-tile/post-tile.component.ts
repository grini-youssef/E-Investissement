import { Component, Input, OnInit } from '@angular/core';
import { IdeeModel } from '../idee-model';
import { PostService } from '../post.service';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  idees$: Array<IdeeModel> = [];
  idee: IdeeModel = new IdeeModel();
  faComments = faComments;
  @Input() posts: IdeeModel[];

  constructor(private postService: PostService, private router: Router) { 
    this.postService.getAllPosts().subscribe(post => {
      this.idees$ = post;
    });
   }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
