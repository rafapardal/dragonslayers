import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  public token: string;
  public currentUser;

   constructor(private http: Http, private router: Router) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = this.currentUser && this.currentUser.token;
   }

   public login(username: string, password: string) {
     let params = new URLSearchParams();
     params.set('username', username);
     params.set('password', password);
     return this.http.get('/api/auth/login', { search: params })
      .map((response: Response) => {
        if(response.json().success) {
          localStorage.setItem('currentUser', JSON.stringify({ id: response.json().id_user, token: response.json().token }));
          this.token = response.json().token;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        return response.json();
      });
   }

   public signUp(user) {
     // fazer registo
     return this.http.post('/api/auth/signup', user)
      .map((response: Response) => {
        if(response.json().success) {
          localStorage.setItem('currentUser', JSON.stringify({ id: response.json().id_user, token: response.json().token }));
          this.token = response.json().token;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        return response.json();
      });
   }

   public authenticated() {
     var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     if (currentUser) {
       return true;
     }
     return false;
   }

   public getUser(){
     var currentUser = JSON.parse(localStorage.getItem('currentUser'));
     return currentUser.id;
   }

   public logout() {
     localStorage.removeItem('currentUser');
   }
}
