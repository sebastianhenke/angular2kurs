import {Zutaten} from "../shared/zutaten.model";

export class EinkaufslisteService {
  private einkaufliste : Zutaten[] = [];
  private erzeugeBeispieldaten :boolean = true;



  constructor() {
    if (this.erzeugeBeispieldaten){
      this.einkaufliste = [
        new Zutaten('Eier',10),
        new Zutaten('Milch',2),
        new Zutaten('Käse',1),
        new Zutaten('Butter',1)
      ];
    }
    this.listesortieren();
  }

  listesortieren(): void {
    //sotiert die einkaufsliste bei jeder ausgabe neu
    this.einkaufliste.sort(
      (a, b) => {
              if (a.name.toUpperCase() > b.name.toUpperCase()) { return  1;}
              else {return -1; }
      }
    );
  }

  ausgabeListe(){
     return this.einkaufliste;
  }

  bearbeiten(alteZutat:Zutaten, neueZutat:Zutaten){
    // for (let j=0; j<this.einkaufliste.length;j++){
    //   if (alteZutat.name.toLocaleLowerCase() == this.einkaufliste[j].name.toLocaleLowerCase()){
    //     this.einkaufliste[j].name = neueZutat.name;
    //     this.einkaufliste[j].anzahl = neueZutat.anzahl;
    //   }
    // }

    // einfacher mit index of:
    this.einkaufliste[this.einkaufliste.indexOf(alteZutat)] = neueZutat;

    this.listesortieren();
  }

  mehrereHinzufügen(zutaten:Zutaten[]){
    //hängt jede Zustat in Array"zutaten" an das Array"einkaufsliste" an
    //Array.prototype.push.apply(this.einkaufliste,zutaten)
    for (let i=0; i<zutaten.length;i++){
      this.eineHinzufügen(zutaten[i]);
    }
  }

  eineHinzufügen(zutat:Zutaten){
    // prüft für jede Zutat ob sie in der einkaufsliste vorhanden ist,
    // wenn ja wird die Anzahl erhört, wenn nicht wird es hinzugefügt
    var istAufListe=false;
    for (let j=0; j<this.einkaufliste.length;j++){
      if (zutat.name.toLocaleLowerCase() == this.einkaufliste[j].name.toLocaleLowerCase()){
        istAufListe=true;
        this.einkaufliste[j].anzahl += zutat.anzahl;
      }
    }
    if (!istAufListe){
      //this.einkaufliste.push(zutat);
      // dies füghte die original Zutat zur einkaufsliste,
      // wird diese dann verändert, wird auch die Zutat im Rezept geändert.
      // stattdessen wird jetzt eine Neue Zutat mit gleichem Namen und Anzahl erstellt.
      this.einkaufliste.push(new Zutaten(zutat.name,zutat.anzahl));
    }
    this.listesortieren();
  }


  mehereLöschen(zutaten:Zutaten[]){
    for (let i=0; i<zutaten.length;i++){
      this.eineLöschen(zutaten[i]);
    }
  }

  eineLöschen(zutat:Zutaten){
    // prüft für jede Zutat ob sie in der einkaufsliste vorhanden ist, wenn ja wird die Anzahl verringert,
    // wenn 0 der weniger wird es von der liste gelöscht
    for (let j=0; j<this.einkaufliste.length;j++){
      if (zutat.name.toLocaleLowerCase() == this.einkaufliste[j].name.toLocaleLowerCase()){
        console.log (this.einkaufliste[j].anzahl , zutat.anzahl);
        this.einkaufliste[j].anzahl -= zutat.anzahl;
        if(this.einkaufliste[j].anzahl < 1){
          this.einkaufliste.splice(j,1);
        }
      }
    }
  }



}
