import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {
  private test;

  constructor ( private router: Router, private auth: AuthService ) {}

  ngOnInit() {
    this.checkIfLogged();
  }

  checkIfLogged(){
    if (this.auth.authenticated() === false) {
      this.router.navigate(['']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }

}
