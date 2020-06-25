import { Component, OnInit } from '@angular/core';
import { IUserInfo } from '../auth/user-info.model';
import { IAuthAction, AuthActions } from 'ionic-appauth';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { Contestant } from '../models/contestant';
import { Oktauser } from '../models/oktauser';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userInfo: IUserInfo;
  action: IAuthAction;
  authenticated: boolean;
  data: Contestant;
  email: string = " ";
  oktaUser:Oktauser;

  constructor(private navCtrl: NavController, 
    private authService: AuthService,
    public apiService : ApiService) {
  }

  ngOnInit() {
    this.authService.authObservable.subscribe((action) => {
      this.action = action;
      if (action.action === AuthActions.SignInSuccess || action.action === AuthActions.AutoSignInSuccess) {
        this.authenticated = true;
        this.getUserInfo();
        console.log("Getting Info...");
      } else if (action.action === AuthActions.SignOutSuccess) {
        this.authenticated = false;
        console.log("auth is false");
      }
    });
  }

  signOut() {
    this.authService.signOut();
  }

  signIn() {
    this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
  }

  public async getUserInfo(): Promise<void> {
    this.userInfo = await this.authService.getUserInfo<IUserInfo>();
    this.oktaUser = await this.authService.getUserInfo<Oktauser>();
    this.email = this.oktaUser.preferred_username;
    console.log(this.email);

    console.log(this.oktaUser);
    this.getUserByEmail();
  }

  public getUserByEmail(){
    this.apiService.getUserByEmail(this.email).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

}
