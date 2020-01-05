import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonusersPage } from './jsonusers.page';

const routes: Routes = [
  {
    path: '',
    component: JsonusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonusersPageRoutingModule {}
