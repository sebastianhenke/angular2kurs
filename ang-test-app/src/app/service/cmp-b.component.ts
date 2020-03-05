import {Component, OnInit} from '@angular/core';
import {LogService} from "./log.service";
import {DataService} from "./data.service";

@Component({
    selector: 'si-cmp-b',
    template: `
    <h3>Componete B</h3>
    <div>
      <h4>Nachricht:
        <input type="text" #input>
        <button (click)="onLog(input.value)" class="btn btn-primary">Log</button>
        <button (click)="onStore(input.value)" class="btn btn-primary">Store</button>
      </h4>
    </div>
    <div>
      <h4>Nachrichten Speicher
        <button (click)="onGet()" class="btn btn-primary">laden</button></h4>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h4>Empfangen Nachricht</h4>
        <p>{{value}}</p>
    </div>
    <hr>
  `
  // der DataService wird nicht hier sondern in der Übergeordneten Componete eingestellt, damit alle Töchter Componenten die gleiche Instanz nutzen
  //providers:[DataService]
})
export class CmpBComponent implements OnInit{
    value = '';
    items: string[] = [];

  constructor(private logS: LogService, private dataS:DataService) {}

  onLog(value: string) {
    this.logS.clog(value);
  }

  onStore(value: string) {
    this.dataS.hinzufügen(value);
  }

  onGet() {
    this.items=this.dataS.ausgabe();
  }

  ngOnInit(): void {
    //subscibe reagiert auf jede Veränderung des Evnets in übergabewert und liefert 3 Argumete:
    // 1.callback neue daten      (nur dieser wird hier benutzt)
    // 2.callback fehler
    // 3.callback emitter wird beendet
    this.dataS.uebergabeWert.subscribe(
      (daten :string) => this.value=daten
    );
  }


}
