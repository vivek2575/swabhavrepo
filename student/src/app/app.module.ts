import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { StuddetailsComponent } from './studdetails/studdetails.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { getdata } from 'src/services/getstudent.service';
import { deletedata } from 'src/services/deletestudent.service';
import { adddata } from 'src/services/addstudent.service';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    StuddetailsComponent,
    HomeComponent,
    HeaderComponent,
    DeletestudentComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [getdata,adddata,deletedata],
  bootstrap: [AppComponent]
})
export class AppModule { }
