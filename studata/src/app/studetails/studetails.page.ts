import { Component, OnInit } from '@angular/core';
import { getdata } from 'src/services/getstudent.service';

@Component({
  selector: 'app-studetails',
  templateUrl: './studetails.page.html',
  styleUrls: ['./studetails.page.scss'],
})
export class StudetailsPage implements OnInit {

  constructor(private s:getdata) { }
  loader:boolean=true;
  studentlist=[];
  ngOnInit(): void {
    this.s.students().then((result)=>{
      this.studentlist=JSON.parse(result.data);
      this.loader = false;
    }).catch((error)=>{
      console.log(error);
    })
  }

}
