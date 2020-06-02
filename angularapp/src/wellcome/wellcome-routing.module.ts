import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PnfComponent } from '../wellcome/page-not-found/page-not-found.component'
import { from } from 'rxjs';

const routes: Routes = [
  { path:'', redirectTo:'/first', pathMatch:'full'},
  {path:"first",component:FirstComponent},
  {path:"second",component:SecondComponent},
  { path:"**",component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
