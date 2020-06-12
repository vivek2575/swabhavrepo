import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';


@Injectable({ providedIn: 'root' })

export class deletedata {
    api: string = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    constructor(private http: HttpClient) {
    }
    deletestudent(id:number) : Promise<any>{
        let url = `${this.api}/${id}`;
        let promise=new Promise((resolve, reject) => {
            this.http.delete(url)
            .toPromise()
            .then((response: any) => {
                resolve();
            }
            )
            .catch((err) => {
                console.log(err);
                reject(err);
            })
        }
        )
        return promise;
    }
}