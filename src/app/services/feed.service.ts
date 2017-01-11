import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class FeedService {

   constructor(private http: Http) {}

   public getFeed() {
     return this.http.get('/api/feed/')
      .map((response: Response) => {
        return response.json();
      });
   }

}
