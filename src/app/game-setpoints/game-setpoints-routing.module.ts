import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameSetpointsPage } from './game-setpoints.page';

const routes: Routes = [
  {
    path: '',
    component: GameSetpointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameSetpointsPageRoutingModule {}
