import { Component, OnInit } from '@angular/core';
import { IUserInfo } from '../auth/user-info.model';
import { IAuthAction, AuthActions } from 'ionic-appauth';
import { AuthService } from '../auth/auth.service';
import { NavController } from '@ionic/angular';
import { RouterEvent, Router } from '@angular/router';
import { Contestant } from '../models/contestant';
import { ApiService } from '../services/api.service';
import { Oktauser } from '../models/oktauser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  action: IAuthAction;
  authenticated: boolean;
  userInfo: IUserInfo;
  oktaUser:Oktauser;
  
  constructor(
    private navCtrl: NavController, 
    private authService: AuthService,
    public router: Router, 
    public apiService:ApiService) {
  }
  ngOnInit() {
    this.authService.authObservable.subscribe((action) => {
      this.action = action;
      if (action.action === AuthActions.SignInSuccess || action.action === AuthActions.AutoSignInSuccess) {
        this.authenticated = true;
        //this.getUserInfo();
        console.log("Getting Info...")
      } else if (action.action === AuthActions.SignOutSuccess) {
        this.authenticated = false;    
      } 
    });     
  }

  signOut() {
    this.authService.signOut();
  }

  signIn() {
    this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
  }

}
