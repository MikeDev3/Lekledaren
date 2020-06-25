import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameScoreboardPage } from './game-scoreboard.page';

const routes: Routes = [
  {
    path: '',
    component: GameScoreboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameScoreboardPageRoutingModule {}
