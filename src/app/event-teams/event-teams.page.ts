import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../auth/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-teams',
  templateUrl: './event-teams.page.html',
  styleUrls: ['./event-teams.page.scss'],
})
export class EventTeamsPage implements OnInit {

  teamsList:any;
  eventID:number;

  constructor( 
    public apiService: ApiService,
    private authService: AuthService,
    private navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
  ) {
    this.teamsList = []; }

  ngOnInit() {
   // this.getTeams();
    this.eventID = this.activatedRoute.snapshot.params["id"];
      console.log("EvenemangsID är: " + this.eventID);
      this.getEventTeams();
  }

  getEventTeams() {
    this.apiService.getTeamsByEventID(this.eventID).subscribe(response => {
      console.log(response);
      this.teamsList = response;
    })
  }

  getTeams() {
    this.apiService.getAllTeams().subscribe(response => {
      console.log(response);
      this.teamsList = response;
    })
  }
  delete(item) {
    this.apiService.deleteTeam(item.ID).subscribe(Response => {
      this.getEventTeams();
    });
  }
}
