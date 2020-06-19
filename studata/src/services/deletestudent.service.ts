import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({ providedIn: 'root' })

export class deletedata {
    api: string = "https://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";
    constructor(private http: HTTP) {
    }
    deletestudent(id:number) : Promise<any>{
        let url = `${this.api}/${id}`;
        let promise=new Promise((resolve, reject) => {
            this.http.delete(url,{},{})
        
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