import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AchievementsService {

  constructor(private http: Http) { }

  public getList() {
      return this.http.get('/api/achievement/')
       .map((response: Response) => {
         return response.json();
       });
    }

}
