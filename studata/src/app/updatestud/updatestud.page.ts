import { Component, OnInit } from '@angular/core';
import { student } from '../stud';
import { ActivatedRoute, Router } from '@angular/router';
import { getdata } from 'src/services/getstudent.service';
import { updatedata } from 'src/services/updatestudent.service';

@Component({
  selector: 'app-updatestud',
  templateUrl: './updatestud.page.html',
  styleUrls: ['./updatestud.page.scss'],
})
export class UpdatestudPage implements OnInit {

 
  id:number;
  studentlist=new student;
  loader:boolean=true;
  constructor(
                private activatedRoute:ActivatedRoute,
                private s:getdata,
                private ud:updatedata,
                private router:Router
  ) { }
  
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.getStudentById(this.id);
  }
  studentdata=new student;
  getStudentById(id){
    this.s.getStudentById(id).then((result)=>{
      this.studentlist=JSON.parse(result.data);
      this.studentdata=this.studentlist[0];
      this.loader=false;
      console.log(this.studentlist);
    }).catch((error)=>{
      console.log(error);
    })
  }
  l:string;
  onsubmit(){
    this.ud.updateStudents(this.id,this.studentdata);
    this.l='Updated Successfully!';
  }

  go(){
    this.router.navigate(['']);
  }

}
