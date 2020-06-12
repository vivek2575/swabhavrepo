import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })

export class getdata {
    api: string = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    constructor(private http: HttpClient) {
    }
    students(): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            this.http.get(this.api, { responseType: 'json' })
                .toPromise()
                .then((response: any) => {
                    resolve(response);
                }
                )
                .catch((err) => {
                    console.log(err);
                    reject(err);
                })
        });
        return promise;
    }
    getStudentById(id): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            this.http.get(this.api+"/"+id, { responseType: 'json' })
                .toPromise()
                .then((response: any) => {
                    resolve(response);
                }
                )
                .catch((err) => {
                    console.log(err);
                    reject(err);
                })
        });
        return promise;
    }
}