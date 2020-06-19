import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeletestudPageRoutingModule } from './deletestud-routing.module';

import { DeletestudPage } from './deletestud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeletestudPageRoutingModule
  ],
  declarations: [DeletestudPage]
})
export class DeletestudPageModule {}
