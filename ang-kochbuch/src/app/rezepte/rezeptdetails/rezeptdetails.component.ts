import {Component, OnDestroy, OnInit} from '@angular/core';
import {Rezept} from "../rezept.model";
import {RezepteService} from "../rezepte.service";
import {EinkaufslisteService} from "../../einkaufsliste/einkaufsliste.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-rezeptdetails',
  templateUrl: './rezeptdetails.component.html',
  styles: []
})
export class RezeptdetailsComponent implements OnInit, OnDestroy {
  angezeigtesRezept:Rezept;
  angezeigtesRezeptId:number;
  private subscr:Subscription;

  constructor(private rezepteSer:RezepteService, private einkLiSer:EinkaufslisteService, private link: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    /* durch routing abgelöst
    this.rezepteSer.rezeptAuswahl.subscribe(
      (r:Rezept) => this.angezeigtesRezept=r
      );
     */
    this.subscr = this.link.params.subscribe( params => {
      this.angezeigtesRezeptId = +params['id'];
      this.angezeigtesRezept = this.rezepteSer.rezeptById(+params['id'])
    })
  }

  aufDieListe(){
    this.einkLiSer.mehrereHinzufügen(this.angezeigtesRezept.zutaten);
  }

  bearbeiten(){
     this.router.navigate(['/rezepte',this.angezeigtesRezeptId,'bearbeiten'])
  }

  loeschen(){
    this.rezepteSer.loeschen(this.angezeigtesRezeptId);
    this.router.navigate(['/rezepte']);
  }

  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }



}
