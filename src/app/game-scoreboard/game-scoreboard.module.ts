import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameScoreboardPageRoutingModule } from './game-scoreboard-routing.module';

import { GameScoreboardPage } from './game-scoreboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameScoreboardPageRoutingModule
  ],
  declarations: [GameScoreboardPage]
})
export class GameScoreboardPageModule {}
