import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { Points } from '../models/points';
import { ApiService } from '../services/api.service';
import { Game } from '../models/game';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-game-scoreboard',
  templateUrl: './game-scoreboard.page.html',
  styleUrls: ['./game-scoreboard.page.scss'],
})
export class GameScoreboardPage implements OnInit {

  gameID : number;
  PointsList: Points[];
  PointsObject: Points;
  PointsResponse : any
  barChart: any;

  Game:Game;


  var_x:any;
  var_y:any;

 @ViewChild("barCanvas" , { static: true }) barCanvas: ElementRef;


  private doughnutChart: Chart;
  private lineChart: Chart;

  constructor(
    public activatedRoute: ActivatedRoute,
    public apiService: ApiService
  ) {
    this.PointsList= [];
    this.PointsObject = new Points();
    this.Game = new Game();
   }

  ngOnInit() {
    this.gameID = this.activatedRoute.snapshot.params["id"];

      this.apiService.getScoreByGame(this.gameID).subscribe(response => {

        if(!response){
          console.log(Error)
        } else {
          console.log(response);
           //https://ionicdon.com/integrating-dynamic-chart-and-graphs-from-database-to-ionic-app/ Code for dynamic adding of data.


          this.PointsResponse = response;
          this.var_x = this.PointsResponse.map(item => item.Team.TeamName);
          this.var_y= this.PointsResponse.map(item => item.TeamPoints);

          this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: "bar",
            
            data: {
            //["Starwars", "The Losers"]
            labels: this.var_x,
            
            datasets: [{
            
            label: "Resultat",
            
            data: this.var_y,
            
            backgroundColor: [
            
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)"
            
            ],
            
            borderColor: [
            
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)"
            
            ],
            
            borderWidth: 1
            
            }]
            
            },
            
            options: {
            scales: {
            yAxes: [{
            ticks: {
            beginAtZero:true
            
            }
            }]
            }
            }
            
            });
        }
        
      })

  console.log(this.PointsList)


    this.apiService.getGameByID(this.gameID).subscribe(response => {
      console.log(response);
      this.Game = response;
    })

  }

}
