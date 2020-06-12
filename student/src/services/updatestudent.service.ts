import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from 'src/app/student';


@Injectable({ providedIn: 'root' })

export class updatedata {
    api: string = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    constructor(private http: HttpClient) {
    }
    updateStudents(id,data):Promise<any>
    {
        return new Promise((resolve,reject)=>
        {
            this.http.put(this.api+"/"+id,data,{responseType: 'json'})
            .toPromise()
            .then((response)=>{
               //console.log(response);
                resolve(response);
            })
            .catch((err)=>{
               // console.log(err)
                reject(err)
            })
        })
    }
}