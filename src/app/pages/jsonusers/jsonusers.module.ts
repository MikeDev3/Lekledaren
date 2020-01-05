import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsonusersPageRoutingModule } from './jsonusers-routing.module';

import { JsonusersPage } from './jsonusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsonusersPageRoutingModule
  ],
  declarations: [JsonusersPage]
})
export class JsonusersPageModule {}
