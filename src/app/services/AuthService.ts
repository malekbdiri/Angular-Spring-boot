import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe }         from '@angular/common';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient,private router: Router) {}
   
  ngOnInit() {    
 
  }

  private baseUrl = 'http://localhost:8080/api'; 


  loginUser(login: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ Authorization: this.createBasicAuthToken(login, password) });
    return this.http.get<any>(`${this.baseUrl}/login/${login}/${password}`, { headers });
  }

  createBasicAuthToken(login: string, password: string): string {
    return 'Basic ' + window.btoa(login + ':' + password);
  }

  registerSuccessfulLogin(login: string, password:string): void {
    sessionStorage.setItem('login', login);
    sessionStorage.setItem('password', password);

  }
  logout() {
    localStorage.removeItem('authToken');
    
    this.router.navigate(['/login']);
  }
  home(){
    this.router.navigate(['/dahboard']);

  }
}
