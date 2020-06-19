import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddstudPageRoutingModule } from './addstud-routing.module';

import { AddstudPage } from './addstud.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddstudPageRoutingModule
  ],
  declarations: [AddstudPage]
})
export class AddstudPageModule {}
