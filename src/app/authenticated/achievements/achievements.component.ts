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
  private ids = [];


  constructor(private achievements: AchievementsService, private auth: AuthService) {}

  ngOnInit() {
    this.getIds();
    this.getAchievementList()
  }

  getIds() {
      this.ids = JSON.parse(sessionStorage.getItem("ids"));
      if (this.ids === null) {
        this.auth.getUserAchievements(this.auth.getUser()).subscribe(result => {
          sessionStorage.setItem("ids", JSON.stringify(result.achievements));
          this.ids = JSON.parse(sessionStorage.getItem("ids"));
        });
      }
  }

  getAchievementList() {
    this.achievements.getList().subscribe(result => {
      for (let entry of result) {
        let done = false;
        if (this.ids.indexOf(entry._id) > -1) done = true;
        this.achievementList.push({'result': entry, 'done': done});
      }
    });
  }

}
