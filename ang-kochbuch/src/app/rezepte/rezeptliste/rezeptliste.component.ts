import {Component, EventEmitter, OnInit} from '@angular/core';
import {Rezept} from "../rezept.model";
import {RezepteService} from "../rezepte.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-rezeptliste',
  templateUrl: './rezeptliste.component.html',
  styles: []
})
export class RezeptlisteComponent implements OnInit {
  rezeptListe: Rezept[];


  constructor(private rezepteSer : RezepteService,private router:Router) { }

  ngOnInit() {
    this.rezeptListe = this.rezepteSer.ausgabeListe();
    this.rezepteSer.aenderungAlleRezepte.subscribe(
      (rezepte:Rezept[]) => this.rezeptListe = rezepte
    );
  }

  neuesRezept() {
    this.router.navigate(['/rezepte','neu']);
  }

}
