import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../auth/auth.service';
import { AuthActions, IAuthAction } from 'ionic-appauth';
import { IUserInfo } from '../auth/user-info.model';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Oktauser } from '../models/oktauser';
import { Contestant } from '../models/contestant';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {

  eventID:number;
  userID:number;
  id: number;
  data:Event;
  eventsList: any;
  adminEvents:any;
  contestantEvents: any;
  gamesList:any;
  item:any;

  userInfo: IUserInfo;
  action: IAuthAction;
  authenticated: boolean;

  oktaUser:Oktauser;
  Contestant: Contestant;
  email: string = " ";
  contestantToPost: Contestant;


  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(
    public apiService: ApiService,
    private authService: AuthService,
    private navCtrl: NavController,
    public router: Router,
    public activatedRoute: ActivatedRoute,

  ) {
    this.eventsList = [];
    this.gamesList = [];
    this.adminEvents = [];
    this.contestantEvents= [];
    this.contestantToPost = new Contestant();
  }

  ngOnInit() {
   
    this.getUserInfo();
    console.log("EvenemangsID är: " + this.eventID);
    this.authService.authObservable.subscribe((action) => {
      this.action = action;
      if (action.action === AuthActions.SignInSuccess || action.action === AuthActions.AutoSignInSuccess) {
        this.authenticated = true;
      } else if (action.action === AuthActions.SignOutSuccess) {
        this.authenticated = false;
      }
    });

    this.getContestantEvents();
   // this.getEvents();
    
  }

  getEvents() {
    this.apiService.getEvents().subscribe(response => {
      console.log(response);
      this.eventsList = response;
    })
  }
  getAdminEvents(){

    console.log("ID in getAdminEvents(): " + this.userID);

    this.apiService.getAdminEvents(this.userID).subscribe(response => {
      console.log(response);
      this.adminEvents = response;
    })
  }

  getContestantEvents(){

    console.log("ID in getContetantEvents(): " + this.userID);

    this.apiService.getContestantEvents(this.eventID , this.userID).subscribe(response => {
      console.log(response);
      this.contestantEvents = response;
    })
  }

  getGames() {
    this.apiService.getAllGames().subscribe(response => {
      console.log(response);
      this.gamesList = response;
    })
  }

  getEventGames(number:number) {
    this.apiService.getGamesByEventID(number).subscribe(response => {
      console.log(response);
      this.gamesList = response;
    })
  }


  delete(item) {
    this.apiService.deleteItem(item.ID).subscribe(Response => {
      this.getEvents();
    });
  }

  signOut() {
    this.authService.signOut();
  }

  signIn() {
    this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
  }

  public async getUserInfo(): Promise<void> {
    this.oktaUser = await this.authService.getUserInfo<Oktauser>();
    this.email = this.oktaUser.preferred_username;
    console.log(this.email);
    console.log(this.oktaUser)

    this.contestantToPost.Firstname = this.oktaUser.given_name;
    this.contestantToPost.Lastname = this.oktaUser.family_name;
    this.contestantToPost.Email = this.oktaUser.preferred_username;

    console.log(this.oktaUser);
    console.log(this.contestantToPost);

    this.apiService.createUser(this.contestantToPost).subscribe(response => {
      console.log(response);
      this.Contestant = response;
      this.userID = this.Contestant.ID;
      console.log("User ID i getUserInfo:" + this.userID)

      this.getAdminEvents();
     // this.getContestantEvents();

    })
  }


  

}