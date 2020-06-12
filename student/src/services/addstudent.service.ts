import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from 'src/app/student';


@Injectable({ providedIn: 'root' })

export class adddata {
    api: string = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    constructor(private http: HttpClient) {
    }
    addstudent(studentdata:student): Promise<student> {
        let promise=new Promise((resolve, reject) => {
            console.log(this.api);
            this.http.post(this.api,studentdata)
            .toPromise()
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