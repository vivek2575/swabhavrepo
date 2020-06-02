import { Component} from '@angular/core';
import { Myservice } from '../service/service.myservice';
@Component({
  selector: 'app-root',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})

export class wellComponent {
  title = 'my-dream-app';
  Name= 'VIVEK';
  well = 'wellcome to angular';

  //mess='message from parent to child';
  //messfromchild:string;

  sum: number = 0;
  constructor(calc:Myservice){
    this.sum = calc.add(1,2,3,4);
  }

  childdata:string;
  parentMethod(data){
    this.childdata=data;
  }

  username:string="message from parent to child";

  u=[];
  udata={
    name:'',
    email:'',
    phone:''
  }

  clickButton(){

    this.u[this.u.length]=JSON.parse(JSON.stringify(this.udata));
  }

}
