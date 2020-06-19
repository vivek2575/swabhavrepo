import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletestudPage } from './deletestud.page';

const routes: Routes = [
  {
    path: '',
    component: DeletestudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeletestudPageRoutingModule {}
