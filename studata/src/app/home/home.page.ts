import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router:Router
  ) {}
  studetail()
  {
    this.router.navigate(['studetails']);
  }
  addstud(){
    this.router.navigate(['addstud']);
  }
}
