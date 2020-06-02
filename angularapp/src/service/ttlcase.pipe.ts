import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {name : 'tcase'})

export class TcasePipe implements PipeTransform {

  transform(str:string): string {
    let s:string="";
    s+=str.charAt(0).toUpperCase();
    for(var i=1;i<str.length;i++){
      if(str[i-1]==' ' || str[i-1]=='-'){
        s+=" ";
        s+=str.charAt(i).toUpperCase();
      }
      else{
        s+=str[i];
      }
    }
    return s;
  }
}
