import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AchievementsService {

  constructor(private http: Http) { }

  public getList() {
    /*
    let list = JSON.parse(sessionStorage.getItem("achievementsList"));
    if (!list) {
      return this.http.get('/api/achievement/')
       .map((response: Response) => {
         sessionStorage.setItem("achievementsList", JSON.stringify(response));
         return response.json();
       });
    } else {
      return list.json();
    }
    */
    return this.http.get('/api/achievement/')
     .map((response: Response) => {
       return response.json();
     });

  }

}
