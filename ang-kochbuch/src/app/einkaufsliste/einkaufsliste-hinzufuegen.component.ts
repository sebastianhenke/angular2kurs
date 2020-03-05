import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {EinkaufslisteService} from "./einkaufsliste.service";
import {Zutaten} from "../shared/zutaten.model";

@Component({
  selector: 'app-einkaufsliste-hinzufuegen',
  templateUrl: './einkaufsliste-hinzufuegen.component.html',
  styles: []
})
export class EinkaufslisteHinzufuegenComponent implements OnInit, OnChanges {
  @Input() zubearbeiten : Zutaten;
  @Output() leeren = new EventEmitter(); // gibt ein event an das eltern objekt
  bearbeitenModus=false;

  constructor(private elServ : EinkaufslisteService) { }

  hinzufuegen(formularDaten :NgForm){
    console.log(formularDaten.value.zutatname, formularDaten.value.zutatanzahl);
    let neueZutat = new Zutaten(formularDaten.value.zutatname, formularDaten.value.zutatanzahl);
    if (this.bearbeitenModus){
      // Bearbeiten
      this.elServ.bearbeiten(this.zubearbeiten, neueZutat)
    }
    else {
      // hinzufügen
      this.elServ.eineHinzufügen(neueZutat);
    }
    this.zuruecksetzten(formularDaten);
  }

  zuruecksetzten(form:NgForm) {
    console.log('zurücksetzen',form);
    form.resetForm();     // eigentlich nicht mehr nötig da das feld durch das event geleert wird
    this.bearbeitenModus=false;

    this.leeren.emit();       // schickt ein event an die einkaufsliste damit die auswahl wieder auf null gesetzt wird
    // alternativ kann man es auch ohne event einfach auf eine leere zutat setzen
    //this.zubearbeiten = new Zutaten(null,null);
  }

  loeschen(form:NgForm){
    if (this.zubearbeiten.anzahl){ //  eigentlich überflüssig durch ngif im html
      console.log('lösche',form.value.zutatanzahl, 'von',this.zubearbeiten.anzahl)
      //this.elServ.eineLöschen(this.zubearbeiten); // so löschte er alles ohne das formular zu beachten
      this.elServ.eineLöschen(new Zutaten(this.zubearbeiten.name,form.value.zutatanzahl));

      this.zuruecksetzten(form);
    }
  }

  ngOnInit() {
  }

  ngOnChanges(aenderung): void {
    console.log('änderung',aenderung);
    if (aenderung.zubearbeiten.currentValue ==null){
      this.zubearbeiten = new Zutaten(null,null);
      this.bearbeitenModus = false;
    }
    else {
      this.bearbeitenModus = true;
    }
  }


}
