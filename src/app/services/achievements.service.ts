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

  public addAchievements(id, achievement) {
    let achievementToAdd = {'id': id, 'achievement': achievement};
    return this.http.put('/api/auth/addachievement/', achievementToAdd)
     .map((response: Response) => {
       return response.json();
     });
  }

  public removeAchievements(id, idAchievements) {
    return this.http.delete('/api/auth/removeachievement/', { search: 'id=' + id + '&achievement=' + idAchievements })
     .map((response: Response) => {
        return response.json();
     });
  }

}
