import { Component, OnInit } from '@angular/core';
import { AchievementsService } from '../../services/achievements.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {
  private achievementList = [];


  constructor(private achievements: AchievementsService, private auth: AuthService) { }

  ngOnInit() {
    let ids = [];
    this.auth.getUserAchievements(this.auth.getUser()).subscribe(result => {
      for (let entry of result.achievements) {
        ids.push(entry);
      }
    });
    this.achievements.getList().subscribe(result => {
      for (let entry of result) {
        let done = false;
        if (ids.indexOf(entry._id) > -1) done = true;
        this.achievementList.push({'result': entry, 'done': done});
      }
    });
  }

}
