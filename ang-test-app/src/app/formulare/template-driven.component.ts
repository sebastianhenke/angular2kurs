import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
    input.ng-dirty.ng-invalid {
      border: 3px solid red;
    }
  `]
})
export class TemplateDrivenComponent implements OnInit {
  user ={
    name:'basti',
    email:'basti@bla.de',
    pass: '1234',
    geschlecht: 'männlich'
  };
  geschlechter = ['männlich','weiblich','divers'];

  constructor() { }

  ngOnInit() {
  }

  datenAuswerten(formularDaten: NgForm){
    console.log(formularDaten);
    /*  wird dank two-way binding nicht mehr benötigt!
    this.user.name=formularDaten.Nutzerdaten.value.username;
    this.user.email=formularDaten.Nutzerdaten.value.email;
    this.user.pass=formularDaten.value.password;
    */
    this.user.geschlecht=formularDaten.value.geschlecht;

    // formular reset
    formularDaten.reset();
  }

}
