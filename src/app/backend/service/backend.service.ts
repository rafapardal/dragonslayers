import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  public getAchievements() {
    return this.http.get('/api/achievement')
     .map((response: Response) => {
       return response.json();
     });
  }

  public newAchievement(achievement) {
    return this.http.post('/api/achievement/new', achievement)
     .map((response: Response) => {
       return response.json();
     });
  }

  public getGroups(){
    return this.http.get('/api/group')
     .map((response: Response) => {
       return response.json();
     });
  }

  public newGroup(group) {
    return this.http.post('/api/group/new', group)
     .map((response: Response) => {
       return response.json();
     });
  }

}
