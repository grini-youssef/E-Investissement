import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from 'src/app/shared/post.service';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  secteurs: string[] = ['Agroalimentaire', 'Études et conseils', ' Informatique / Télécoms', 'Services aux entreprises', 'Transports / Logistique', 'Banque / Assurance', 'Bois / Papier / Carton / Imprimerie', 'Métallurgie / Travail du métal', ' BTP / Matériaux de construction ', ' Commerce / Négoce / Distribution', 'Électronique / Électricité', 'Textile / Habillement / Chaussure', 'Other'];
  communes: string[] = ['Ajdir', 'Ait Youssef Ou Ali', 'Al Hoceïma', 'Bni Bchir', 'Ait Kamra', 'Other'];

  constructor(private router: Router, private postService: PostService) {
    this.postPayload = {
      budget: 0,
      commune: '',
      secteur: '',
      textDescriptif: '',
      titre: ''
    }
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      budget: new FormControl('', Validators.required),
      commune: new FormControl('', Validators.required),
      secteur: new FormControl('', Validators.required),
      textDescriptif: new FormControl('', Validators.required),
      titre: new FormControl('', Validators.required)
    });
  }

  createPost() {
    this.postPayload.budget = this.createPostForm.get('budget').value;
    this.postPayload.commune = this.createPostForm.get('commune').value;
    this.postPayload.secteur = this.createPostForm.get('secteur').value;
    this.postPayload.textDescriptif = this.createPostForm.get('textDescriptif').value;
    this.postPayload.titre = this.createPostForm.get('titre').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/investir');
    }, error => {
      throwError(error);
    })
  }

  discardPost() {
    this.router.navigateByUrl('/investir');
  }
}
