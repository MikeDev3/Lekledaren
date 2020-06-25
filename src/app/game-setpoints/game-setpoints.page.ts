import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Game } from '../models/game';
import { Team } from '../models/team';
import { Points } from '../models/points';
import { AngularDelegate, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-game-setpoints',
  templateUrl: './game-setpoints.page.html',
  styleUrls: ['./game-setpoints.page.scss'],
})
export class GameSetpointsPage implements OnInit {
  gameID: number;
  data: Game;
  team: any;
  teamsList: Array<Team> = [];
  PointsList: Array<Points> = [];
  
  ID:number;
  TeamName:string;
  TeamScore:number;
  EventID: number;
  BildURL: string;
  Points:Points;

 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
    public toastController: ToastController,

  ) {
    this.team = [];
    this.Points = new Points();
    this.PointsList= [];
   }

   async showToast() {
    const toast = await this.toastController.create({
      message: 'Poängen har registrerats!',
      duration: 3500
    });
    toast.present();
  }

  ngOnInit() {

    this.gameID = this.activatedRoute.snapshot.params["id"];
    this.EventID = this.activatedRoute.snapshot.params["eventID"];

    console.log("Game ID: " + this.gameID)
    console.log("Event ID: " + this.EventID)
    //get item details using id

this.getEventGames();
this.getEventTeams();
    
    // this.apiService.getGameByID(this.gameID).subscribe(response => {
    //   console.log(response);
    //   this.data = response;
    //   this.Points.GameID = this.gameID;
    //   console.log("Points gameID: " + this.Points.GameID);

    // })

    // this.apiService.getAllTeams().subscribe(response => {
    //   console.log(response);
    //   this.team = response;

    //   for(let i = 0; i < this.team.length; i++){
    //     let points = new Points();

    //     console.log("ID i for-loop" + this.gameID)

    //   points.TeamID = this.team[i].ID;
    //   points.Team = this.team[i];
    //   points.GameID = this.gameID;
    //   points.EventID = this.EventID;
    //   this.PointsList.push(points);
  
    // }
    // console.log(this.PointsList)
      
    // })

   
  }

  getEventGames() {
    //Get saved list of students
    this.apiService.getGamesByEventID(this.EventID).subscribe(response => {
      console.log(response);
      this.data = response;
      this.Points.GameID = this.gameID;
      console.log("Points gameID: " + this.Points.GameID);    })
  }

  getEventTeams() {
    this.apiService.getTeamsByEventID(this.EventID).subscribe(response => {
      console.log(response);
      this.team = response;

      for(let i = 0; i < this.team.length; i++){
        let points = new Points();

        console.log("ID i for-loop" + this.gameID)

      points.TeamID = this.team[i].ID;
      points.Team = this.team[i];
      points.GameID = this.gameID;
      points.EventID = this.EventID;
      this.PointsList.push(points);
  
    }
    console.log(this.PointsList)
   })
  }

  updatePoints() {

    console.log("Plz work: " + this.gameID)
    console.log(this.PointsList);

    for(let i = 0; i < this.PointsList.length; i++){

      let pointsobject = new Points();
      pointsobject = this.PointsList[i];
      console.log(pointsobject)

      this.apiService.SetPoints(pointsobject).subscribe((response) => {
        this.showToast();

      });
    }
      
    
  }

}
