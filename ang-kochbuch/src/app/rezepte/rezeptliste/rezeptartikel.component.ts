import {Component, Input, OnInit} from '@angular/core';
import {Rezept} from "../rezept.model";
import {RezepteService} from "../rezepte.service";

@Component({
  selector: 'app-rezeptartikel',
  templateUrl: './rezeptartikel.component.html',
  styles: []
})
export class RezeptartikelComponent implements OnInit {
 @Input() rezept:Rezept;
 @Input() id:number;

  constructor(private rezepteSer: RezepteService) { }

  ngOnInit() {  }

  /* druch routing abgelöst
  auswahl(){
    this.rezepteSer.rezeptAuswahl.emit(this.rezept);
  }
  */
}
