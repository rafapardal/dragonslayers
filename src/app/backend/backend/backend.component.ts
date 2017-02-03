import { Component, AfterContentInit, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BackendService } from '../service/backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements AfterContentInit {
  private groupList;
  private achievementList;
  private achievementModel = {
    title: '',
    description: '',
    group: ''
  };

  // Achievements
  achievement = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      group: new FormControl()
    });

  // Grupo
  group = new FormGroup({
      name: new FormControl('')
    });

  constructor(private backend: BackendService) { }

  ngAfterContentInit() {
    this.getGroups();
  }

  newAchievement() {
    let achievement = {
      title: this.achievement.value.title,
      description: this.achievement.value.description,
      group: this.achievement.value.group
    };
    this.backend.newAchievement(achievement).subscribe( result => {}, err => {}, () => {
      this.achievementModel.title = '';
      this.achievementModel.description = '';
    });
  }

  newGroup() {
    let group = {
      name: this.group.value.name
    };
    this.backend.newGroup(group).subscribe( result => {});
  }

  getGroups() {
    this.backend.getGroups().subscribe( result => {
      this.groupList = result;
      this.achievementModel.group = result[0]._id;
    });
  }

  getAchievementList() {
    this.backend.getAchievements().subscribe( result => {
      this.achievementList = result;
    });
  }

  getGroupList() {
    this.backend.getGroups().subscribe( result => {
      this.groupList = result;
    });
  }

  editAchievement(achievement) {
    console.log(achievement);
  }

}
