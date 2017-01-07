import { Component, OnInit } from '@angular/core';
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
  error: String = "nada";
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

  constructor(private http: Http, private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.auth.login( this.userLogin.value.username, this.userLogin.value.password ).subscribe(
      result => {
      if (result.success) {
        this.alert = false;
        this.router.navigate(['/auth']);
      } else {
        this.error = result.mensagem;
        this.alert = true;
      }
    });
  }

  signUp() {
    let user = {
      username: this.userRegisto.value.username,
      password: this.userRegisto.value.password,
      firstname: this.userRegisto.value.firstName,
      lastname: this.userRegisto.value.lastName
    };
    this.auth.signUp(user).subscribe(result => {
      if (result.success) {
        this.userLogin.value.username = user.username;
        this.userLogin.value.password = user.password;
        this.login();
      } else {
        this.error = result.mensagem;
        this.alert = true;
      }
    });
  }

}
