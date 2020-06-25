import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './auth/auth.service';
import { IUserInfo } from './auth/user-info.model';
import { IAuthAction, AuthActions } from 'ionic-appauth';
import { Oktauser } from './models/oktauser';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { Contestant } from './models/contestant';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userInfo: IUserInfo;
  action: IAuthAction;
  authenticated: boolean;
  oktaUser:Oktauser;
  contestantToPost: Contestant;


  data: Contestant;
  email: string = " ";
  
  public appPages = [
    {
      title: 'Startsidan',
      url: '',
      icon: 'home'
    },
    {
      title: 'Min profil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Nytt evenemang',
      url: '/create',
      icon: 'add'
    },
    {
      title: 'Mina evenemang',
      url: '/event-list',
      icon: 'list'
    },
    {
      title: 'Om oss',
      url: '/about',
      icon: 'information-circle-outline'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private navCtrl: NavController, 
    public router: Router, 
    public apiService:ApiService
  ) {
    
    this.contestantToPost = new Contestant();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.authService.startUpAsync();
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      this.authService.authObservable.subscribe((action) => {
        this.action = action;
        if (action.action === AuthActions.SignInSuccess || action.action === AuthActions.AutoSignInSuccess) {
          this.authenticated = true;
          this.getUserInfo();
          console.log("Getting Info...")
        } else if (action.action === AuthActions.SignOutSuccess) {
          this.authenticated = false;
         
        } 
      });    

    });
  }
  signIn() {
    this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
  }

  signOut() {
    this.authService.signOut();
  }
  public async getUserInfo(): Promise<void> {
    this.oktaUser = await this.authService.getUserInfo<Oktauser>();
    this.email = this.oktaUser.preferred_username;
    console.log(this.email);

    this.contestantToPost.Firstname = this.oktaUser.given_name;
    this.contestantToPost.Lastname = this.oktaUser.family_name;
    this.contestantToPost.Email = this.oktaUser.preferred_username;

    console.log(this.oktaUser);
    console.log(this.contestantToPost);

    // this.apiService.getUserByEmail(this.email).subscribe(response => {
    //   console.log(response);
    //   this.data = response;
    // })

    this.apiService.createUser(this.contestantToPost).subscribe(response => {
      console.log(response);
      this.data = response;

    // console.log(this.oktaUser);

    // this.apiService.getUserByEmail(this.email).subscribe(response => {
    //   console.log(response);
    //   this.data = response;
    })
   

  }

}
