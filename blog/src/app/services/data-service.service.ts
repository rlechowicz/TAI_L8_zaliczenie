import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {

  }

  get(id) {
    return this.http.get(this.url + '/api/post/' + id)
      .pipe();
  }

  getAll() {
    return this.http.get(this.url + '/api/posts')
      .pipe(
        map((x: any[]) => x)
      );
  }

  addPost(data) {
    return this.http.post(this.url + '/api/post/',  data).pipe();
  }


}
