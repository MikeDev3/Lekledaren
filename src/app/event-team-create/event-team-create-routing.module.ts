import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventTeamCreatePage } from './event-team-create.page';

const routes: Routes = [
  {
    path: '',
    component: EventTeamCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventTeamCreatePageRoutingModule {}
