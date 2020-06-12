import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { adddata } from 'src/services/addstudent.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  

    constructor(private s:adddata) { }
  v='vivek';
    ngOnInit(): void {
    }
    studentdata=new student;
   onsubmit(){
  console.log(this.v);
    this.s.addstudent(this.studentdata);
   }

  }

  