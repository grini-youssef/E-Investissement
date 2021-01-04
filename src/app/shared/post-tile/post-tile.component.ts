import { Component, Input, OnInit } from '@angular/core';
import { IdeeModel } from '../idee-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  faComments = faComments;
  @Input() posts: IdeeModel[];

  constructor(private router: Router) { 
    
   }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
