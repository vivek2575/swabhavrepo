import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from 'src/app/stud';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({ providedIn: 'root' })

export class adddata {
    api: string = "https://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    constructor(private http: HTTP) {
    }
    addstudent(studentdata:student): Promise<student> {
        let promise=new Promise((resolve, reject) => {
            console.log(this.api);
            this.http.post(this.api,studentdata,{})
            
            .then( (res)=>  {
                resolve();
            }
            )
            .catch((err) => {
                console.log(err);
                reject(err);
            })
        });
        return ;
    }
}