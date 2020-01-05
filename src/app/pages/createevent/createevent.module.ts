import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateeventPageRoutingModule } from './createevent-routing.module';

import { CreateeventPage } from './createevent.page';

@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateeventPage
      }
    ])
  ],
  declarations: [CreateeventPage]
})
export class CreateeventPageModule {}