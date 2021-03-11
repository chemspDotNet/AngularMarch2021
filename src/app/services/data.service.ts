import { Injectable, IterableDiffers } from '@angular/core';
import { from, of } from 'rxjs';
import { catchError, map, retry, } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  srcArray = from([1, 2, 'A', 4]);
  simpledata = of('ABCD');
  constructor() { }

  sayHello() {
    return 'Hello Class';
  }


  getstrings() {
    return this.simpledata;
  }
  /// getdata.pipe(map,filter ,catchError)
  getDataArray() {
    return this.srcArray
      .pipe(
        map(val => {
          let result = val as number * 2;
          if (Number.isNaN(result)) {
            console.log('Errors Occurred in Stream')
            throw new Error("Result is NaN")
          }
          return result
        }),
        catchError(error => {
          console.log('Caught in CatchError. Returning 0')
          retry(1);
          return of(0);     //return from(['A','B','C'])
        })
      );
  }



}
