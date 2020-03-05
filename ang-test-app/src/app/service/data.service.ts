import {EventEmitter, Injectable} from '@angular/core';
import {LogService} from "./log.service";

@Injectable()               // ist ein leerer Decorator. Da irgendein Dekorater benötigt wird, wenn man andere Service aufrufen möchte.
export class DataService {
  private daten : string[] =[];
  uebergabeWert = new EventEmitter<string>();

  constructor( private logS : LogService) { }

  hinzufügen(wert:string){
    this.daten.push(wert);
    this.logS.clog('hinzugefügt');
  }

  ausgabe(){
    return this.daten;
  }

  uebergabe(wert:string){
    this.uebergabeWert.emit(wert);
  }
}
