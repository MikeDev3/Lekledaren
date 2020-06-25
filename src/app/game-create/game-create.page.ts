import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.page.html',
  styleUrls: ['./game-create.page.scss'],
})
export class GameCreatePage implements OnInit {
  data: Game
  selectedTypeOfGame: string = '';
  eventID: number;

  selectHandler (event:any){
    this.selectedTypeOfGame = event.target.value;
    this.data.TypeOfGame = event.target.value;
  }

  constructor(
    public apiService: ApiService,
    public router: Router,
    private formBuilder : FormBuilder,
    public activatedRoute: ActivatedRoute,

  ) {
    this.data = new Game();
   }

   get Name() {
    return this.registrationForm.get("Name");
  }
  // get TypeOfGame() {
  //   return this.registrationForm.get('TypeOfGame');
  // }
  // get Category() {
  //   return this.registrationForm.get('Category');
  // }
  get Description() {
    return this.registrationForm.get('Description');
  }
  get Points() {
    return this.registrationForm.get('Points');
  }
 
  public errorMessages = {
    Name: [
      { type: 'required', message: 'Ett namn på ditt evenemang måste anges' },
      { type: 'maxlength', message: 'Namnet får ej överstga 50 bokstäver' }
    ],
    // TypeOfGame: [
    //   { type: 'required', message: 'Skriv en kort beskrivning av vad evenemanget handlar om' }
    // ],
    Description: [
      { type: 'required', message: 'Ett namn på ditt evenemang måste anges' },
      { type: 'maxlength', message: 'Namnet får ej överstga 200 bokstäver' }
    ],
    Points: [
      { type: 'required', message: 'Ett namn på ditt evenemang måste anges' },
      { type: 'maxlength', message: 'Namnet får ej överstga 50 bokstäver' }
    ]
   
  };
  registrationForm = this.formBuilder.group({
    Name: ['', [Validators.required, Validators.maxLength(50)]],
    // TypeOfGame: ['', [Validators.required, Validators.maxLength(50)]],
    Description: ['', [Validators.required, Validators.maxLength(200)]],
    Points: ['', [Validators.required, Validators.maxLength(50)]]
   
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
    this.apiService.createGame(this.data).subscribe((response) => {
      this.router.navigate(['game-list/1']);
    });

  }

}
