import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Team } from '../models/team';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-event-team-create',
  templateUrl: './event-team-create.page.html',
  styleUrls: ['./event-team-create.page.scss'],
})
export class EventTeamCreatePage implements OnInit {
  data: Team
  selectedImage: string = '';
  eventID:number;

  selectHandler (event:any){
    this.selectedImage = event.target.value;
    // this.data.TypeOfGame = event.target.value;
  }

  constructor(
    public apiService: ApiService,
    public router: Router,
    private formBuilder : FormBuilder,
    public activatedRoute: ActivatedRoute,
    public toastController: ToastController
  ) {
    this.data = new Team();
   }

  //  ID:number;
  //   TeamName:string;
  //   TeamScore:number;
  //   EventID: number;

   get TeamName() {
    return this.registrationForm.get("TeamName");
  }

 
  public errorMessages = {
    TeamName: [
      { type: 'required', message: 'Ett namn på ditt lag måste anges' },
      { type: 'maxlength', message: 'Namnet får ej överstga 50 bokstäver'},
      {type: 'minlength', message: 'Minst fem bokstäver på lagets namn'} 
    ],

  };
  registrationForm = this.formBuilder.group({
    TeamName: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5)]],   
   
  });
  ngOnInit() {
    this.eventID = this.activatedRoute.snapshot.params["id"];
    console.log("EvenemangsID är: " + this.eventID);
    this.data.EventID = this.eventID;
  }

  public submit() {
    console.log(this.registrationForm.value);
  }

  submitForm() {
    console.log(this.registrationForm.value);
    console.log(this.data);
    this.apiService.createTeam(this.data).subscribe((response) => {
      this.router.navigate(['event-teams/'+ this.eventID]);
    });

  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'Laget har lagts till!!',
      duration: 3000
    });
    toast.present();
  }

  


}
