import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {
  public token: string;
  public currentUser;

   constructor(private http: Http) {
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

   public signUp(username: string, password: string, name: Array<string>) {
     // fazer registo
   }

   public authenticated() {
     // Check if there's an unexpired JWT
     // This searches for an item in localStorage with key == 'id_token'
     return tokenNotExpired();
   }

   public logout() {
     // Remove token from localStorage
     localStorage.removeItem('id_token');
   }
}
