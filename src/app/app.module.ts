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

// services
import { AuthService } from './services/auth.service';
import { FeedService } from './services/feed.service';

// Routes
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth',
    component: AuthenticatedComponent
  },
  {
    path: 'feed',
    component: FeedComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedComponent,
    LoginComponent,
    FeedComponent
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
  providers: [AuthService, FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
