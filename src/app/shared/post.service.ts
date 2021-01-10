import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreatePostPayload } from '../post/create-post/create-post.payload';
import { IdeeModel } from './idee-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<IdeeModel>> {
    return this.http.get<Array<IdeeModel>>( this.baseUrl + 'api/idees');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post( this.baseUrl + 'api/idees', postPayload);
  }

  getIdee(id: number): Observable<IdeeModel> {
    return this.http.get<IdeeModel>( this.baseUrl + 'api/idees/' + id);
  }

  getAllPostsByUser(name: string): Observable<IdeeModel[]> {
    return this.http.get<IdeeModel[]>( this.baseUrl + 'api/idees/by-user/' + name);
  }

}
