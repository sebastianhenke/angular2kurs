import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meinfilter',
  pure: true  // pure ist optional und standartmäßig true,
              // false bewirkt eine ständige neuanwendung der pipe sobald sich auf der seite etwa verändert
})
export class MeinfilterPipe implements PipeTransform {
  static zaehler=1;

  transform(value: any, args?: any): any {
    if (value.length ==0) {
      return null;
    }
    let ausgabeArray =[];
    for (let x of value){
      if (x.match('^.*'+args+'.*$')){           //regex belibeges zeichen belieg oft am anfang und ende des arguments
        ausgabeArray.push(x);
      }
    }
    console.log('filer',MeinfilterPipe.zaehler++);
    return  ausgabeArray;
  }
}
