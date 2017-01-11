import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class FeedService {
  public token: string;
  public currentUser;

   constructor(private http: Http, private router: Router) {}

   public getFeed() {
     return this.http.get('/api/feed/')
      .map((response: Response) => {
        return response.json();
      });
   }

}
