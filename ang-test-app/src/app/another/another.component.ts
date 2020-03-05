import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>andere Componente (app-another)ist blau <br>aber dessen übergabetext orginal farbe: </p>
    <ng-content></ng-content>
  `,
  styles: [' * {color:blue;} ']
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
