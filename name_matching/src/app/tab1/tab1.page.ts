import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  name1:string;
  name2:string;
  c:number;
  e1:string;
  e2:string;
  n=0;

  match(){
    this.c=0;
    this.e1=this.name1;
    this.e2=this.name2;
    for (let i = 0; i < this.name1.length; i++) {
      for (let j = 0; j < this.name2.length; j++) {
        if (this.name1[i]==this.name2[j]) {
          this.c++;
          break;
        }
        
      }
      
    }
    const e= (this.name1.length+this.name2.length)/2;
    this.n=(this.c*100)/e;
  }
}