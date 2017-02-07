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

  public editAchievement(achievement) {
    return this.http.put('/api/achievement/update', achievement)
     .map((response: Response) => {
       return response.json();
     });
  }

  public deleteAchievement(achievementID) {
    return this.http.delete('/api/achievement/delete', { search: 'id=' + achievementID })
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
    return this.http.post('/api/group/create', group)
     .map((response: Response) => {
       return response.json();
     });
  }

  public editGroup(group) {
    return this.http.put('/api/group/update', group)
     .map((response: Response) => {
       return response.json();
     });
  }

  public deleteGroup(groupID) {
    return this.http.delete('/api/group/delete', { search: 'id=' + groupID })
     .map((response: Response) => {
       return response.json();
     });
  }

}
