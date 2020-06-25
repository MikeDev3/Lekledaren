import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { IAuthAction, AuthActions } from 'ionic-appauth';
import { IUserInfo } from '../auth/user-info.model';
import { Oktauser } from '../models/oktauser';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.page.html',
  styleUrls: ['./event-edit.page.scss'],
})
export class EventEditPage implements OnInit {
  action: IAuthAction;
  authenticated: boolean;
  userInfo: IUserInfo;
  oktaUser:Oktauser;

  id: number;
  data: Event;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    private authService: AuthService,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Event();
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

    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getEventByID(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  updateEvent() {
    //Update item by taking id and updated data object
    this.apiService.updateEvent(this.id, this.data).subscribe(response => {
      this.router.navigate(['event-list']);
    })
  }

  signOut() {
    this.authService.signOut();
  }

  signIn() {
    this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
  }
}
