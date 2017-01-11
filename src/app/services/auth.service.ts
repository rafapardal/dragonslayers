import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService implements CanActivate {
  public token: string;
  public currentUser;

   constructor(private http: Http, private router: Router) {
      this.setUser();
   }

   public canActivate() {
     if (this.currentUser) return true;
     return false;
   }

   setUser() {
     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
     this.token = this.currentUser && this.currentUser.token;
   }

   public login(username: string, password: string) {
     return this.http.get('/api/auth/login', { search: 'username=' + username + '&password=' + password })
      .map((response: Response) => {
        if(response.json().success) {
          localStorage.setItem('currentUser', JSON.stringify({ id: response.json().id_user, token: response.json().token }));
          this.setUser();
        }
        return response.json();
      });
   }

   public signUp(user) {
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

   public authenticated() : void {
     if (this.currentUser){
       this.router.navigate(['/auth']);
     } else {
       this.router.navigate(['/login']);
     }
   }

   public getUser(){
     return this.currentUser.id;
   }

   public getUserAchievements(id){
     return this.http.get('/api/auth/userachievements', { search: 'id=' + id})
      .map((response: Response) => {
        return response.json();
      });
   }

   public logout() {
     localStorage.removeItem('currentUser');
     this.setUser();
   }
}
