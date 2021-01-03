import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdeeModel } from './idee-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<IdeeModel>> {
    return this.http.get<Array<IdeeModel>>('http://localhost:8080/api/idees');
  }

  getIdee(id: number): Observable<IdeeModel> {
    return this.http.get<IdeeModel>('http://localhost:8080/api/idees' + id);
  }

}
