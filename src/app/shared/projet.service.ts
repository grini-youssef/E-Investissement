import { Injectable } from '@angular/core';
import {ProjetModel} from "./projet-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CreateProjetPayload} from "../post/create-projet/create-projet.payload";

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  public host:string="http://localhost:8080";
  private Url='http://localhost:8080/api/projets';
  constructor(private httpClient:HttpClient) { }

  getAllProjet(): Observable<Array<ProjetModel>> {
    return this.httpClient.get<Array<ProjetModel>>(this.Url);
  }

  getProjet(id: number): Observable<ProjetModel> {
    return this.httpClient.get<ProjetModel>('http://localhost:8080/api/projets/' + id);
  }

  searchProjets(theKeyword: string):Observable<ProjetModel[]> {

    const searchUrl=`${this.Url}/search/findByTitreContaining?titre=${theKeyword}`;

    return this.getProjets(searchUrl);
  }


  private getProjets(searchUrl:string):Observable<ProjetModel[]>{
    return this.httpClient.get<GetResponseProjets>(searchUrl).pipe(
      map(response=> response._embedded.projets)
    );
  }


  createProjet(projetPayload: CreateProjetPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/projets', projetPayload);
  }

  getAllProjetsByUser(name: string): Observable<ProjetModel[]> {
    return this.httpClient.get<ProjetModel[]>('http://localhost:8080/api/projets/by-user/' + name);
  }

}

interface GetResponseProjets{
  _embedded: {
    projets: ProjetModel[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
interface GetResponse {
  _embedded:{
    projets:ProjetModel[];
  }
}

