import {Component, OnDestroy, OnInit} from '@angular/core';
import {RezepteService} from "../rezepte.service";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Rezept} from "../rezept.model";

@Component({
  selector: 'app-rezeptebearbeiten',
  templateUrl: './rezeptebearbeiten.component.html',
  styles: []
})
export class RezeptebearbeitenComponent implements OnInit , OnDestroy{
  rezeptFormular: FormGroup;
  private subscr:Subscription;
  private bearbeitenModus =false;
  private bearbeitetesRezept: Rezept;
  private rezeptIndex: number;

  constructor(private rezepteService:RezepteService, private router:Router,private link : ActivatedRoute) { }

  ngOnInit() {
    this.subscr = this.link.params.subscribe(
      parameter =>{
        if (parameter.hasOwnProperty('id')){
          this.bearbeitenModus = true;
          this.rezeptIndex = +parameter['id'];
          this.bearbeitetesRezept = this.rezepteService.rezeptById(this.rezeptIndex);
        }
        // wenn mehere Parameter übergeben werden würde immer ein else ausgeführt
        // else {
        //   this.bearbeitenModus = false;
        //   this.bearbeitetesRezept = null;
        // }
      }
    )
    let titel =null;
    let bildlink =null;
    let beschreibung =null;
    let zutatenFormArray = new FormArray([]);
    if (this.bearbeitenModus){
      titel = this.bearbeitetesRezept.titel;
      bildlink = this.bearbeitetesRezept.bildlink;
      beschreibung = this.bearbeitetesRezept.beschreibung;
      for (let zutat of this.bearbeitetesRezept.zutaten){
        zutatenFormArray.push(
          new FormGroup({
            'name': new FormControl(zutat.name,Validators.required),
            'anzahl': new FormControl(zutat.anzahl,Validators.required)
          })
        );
      }
    }
    this.rezeptFormular = new FormGroup({
      'titel': new FormControl(titel,Validators.required),
      'bildlink': new FormControl(bildlink),
      'beschreibung': new FormControl(beschreibung,Validators.required),
      'zutaten':zutatenFormArray
        //new FormArray([ //wird durch zutatenFormArray abgelöst
        //starte als leeres Array und wird mit hinzufuegenZutat() erweitert
        // new FormGroup({
        //   'name': new FormControl('anzeigetest',Validators.required),
        //   'anzahl': new FormControl('10',Validators.required),
        // })
        //])
    });
  }

  speichern(){
    let rezeptAusFormular = this.rezeptFormular.value;
    if (this.bearbeitenModus) { this.rezepteService.aendern(this.rezeptIndex,rezeptAusFormular);}
    else { this.rezepteService.hinzufuegen(rezeptAusFormular);}
    this.zurueck();
  }
  zurueck(){
    this.router.navigate(['/'])
  }

  hinzufuegenZutat(zutat:string, anzahl:number){
    console.log(zutat,anzahl);
    console.log(this.rezeptFormular.get('zutaten'));
    (<FormArray>this.rezeptFormular.get('zutaten')).push(
        new FormGroup({
          'name': new FormControl(zutat,Validators.required),
          'anzahl': new FormControl(anzahl,Validators.required)
        })
    );
  }
  loescheZutat(index:number){
    (<FormArray>this.rezeptFormular.get('zutaten')).removeAt(index); //removeAt ist eine funktion aus FormArray

  }
  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }
}
