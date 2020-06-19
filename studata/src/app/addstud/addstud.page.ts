import { Component, OnInit } from '@angular/core';
import { adddata } from 'src/services/addstudent.service';
import { student } from 'src/app/stud';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.page.html',
  styleUrls: ['./addstud.page.scss'],
})
export class AddstudPage implements OnInit {

  constructor(private s:adddata, private router:Router, public formBuilder: FormBuilder) { }

  ionicForm: FormGroup;
  defaultDate = "2020-06-15";
  isSubmitted = false;

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      rollno: ['',[Validators.required,Validators.pattern('^[0-9]+$')]],
      age: ['',[Validators.required]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate, [Validators.required]],
      gender: ['',[Validators.required]]
    })
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  studentdata=new student;
  l:string;
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    }
    else {
      this.s.addstudent(this.studentdata);
      this.l="Form Successfully Submitted!";
      console.log(this.ionicForm.value)
    }

  }

  go(){
    this.router.navigate(['']);
  }

}

