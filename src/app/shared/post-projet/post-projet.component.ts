import {Component, Input, OnInit} from '@angular/core';
import {ProjetModel} from "../projet-model";

@Component({
  selector: 'app-post-projet',
  templateUrl: './post-projet.component.html',
  styleUrls: ['./post-projet.component.css']
})
export class PostProjetComponent implements OnInit {

  @Input() projets: ProjetModel[];
  constructor() { }

  ngOnInit(): void {
  }


}
