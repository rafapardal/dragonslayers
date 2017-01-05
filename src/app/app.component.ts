import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  error: String = "nada";
  alert: boolean = false;

  // Login Form
  user = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

  constructor(private http: Http, private auth: AuthService) {}

  login() {
    this.auth.login( this.user.value.username, this.user.value.password ).subscribe(
      result => {
        console.log(result);
      if (result.success) {
        // redirect page
        console.log("certo");
        this.alert = false;
      } else {
        this.error = result.mensagem;
        this.alert = true;
      }
    });
  }

  signUp (username, password, firstName, lastName) {
    //this.auth.signUp().subscribe();
  }

}
