import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({ providedIn: 'root' })

export class getdata {
    api: string = "https://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    constructor(private http: HTTP) {
    }
    students(): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            this.http.get(this.api,{}, { responseType: 'json' })
            
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
            this.http.get(this.api+"/"+id,{}, { responseType: 'json' })
                
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