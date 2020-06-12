import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import {StuddetailsComponent} from './studdetails/studdetails.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'studdetails' , component:StuddetailsComponent},
  {path:'deletestudent/:id' , component:DeletestudentComponent},
  {path:'updatestudent/:id' , component:UpdatestudentComponent},
  {path:'addstudent' , component:AddstudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
