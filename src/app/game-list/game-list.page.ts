import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../auth/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.page.html',
  styleUrls: ['./game-list.page.scss'],
})
export class GameListPage implements OnInit {

  id:number;
  gamesList:any;
  eventID: number;

  constructor( 
    public apiService: ApiService,
    private authService: AuthService,
    private navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
  ) {
    this.gamesList = []; }
    
    ngOnInit() {
     this.eventID = this.activatedRoute.snapshot.params["id"];
     console.log("EvenemangsID är: " + this.eventID);
     this.getEventGames();
    }
 

    getEventGames() {
      //Get saved list of students
      this.apiService.getGamesByEventID(this.eventID).subscribe(response => {
        console.log(response);
        this.gamesList = response;
      })
    }    
}
