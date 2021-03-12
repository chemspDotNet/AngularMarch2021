import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet',
  pure: true
})
export class GreetPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

  }

}
