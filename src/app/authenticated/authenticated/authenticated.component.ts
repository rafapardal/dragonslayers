import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})

export class AuthenticatedComponent implements OnInit {
  constructor ( private router: Router, private auth: AuthService, private ngZone:NgZone) {}

  ngOnInit() {
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

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }

}
