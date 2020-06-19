import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { deletedata } from 'src/services/deletestudent.service';

@Component({
  selector: 'app-deletestud',
  templateUrl: './deletestud.page.html',
  styleUrls: ['./deletestud.page.scss'],
})
export class DeletestudPage implements OnInit {

  id:number;
  constructor(private route:ActivatedRoute, private s:deletedata, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.s.deletestudent(this.id)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }
  onsubmit(){
    this.router.navigate(['']);
  }

}
