import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {Token} from '../../models/token';
import error from '../../common/application-exceptions/handleError';

@Injectable()
export class AuthService {

  private url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials) {
    return this.http.post(this.url + '/user/auth', {
      login: credentials.login,
      password: credentials.password
    }).map((result: Token) => {
      if (result && result.token) {
        localStorage.setItem('token', result.token);
        return true;
      }
      return false;
    }).catch(error.handle);
  }

  createOrUpdate(credentials) {
    return this.http.post(this.url + '/user/create', credentials)
      .catch(error.handle);
  }

  logout() {
    return this.http.delete(this.url + '/user/logout/' + this.currentUser.userId)
      .map(() => {
        localStorage.removeItem('token');
      });
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !(jwtHelper.isTokenExpired(token));
  }

  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    return new JwtHelper().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}

