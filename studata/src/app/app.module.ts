import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';

import { AddstudPage } from './addstud/addstud.page';
import { StudetailsPage } from './studetails/studetails.page';
import { DeletestudPage } from './deletestud/deletestud.page';
import { UpdatestudPage } from './updatestud/updatestud.page';
import { getdata } from 'src/services/getstudent.service';
import { adddata } from 'src/services/addstudent.service';
import { deletedata } from 'src/services/deletestudent.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HTTP } from '@ionic-native/http/ngx';

@NgModule({
  declarations: [AppComponent,
    AddstudPage,
    StudetailsPage,
    DeletestudPage,
    UpdatestudPage
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), ReactiveFormsModule, AppRoutingModule,HttpClientModule, FormsModule, CommonModule],
  providers: [
    getdata,
    adddata,
    deletedata,
    StatusBar,
    HTTP,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
