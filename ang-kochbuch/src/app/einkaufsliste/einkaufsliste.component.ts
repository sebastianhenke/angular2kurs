import { Component, OnInit } from '@angular/core';
import {Zutaten} from "../shared/zutaten.model";
import {EinkaufslisteService} from "./einkaufsliste.service";

@Component({
  selector: 'app-einkaufsliste',
  templateUrl: './einkaufsliste.component.html',
  styles: []
})
export class EinkaufslisteComponent implements OnInit {
  einkaufsliste:Zutaten[] =[];
  zumbearbeiten:Zutaten;

  constructor(private einkLiSer:EinkaufslisteService) { }

  ngOnInit() {
    this.einkaufsliste = this.einkLiSer.ausgabeListe();
  }
  bearbeiten(z:Zutaten){
    this.zumbearbeiten = z;
  }
  auswahlLeeren(){
    this.zumbearbeiten = null;
  }

}
