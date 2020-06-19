import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddstudPage } from './addstud.page';

const routes: Routes = [
  {
    path: '',
    component: AddstudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddstudPageRoutingModule {}
