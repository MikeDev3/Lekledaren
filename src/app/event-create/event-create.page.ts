import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {

  data: Event

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Event();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['event-list']);
    });

  }

}