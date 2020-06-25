import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";
import { ToastController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { AuthActions, IAuthAction } from 'ionic-appauth';
import { IUserInfo } from '../auth/user-info.model';
import { Oktauser } from '../models/oktauser';
import { Contestant } from '../models/contestant';


@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {
  action: IAuthAction;
  authenticated: boolean;

  userInfo: IUserInfo;
  oktaUser:Oktauser;
  Contestant: Contestant;
  email: string = " ";

  data: Event
  selectedValue: string = '';
  selectedDate: Date;

  selectHandler (event:any){
    this.selectedValue = event.target.value;
    this.data.Category = event.target.value;
  }

  selectDateHandler(event:any){
    this.selectedDate = event.target.value;
  }

  constructor(
    public apiService: ApiService,
    public router: Router,
    private formBuilder : FormBuilder,
    public toastController: ToastController,
    private authService: AuthService,

  ) {
    this.data = new Event();
    this.Contestant = new Contestant();
  }
  async showToast() {
    const toast = await this.toastController.create({
      message: 'Evenemanget har skapats!',
      duration: 3000
    });
    toast.present();
  }

  get EventName() {
    return this.registrationForm.get("EventName");
  }
  get Description() {
    return this.registrationForm.get('Description');
  }
  // get Category() {
  //   return this.registrationForm.get('Category');
  // }
  get Date() {
    return this.registrationForm.get('Date');
  }
  get Location() {
    return this.registrationForm.get('Location');
  }
 
  public errorMessages = {
    EventName: [
      { type: 'required', message: 'Ett namn på ditt evenemang måste anges' },
      { type: 'maxlength', message: 'Namnet får ej överstga 50 bokstäver' }
    ],
    Description: [
      { type: 'required', message: 'Skriv en kort beskrivning av vad evenemanget handlar om' }
    ],
    // Category: [
    //   { type: 'required', message: 'Ange en typ av kategori på ditt evenemang' },
    // ],
    Date: [
      { type: 'required', message: 'Ange ett datum för evenemanget' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ],
    Location: [
      { type: 'required', message: 'En plats för evenemanget måste anges' },
      { type: 'pattern', message: 'Please enter a valid phone number' }
    ],
   
  };
  registrationForm = this.formBuilder.group({
    EventName: ['', [Validators.required, Validators.maxLength(50)]],
    Description: [
      '',
      [
        Validators.required
      ]
    ],
    // Category: [
    //   '',
    //   [
    //     Validators.required,
    //   ]
    // ],
    Date: [
      '',
      [
        Validators.required,
      //  Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
    ],
    Location: [
      '',
      [
        Validators.required,
      ]
    ]
  
  });
  ngOnInit() {

    this.authService.authObservable.subscribe((action) => {
      this.action = action;
      if (action.action === AuthActions.SignInSuccess || action.action === AuthActions.AutoSignInSuccess) {
        this.authenticated = true;
        this.getUserInfo();
        console.log("Getting Info...")
      } else if (action.action === AuthActions.SignOutSuccess) {
        this.authenticated = false;
       
      } 
      console.log(this.authenticated.toString())
    });    
  }

  public submit() {
    console.log(this.registrationForm.value);
  }

  signIn() {
    this.authService.signIn().catch(error => console.error(`Sign in error: ${error}`));
  }

  submitForm() {
    this.data.AdminID = this.Contestant.ID;
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['event-list']);
      console.log(this.registrationForm.value);
    });

  }

   public async getUserInfo(): Promise<void> {
    this.oktaUser = await this.authService.getUserInfo<Oktauser>();
    this.email = this.oktaUser.preferred_username;
    console.log(this.email);

    this.apiService.getUserByEmail(this.email).subscribe(response => {
      console.log(response);
      this.Contestant = response;
    })

  }


}