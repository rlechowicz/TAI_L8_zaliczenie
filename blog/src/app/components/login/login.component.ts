import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) {
  }

  signIn() {
    return this.authService.authenticate(this.credentials).subscribe((result) => {
      if (!result) {
        this.logged = false;
      } else {
        this.logout = false;
        this.credentials = {
          login: '',
          password: ''
        };
        this.router.navigate(['/admin']);
      }
      },
      (error: AppError) => {
        if (error instanceof UnauthorizedError) {
          this.error = 'Hasło/login nieprawidłowe!';
        } else {
          this.error = 'Nieoczekiwany błąd';
        }
      });
  }

  ngOnInit() {}

}
