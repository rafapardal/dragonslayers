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
  private showEditScreenAchievements = false;
  private showEditScreenGroups = false;
  private achievementModel = {
    id: '',
    name: '',
    description: '',
    group: ''
  };
  private groupModel = {
    id: '',
    name: '',
  };

  // Achievements
  achievement = new FormGroup({
      id: new FormControl({value: '', disabled: true}),
      name: new FormControl(''),
      description: new FormControl(''),
      group: new FormControl()
    });

  // Grupo
  group = new FormGroup({
      id: new FormControl({value: '', disabled: true}),
      name: new FormControl('')
    });

  constructor(private backend: BackendService) { }

  ngAfterContentInit() {
    this.cleanModels();
    this.getGroups();
  }

  init() {
    this.cleanModels();
    this.getGroups();
  }

  cleanModels() {
    this.achievementModel.id = '';
    this.achievementModel.name = '';
    this.achievementModel.description = '';
    this.achievementModel.group = '';
  }

  newAchievement() {
    let achievement = {
      name: this.achievement.value.name,
      description: this.achievement.value.description,
      group: this.achievement.value.group
    };
    this.backend.newAchievement(achievement).subscribe( result => {}, err => {}, () => {
      this.cleanModels();
      this.getGroups();
    });
  }

  newGroup() {
    let group = {
      name: this.groupModel.name
    };
    this.backend.newGroup(group).subscribe( result => {
      this.groupModel.name = '';
    });
  }

  getGroups(achievementGroup = null) {
    this.backend.getGroups().subscribe( result => {
      this.groupList = result;
      if (achievementGroup) this.achievementModel.group = achievementGroup;
      else this.achievementModel.group = result[0]._id;
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
    if(achievement.editable == true) {
      this.getGroups(achievement.group._id);
      this.showEditScreenAchievements = true;
      this.achievementModel.id = achievement._id;
      this.achievementModel.name = achievement.name;
      this.achievementModel.description = achievement.description;
    } else {
      alert("Impossivel alterar");
    }
  }

  achievementEdit() {
    let achievement = {
      id: this.achievementModel.id,
      name: this.achievementModel.name,
      description: this.achievementModel.description,
      group: this.achievementModel.group
    };
    this.backend.editAchievement(achievement).subscribe( result => {
      this.getAchievementList();
      this.showEditScreenAchievements = false;
    });
  }

  achievementDelete() {
    let achievement = {
      id: this.achievementModel.id,
    };
    this.backend.deleteAchievement(achievement.id).subscribe( result => {
      this.getAchievementList();
      this.showEditScreenAchievements = false;
    });
  }

  editGroup(group){
    this.showEditScreenGroups = true;
    this.groupModel.id = group._id;
    this.groupModel.name = group.name;
  }

  groupEdit() {
    let group = {
      id: this.groupModel.id,
      name: this.groupModel.name,
    };
    this.backend.editGroup(group).subscribe( result => {
      this.getGroupList();
      this.showEditScreenGroups = false;
    });
  }

  groupDelete() {
    let group = {
      id: this.groupModel.id,
    };
    this.backend.deleteGroup(group.id).subscribe( result => {
      this.getGroupList();
      this.showEditScreenGroups = false;
    });
  }
}
