import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <div (click)="klickdas()">  klick dass!!  </div>
  `,
  styles: [`
    div {
        width: 100px;
        height: 50px;
        background-color: gold;
    }
  `]
})
export class EventBindingComponent {
  klickzähler=0;
  @Output()  meinEvent = new EventEmitter<string>();

  klickdas() {
    this.klickzähler++;
    var neuertext="das gelbe feld wurde "+this.klickzähler+" mal geklickt"
    this.meinEvent.emit(neuertext);

  }
}
