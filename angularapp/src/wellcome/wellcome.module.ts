import { BrowserModule } from '@angular/platform-browser';
import { NgModule,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './wellcome-routing.module';
import { wellComponent } from './wellcome.component';
import { TcasePipe } from '../service/ttlcase.pipe';
import { Myservice } from '../service/service.myservice';
import { from } from 'rxjs';

import { ChildComponent } from '../wellcome/child/child.component';
import { FirstComponent } from '../wellcome/first/first.component';
import { SecondComponent } from '../wellcome/second/second.component';
import { PnfComponent } from '../wellcome/page-not-found/page-not-found.component'
@NgModule({
  declarations: [
    wellComponent,
    TcasePipe,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [Myservice],
  bootstrap: [wellComponent]
})
export class AppModule {
 }
