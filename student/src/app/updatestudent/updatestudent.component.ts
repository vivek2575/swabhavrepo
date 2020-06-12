import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getdata } from 'src/services/getstudent.service';
import { student } from '../student';
import { updatedata } from 'src/services/updatestudent.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  id:number;
  studentlist=new student;
  loader:boolean=true;
  constructor(
                private activatedRoute:ActivatedRoute,
                private s:getdata,
                private ud:updatedata
  ) { }
  
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getStudentById(this.id);
  }
  studentdata=new student;
  getStudentById(id){
    this.s.getStudentById(id).then((result)=>{
      this.studentlist=result;
      this.studentdata=result[0];
      this.loader=false;
      console.log(this.studentlist);
    }).catch((error)=>{
      console.log(error);
    })
  }
  onsubmit(){
    this.ud.updateStudents(this.id,this.studentdata);
  }

}
