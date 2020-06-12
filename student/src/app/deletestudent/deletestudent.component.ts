import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { deletedata } from 'src/services/deletestudent.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {

  id:number;
  constructor(private route:ActivatedRoute,
    private s:deletedata
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.s.deletestudent(this.id)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }

}

