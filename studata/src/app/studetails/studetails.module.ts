import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudetailsPageRoutingModule } from './studetails-routing.module';

import { StudetailsPage } from './studetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudetailsPageRoutingModule
  ],
  declarations: [StudetailsPage]
})
export class StudetailsPageModule {}
