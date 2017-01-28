import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AchievementsService } from '../services/achievements.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private error: String;
  private alert: boolean = false;
  private showSignUpSecondScreen: boolean = false;
  private achievementList = [];
  private user;

  // Login Form
  userLogin = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

  // Login Form
  userRegisto = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });

  constructor(private http: Http, private auth: AuthService, private router: Router, private ngZone:NgZone, private achievements: AchievementsService) {}

  ngOnInit() {
    this.auth.authenticated();
    this.reRenderPage();
  }

  reRenderPage() {
    if(localStorage.getItem('refreshed') === 'false') {
      localStorage.setItem('refreshed','true');
      this.ngZone.runOutsideAngular(() => {
            location.reload();
          });
    }
  }

  login() {
    this.auth.login( this.userLogin.value.username, this.userLogin.value.password ).subscribe( result => {
      if (result.success) {
        this.router.navigate(['/auth']);
      } else {
        this.error = result.mensagem;
        this.displayErrors();
      }
    });
  }

  displayErrors() {
    this.alert = true;
    setTimeout(() => { this.alert = false;}, 1500);
  }

  signUpSend() {
    let achievements = [];
    for (let achievement of this.achievementList){
      if (achievement.done == true) achievements.push(achievement.result._id);
    }
    this.user.achievements = achievements;
    this.auth.signUp(this.user).subscribe(result => {
      if (result.success) {
        this.userLogin.value.username = result.username;
        this.userLogin.value.password = result.password;
        this.login();
      } else {
        this.error = result.mensagem;
        this.displayErrors();
      }
    });
  }

  SignUpSecondScreen() {
    this.showSignUpSecondScreen = true;
    this.achievementList = [];
    this.achievements.getList().subscribe(result => {
      for (let entry of result) {
        this.achievementList.push({'result': entry, 'done': false});
      }
    });
  }

  changeAchievement(achievement, index){
    if (achievement.done == false) {
      this.achievementList[index].done = true;

    } else {
      this.achievementList[index].done = false;
    }
  }

  checkIfUsernameExists(user) {
    this.auth.checkUsername(user.username).subscribe(usernameExists => {
      if (usernameExists == true){
        this.error = "Já existe este nome de utilizador";
        this.displayErrors();
        return true;
      } else {
        this.signUpErrors(user);
      }
    });
  }

  signUpErrors(user) {
  if (user.username.length < 3) {
      this.error = "O Username tem de conter mais de 2 caracteres";
      this.displayErrors();
      return true;
    } else if (user.firstname.length < 3) {
      this.error = "O Primeiro nome tem de conter mais de 2 caracteres";
      this.displayErrors();
      return true;
    } else if (user.lastname.length < 3) {
      this.error = "O Ultimo nome tem de conter mais de 2 caracteres";
      this.displayErrors();
      return true;
    }
    this.SignUpSecondScreen();
  }

  signUpValidation() {
    this.user = {
      username: this.userRegisto.value.username,
      password: this.userRegisto.value.password,
      firstname: this.userRegisto.value.firstName,
      lastname: this.userRegisto.value.lastName
    };
    this.checkIfUsernameExists(this.user);
  }

}
