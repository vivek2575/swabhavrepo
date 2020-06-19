import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatestudPage } from './updatestud.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatestudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatestudPageRoutingModule {}
