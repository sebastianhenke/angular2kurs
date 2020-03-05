import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multipli'
})
export class MultipliPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNaN(value) || value == '') {         //isNaN = is Not a Number
      return 'bitte Zahl eingeben'
    } else {
      if (args > 0) {
        return value * args;
      } else {
        return value * 2;
      }
    }
  }
}
