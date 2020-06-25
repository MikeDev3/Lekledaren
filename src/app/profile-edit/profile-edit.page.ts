import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Contestant } from '../models/contestant';
import { AuthService } from '../auth/auth.service';
import { AuthActions, IAuthAction } from 'ionic-appauth';
import { IUserInfo } from '../auth/user-info.model';
import { Oktauser } from '../models/oktauser';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.page.html',
  styleUrls: ['./profile-edit.page.scss'],
})
export class ProfileEditPage implements OnInit {
  action: IAuthAction;
  authenticated: boolean;
  userInfo: IUserInfo;
  oktaUser:Oktauser;

  userID:number;
  data:Contestant;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.params["id"];

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


    this.apiService.getUserByID(this.userID).subscribe(response => {
      console.log(response);
      this.data = response;
    })

  }

  updateProfile() {
    this.apiService.updateUser(this.userID, this.data).subscribe(response => {
      this.router.navigate(['profile']);
    })
  }

  
  signOut() {
    this.authService.signOut();
  }

  signIn() {
    this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
  }


}
