import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatestudPageRoutingModule } from './updatestud-routing.module';

import { UpdatestudPage } from './updatestud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatestudPageRoutingModule
  ],
  declarations: [UpdatestudPage]
})
export class UpdatestudPageModule {}
