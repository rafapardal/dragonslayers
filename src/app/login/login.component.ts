import { Component, OnInit, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: String;
  alert: boolean = false;

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

  constructor(private http: Http, private auth: AuthService, private router: Router, private ngZone:NgZone) {}

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
    this.auth.login( this.userLogin.value.username, this.userLogin.value.password ).subscribe(
      result => {
      if (result.success) {
        this.alert = false;
        this.router.navigate(['/auth']);
      } else {
        this.error = result.mensagem;
        this.displayErrors();
      }
    });
  }

  signUpErrors(user) {
    if (user.username.length < 3) {
      this.error = "O Username tem de conter mais de 2 caracteres";
      return true;
    } else if (user.firstname.length < 3) {
      this.error = "O Primeiro nome tem de conter mais de 2 caracteres";
      return true;
    } else if (user.lastname.length < 3) {
      this.error = "O Ultimo nome tem de conter mais de 2 caracteres";
      return true;
    }
    return false;
  }

  displayErrors() {
    this.alert = true;
    setTimeout(() => { this.alert = false;}, 1500);
  }

  signUp() {
    let user = {
      username: this.userRegisto.value.username,
      password: this.userRegisto.value.password,
      firstname: this.userRegisto.value.firstName,
      lastname: this.userRegisto.value.lastName
    };
    if(this.signUpErrors(user) == true) {
      this.displayErrors();
    } else {
      this.auth.signUp(user).subscribe(result => {
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
  }

}
