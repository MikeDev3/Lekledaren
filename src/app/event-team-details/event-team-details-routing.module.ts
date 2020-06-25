import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventTeamDetailsPage } from './event-team-details.page';

const routes: Routes = [
  {
    path: '',
    component: EventTeamDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventTeamDetailsPageRoutingModule {}
