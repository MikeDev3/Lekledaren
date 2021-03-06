import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventCreatePageRoutingModule } from './event-create-routing.module';

import { EventCreatePage } from './event-create.page';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EventCreatePageRoutingModule
  ],
  declarations: [EventCreatePage]
})
export class EventCreatePageModule {}
