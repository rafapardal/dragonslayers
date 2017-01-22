import { Component, AfterContentInit } from '@angular/core';
import { AchievementsService } from '../../services/achievements.service';
import { AuthService } from '../../services/auth.service';
import { FeedService } from '../../services/feed.service';


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements AfterContentInit {
  private achievementList = [];
  private ids = [];


  constructor(private achievements: AchievementsService, private auth: AuthService, private feed: FeedService) {}

  ngAfterContentInit() {
    this.getIds();
  }

  changeAchievement(achievement, index){
    if (achievement.done == false) {
      // adicionar base de dados com id do achievement e id do user
      this.achievements.addAchievements(this.auth.getUser(), achievement).subscribe(result => {});
      this.feed.createPost({ idAchievement: achievement.result._id, idUser: this.auth.getUser(), achievementName: achievement.result.name})
      .subscribe(result =>{});
      this.achievementList[index].done = true;
    } else {
      // remover base de dados com id do achievement e id do user
      this.achievements.removeAchievements(this.auth.getUser(), achievement.result._id).subscribe(result => {});
      this.achievementList[index].done = false;
      this.feed.deletePost({ idAchievement: achievement.result._id, idUser: this.auth.getUser(), achievementName: achievement.result.name})
      .subscribe();
    }
  }


  getIds() {
    this.auth.getUserAchievements(this.auth.getUser()).subscribe(result => {
      sessionStorage.setItem("ids", JSON.stringify(result.achievements));
      this.ids = JSON.parse(sessionStorage.getItem("ids"));
      this.getAchievementList()
    });
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
