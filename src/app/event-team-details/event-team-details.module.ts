import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventTeamDetailsPageRoutingModule } from './event-team-details-routing.module';

import { EventTeamDetailsPage } from './event-team-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventTeamDetailsPageRoutingModule
  ],
  declarations: [EventTeamDetailsPage]
})
export class EventTeamDetailsPageModule {}
