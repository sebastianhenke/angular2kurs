import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {
  text = 'kleingeschrieben';
  datum = new Date();
  liste = ['hund','katze','maus','vogel','elefant','tieger'];
  asynchronerWert = new Promise(
    (resolve, reject) => {
      setTimeout( () => {resolve('serverdaten geprüft');},3000)      // 3 sek warten simmuliert serverabfrage
  });

  constructor() { }

  ngOnInit() {
  }

}
