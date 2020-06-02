import { Injectable } from '@angular/core';

@Injectable()
export class Myservice{
  constructor() { }

  public add(...params: number[]): number {
    let result = 0;
    for (let val of params) {
        result += val;
    }
    return result;
  }

}
