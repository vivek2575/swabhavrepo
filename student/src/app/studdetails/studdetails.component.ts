import { Component, OnInit } from '@angular/core';
import { getdata } from 'src/services/getstudent.service';

@Component({
  selector: 'app-studdetails',
  templateUrl: './studdetails.component.html',
  styleUrls: ['./studdetails.component.css']
})
export class StuddetailsComponent implements OnInit {

  constructor(private s:getdata) { }
  loader:boolean=true;
  studentlist=[];
  ngOnInit(): void {
    this.s.students().then((result)=>{
      this.studentlist=result;
      this.loader = false;
    }).catch((error)=>{
      console.log(error);
    })
  }

}
