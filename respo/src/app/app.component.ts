import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*class Post {
  constructor(
    public age: number,
    public date: Date,
    public email: string,
    public id: string,
    public name: string,
    public rollNo: number,
    public isMale: boolean
  ) { }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title='hello';

  api: string = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
  data = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getdata();
  }
  getdata() {
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http.get(apiURL ,{ responseType:"json"})
        .toPromise()
        .then((res: any) => {
          //console.log(res);
          // Success


          this.data = res.map((res: any) => {
            return new Post(
              res.age,
              res.data,
              res.email,
              res.id,
              res.name,
              res.rollNo,
              res.isMale
            );
          });
          resolve();
        });
          err => {
            // Error
            console.log(err);
            reject(err);
          }

    });
    return promise;
  }

}*/


import { getdata } from '../services/service.numberapi';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  xtra=[];
  loading:boolean =false;
  constructor(private s:getdata)
  {
  }
  getstudent(){
    this.loading = true;
    this.s.students().then((result)=>{
      this.xtra=result;
      this.loading = false;
     // console.log(result);
    }).catch((error)=>{
      console.log(error);
    })
  }
}
