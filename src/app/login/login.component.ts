import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string = '';
  password: string = '';
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this.authService.loginUser(this.login, this.password).subscribe(
      (response: any) => { 
        this.authService.registerSuccessfulLogin(this.login,this.password);
        this.router.navigate(['dashboard']);
      },
      (error: any) => { 
        alert('Login or password is incorrect.');
        this.invalidLogin = true;
      }
    );
  }
}
