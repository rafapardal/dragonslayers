import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthenticatedComponent } from './authenticated/authenticated/authenticated.component';
import { FeedComponent } from './authenticated/feed/feed.component';
import { AchievementsComponent } from './authenticated/achievements/achievements.component';
import { ProfileComponent } from './authenticated/profile/profile.component';

// Services
import { AuthService } from './services/auth.service';
import { FeedService } from './services/feed.service';
import { AchievementsService } from './services/achievements.service';


// Routes
const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'auth',
        component: AuthenticatedComponent,
        canActivate: [AuthService],
        children: [
          { path: 'feed', component: FeedComponent },
          { path: 'achievements', component: AchievementsComponent },
          { path: 'profile', component: ProfileComponent },
          { path: '', redirectTo: '/auth/feed', pathMatch: 'full' }
        ]
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedComponent,
    LoginComponent,
    FeedComponent,
    AchievementsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService, FeedService, AchievementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
