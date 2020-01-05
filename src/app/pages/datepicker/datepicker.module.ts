import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatepickerPageRoutingModule } from './datepicker-routing.module';

import { DatepickerPage } from './datepicker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatepickerPageRoutingModule
  ],
  declarations: [DatepickerPage]
})
export class DatepickerPageModule {}
