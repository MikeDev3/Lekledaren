import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameSetpointsPageRoutingModule } from './game-setpoints-routing.module';

import { GameSetpointsPage } from './game-setpoints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameSetpointsPageRoutingModule
  ],
  declarations: [GameSetpointsPage]
})
export class GameSetpointsPageModule {}
