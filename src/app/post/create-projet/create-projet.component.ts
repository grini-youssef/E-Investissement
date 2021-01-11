import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateProjetPayload} from "./create-projet.payload";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProjetService} from "../../shared/projet.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-create-projet',
  templateUrl: './create-projet.component.html',
  styleUrls: ['./create-projet.component.css']
})
export class CreateProjetComponent implements OnInit {

  createProjetForm: FormGroup;
  projetPayload: CreateProjetPayload;
  secteurs: string[] = ['Agroalimentaire', 'Études et conseils', ' Informatique / Télécoms', 'Services aux entreprises', 'Transports / Logistique', 'Banque / Assurance', 'Bois / Papier / Carton / Imprimerie', 'Métallurgie / Travail du métal', ' BTP / Matériaux de construction ', ' Commerce / Négoce / Distribution', 'Électronique / Électricité', 'Textile / Habillement / Chaussure', 'Other'];
  communes: string[] = ['Ajdir', 'Ait Youssef Ou Ali', 'Al Hoceïma', 'Bni Bchir', 'Ait Kamra', 'Other'];



  constructor(private router: Router,private httpClient:HttpClient,
              private projetService: ProjetService) {
    this.projetPayload = {
      titre: '',
      description: '',
      turnover:'',
      commune: '',
      secteur: '',
      imageUrl:''
    }
  }

  ngOnInit() {
    this.createProjetForm = new FormGroup({
      titre: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      turnover: new FormControl('', Validators.required),
      commune: new FormControl('', Validators.required),
      secteur: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required)

    });
  }

  createProjet() {
    this.projetPayload.titre = this.createProjetForm.get('titre').value;
    this.projetPayload.description = this.createProjetForm.get('description').value;
    this.projetPayload.turnover = this.createProjetForm.get('turnover').value;
    this.projetPayload.commune = this.createProjetForm.get('commune').value;
    this.projetPayload.secteur = this.createProjetForm.get('secteur').value;
    this.projetPayload.imageUrl = this.createProjetForm.get('imageUrl').value;



    this.projetService.createProjet(this.projetPayload).subscribe((data) => {
      this.router.navigateByUrl('/projets');
    }, error => {
      throwError(error);
    })
  }

  discardProjet() {
    this.router.navigateByUrl('/projets');
  }

}
