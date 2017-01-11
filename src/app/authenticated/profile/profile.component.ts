import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor ( private router: Router, private auth: AuthService ) {}

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }

}
