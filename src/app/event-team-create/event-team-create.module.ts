import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventTeamCreatePageRoutingModule } from './event-team-create-routing.module';

import { EventTeamCreatePage } from './event-team-create.page';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EventTeamCreatePageRoutingModule
  ],
  declarations: [EventTeamCreatePage]
})
export class EventTeamCreatePageModule {}
