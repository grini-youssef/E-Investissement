import { Component, OnInit } from '@angular/core';
import {ProjetModel} from "../../shared/projet-model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjetService} from "../../shared/projet.service";

@Component({
  selector: 'app-projets-existent',
  templateUrl: './projets-existent.component.html',
  styleUrls: ['./projets-existent.component.css']
})
export class ProjetsExistentComponent implements OnInit {

  projets: Array<ProjetModel> = [];

  constructor(private projetService: ProjetService, private router: Router) {
    this.projetService.getAllProjet().subscribe(projet => {
      this.projets = projet;
    });
  }

  ngOnInit(): void {

  }

}
