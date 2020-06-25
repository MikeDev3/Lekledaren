import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventTeamsPageRoutingModule } from './event-teams-routing.module';

import { EventTeamsPage } from './event-teams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventTeamsPageRoutingModule
  ],
  declarations: [EventTeamsPage]
})
export class EventTeamsPageModule {}
