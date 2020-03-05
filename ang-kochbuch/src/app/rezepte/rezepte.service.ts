import {Zutaten} from "../shared/zutaten.model";
import {Rezept} from "./rezept.model";
import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {EventEmitter} from "@angular/core";
import 'rxjs/Rx';

@Injectable()       //für den Http service
export class RezepteService {
  public alleRezepte: Rezept[] = [];
  aenderungAlleRezepte = new EventEmitter<Rezept[]>();
  // rezeptAuswahl= new EventEmitter<Rezept>();       // durch routing abgelöst

  constructor(private http:Http) { }

  aufServerSpeichern(){
    const daten = JSON.stringify(this.alleRezepte);
    const head = new Headers({'Content-Type':'application/json'});
    return this.http.put('https://test-angular-http-4d38f.firebaseio.com/Kochbuch.json',daten,{headers:head});
  }
  vomServerLaden(){
    this.http.get('https://test-angular-http-4d38f.firebaseio.com/Kochbuch.json').map(
      (jsondaten : Response) => {
        console.log('jsondaten:',jsondaten);
        console.log('jsondaten.json():',jsondaten.json());
        return jsondaten.json();
      }
    ).subscribe(
      (daten :Rezept[]) => {
        this.alleRezepte=daten;
        console.log('eventemitter:',this.aenderungAlleRezepte);
        this.aenderungAlleRezepte.subscribe((x) => console.log('eventemitter.subscribe',x));
        this.aenderungAlleRezepte.emit(this.alleRezepte);
      },
      (error)=> {console.log('Fehler: ',error);}
    );
  }

  ausgabeListe(){
    return this.alleRezepte;
  }
  rezeptById(index:number){
    return this.alleRezepte[index];
  }
  hinzufuegen(rezept:Rezept){
    this.alleRezepte.push(rezept);
  }
  aendern(index:number, rezept:Rezept){
    this.alleRezepte[index]=rezept;
    }
  loeschen(index:number){
    this.alleRezepte.splice(index,1);   //splice: löscht ab id genau 1 elemet des array
  }
/*
  this.alleRezepte: Rezept[] = [
    new Rezept(
      'gesundes Frühstück',
      'Magerquark aufschlagen und Joghurt unterrühren. Mit frischen Früchten und Haferflocken in einer Schüssel schichten. Abdecken und über Nacht im Kühlschrank ziehen lassen. Am nächsten Tag genießen.',
      'https://i0.web.de/image/614/34371614,pd=4,f=lead-xxl/lebensmittel-fruehstueck-essen-nuechtern-nuechtern.jpg',
      [
        new Zutaten('Magerquar',1),
        new Zutaten('Joghurt',1),
        new Zutaten('Haferflocken',500),
        new Zutaten('Eier',2),
        new Zutaten('Beeren',10)
      ]
    ),
    new Rezept(
      'Spätzle mit Hähnchen',
      'Hähnchen trocken tupfen und in Würfel schneiden. Lauch waschen, putzen und in feine Ringe schneiden, Möhren schälen, waschen und in kleine Würfel schneiden. Öl in einem Topf erhitzen und Hähnchen darin ca. 2 Minuten anbraten.',
      'https://img.chefkoch-cdn.de/rezepte/3433061511440514/bilder/1087889/crop-600x400/one-pot-spaetzle-mit-haehnchen.jpg',
      [
        new Zutaten('Hähnchen',1),
        new Zutaten('Lauch',10),
        new Zutaten('Möhren',10),
        new Zutaten('Eier',2),
        new Zutaten('Mehl',250)
      ]
    ),
    new Rezept(
      'Nudelauflauf mit Tomaten und Mozzarella',
      'Den Ofen auf 200 °C (Umluft 180 °C) vorheizen.\n\nDie Zwiebel und den Knoblauch sehr fein schneiden. Die Chilischote entkernen und ebenso fein hacken. Die Kirschtomaten waschen und halbieren. Den Parmesan reiben und den Mozzarella grob würfeln. Die Basilikumblätter abzupfen, waschen und trocken tupfen.',
      'https://img.chefkoch-cdn.de/rezepte/2352371374010722/bilder/988858/crop-600x400/cremiger-nudelauflauf-mit-tomaten-und-mozzarella.jpg',
      [
        new Zutaten('Nudeln',100),
        new Zutaten('Tomanten',3),
        new Zutaten('Mozzarella',5),
        new Zutaten('Zwiebeln',2),
        new Zutaten('chili',1)
      ]
    ),
    new Rezept(
      'Griechischer Flammkuchen',
      'Den Teig mit dem Backpapier auf einem Backblech entrollen. Crème fraîche mit Salz und Pfeffer würzen und auf dem Teig verstreichen.\n\n2. Tomaten waschen und in Scheiben schneiden. Feta zerbröseln oder in kleine Würfel schneiden. Peperoni und Oliven abtropfen lassen, Oliven in Scheiben schneiden.',
      'https://img.chefkoch-cdn.de/rezepte/2757071427707982/bilder/791253/crop-600x400/griechischer-flammkuchen.jpg',
      [
        new Zutaten('Kuchen',1),
        new Zutaten('Griechen',1),
        new Zutaten('Feuer',1)
      ]
    )
  ];
*/
}
