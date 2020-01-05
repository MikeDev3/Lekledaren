import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { EventsService } from 'src/app/events.service';
@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.page.html',
  styleUrls: ['./myevents.page.scss'],
})
export class MyeventsPage implements OnInit {
  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private eventsService: EventsService) { }
 
  ngOnInit() {
    this.items = this.eventsService.getProducts();
    this.cart = this.eventsService.getCart();
  }
 
  addToCart(product) {
    this.eventsService.addProduct(product);
  }
 
  // openCart() {
  //   this.router.navigate(['cart']);
  // }
}
