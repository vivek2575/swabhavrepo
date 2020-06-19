import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudetailsPage } from './studetails.page';

const routes: Routes = [
  {
    path: '',
    component: StudetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudetailsPageRoutingModule {}
