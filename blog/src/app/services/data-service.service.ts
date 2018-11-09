import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url + '/photos');
  }

  get(id) {
    return this.http.get(this.url + '/photos/' + id);
  }

}
