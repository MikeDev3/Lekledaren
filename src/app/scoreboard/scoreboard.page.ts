import { Component, OnInit, ViewChild, ElementRef, Directive, Input, } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { Points } from '../models/points';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.page.html',
  styleUrls: ['./scoreboard.page.scss'],
})


export class ScoreboardPage implements OnInit {

  eventID: number;
  PointsList: Points[];
  Namelist : string[];
  PointsResponse : any;
  GamePoints : any;
  x_row:any;
  y_row:any;
  barChart: Chart;

  var_x:any;
  var_y:any;


  // @ViewChild("barCanvas", { static: true }) barCanvas: ElementRef;

  @ViewChild("barCanvas", { static: false }) barCanvas: ElementRef;
  // @ViewChild("doughnutCanvas", { static: true }) doughnutCanvas: ElementRef;
  // @ViewChild("lineCanvas", { static: true }) lineCanvas: ElementRef;

  // private barChart: Chart;
  // private doughnutChart: Chart;
  // private lineChart: Chart;
  constructor(
    public activatedRoute: ActivatedRoute,
    public apiService: ApiService
  ) { 
    this.PointsList= [];
    this.Namelist =[];
  }

  ngOnInit() {
    this.eventID = this.activatedRoute.snapshot.params["eventID"];

    this.apiService.getTeamScores(this.eventID).subscribe(response => {

      if(!response){
        console.log(Error)
      } else {
        console.log(response);
         //https://ionicdon.com/integrating-dynamic-chart-and-graphs-from-database-to-ionic-app/ Code for dynamic adding of data.


        this.GamePoints = response;
        this.var_x = this.GamePoints.map(item => item.TeamName);
        this.var_y= this.GamePoints.map(item => item.TeamScore);
        
        this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: "bar",
          
          data: {
          //["Starwars", "The Losers"]
          labels: this.var_x,
          
          datasets: [{
          
          label: "",
          
          data: this.var_y,
          
          backgroundColor: [
          
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          
          
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
    
 
  }
  

}