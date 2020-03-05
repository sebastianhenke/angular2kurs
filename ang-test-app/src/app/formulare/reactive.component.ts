import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: [`
    input.ng-touched.ng-invalid,  input.ng-dirty.ng-invalid  {
      border: 3px solid red;
    }

  `]
})
export class ReactiveComponent implements OnInit {
  meinReactiveFormular: FormGroup;
  geschlechter = ['männlich','weiblich','divers'];


  constructor(private formBuilder:FormBuilder) { }

  datenAuswerten(){
    // daten sind schon im objekt!

    // formular reset
    this.meinReactiveFormular.reset();
  }

  neuesHobby(){
    // mit (<type>objekt) castet man Objekte zu einen bestimmten typ und kann dann dessen methoden benutzen zb push
    (<FormArray>this.meinReactiveFormular.get('hobbys')).push(new FormControl('', [], this.meineAsyncPruefung));
    // ein asynchroner Validatoren kannnur als 3. parameter anfügen werden, d.h. ein 2. ist zwingent notwendig
    // wenn der 2. leer ist, gibt es fehlermeldungen, bei Formbuilder dagegen darf ein leerer übergeben werden
    // man kann allerdings ein leeres Array benutzen
  }

  ngOnInit() {
    // Version mit FormControl (standard)
    // this.meinReactiveFormular = new FormGroup({
    //   'userdaten': new FormGroup({
    //     'username': new FormControl('max', Validators.required),
    //     'email': new FormControl('max@bla.de', [
    //       Validators.required,
    //       Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
    //     ])
    //   }),
    //   'password': new FormControl(null,Validators.required),
    //   'geschlecht': new FormControl('männlich'),
    //   'hobbys' : new FormArray([
    //     new FormControl(null)
    //   ])
    // });

    // alternative Version mit FormBuilder
    this.meinReactiveFormular = this.formBuilder.group({
      'userdaten' : this.formBuilder.group({
        'username' : this.formBuilder.control('tomi',[Validators.required, this.meinePruefung]),
        // man kann auch die kurzschreibweise benutzen
        'email' :  [
          'tom@bla.de',
          [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]
        ]
      }),
      'password' : [null,Validators.required],
      'geschlecht': ['männlich'],
      'hobbys' : this.formBuilder.array([
        ['', , this.meineAsyncPruefung]                               // asynchrone Validatoren können nur als 3. parameter anfügen
      ])
    })

    console.log(this.meinReactiveFormular);
    // gibt bei jeder Änderung von value ein log aus:
    this.meinReactiveFormular.valueChanges.subscribe(
      (daten: any) => console.log(daten)
    );
    // gibt bei jeder Änderung von value ein log aus:
    this.meinReactiveFormular.statusChanges.subscribe(
      (daten: any) => console.log(daten)
    );
  }


  // eigener Validator: einfage ein control, rückgabewert ist ein Objetkt aus key(string) und Wert: war oder falsch
  meinePruefung (control:FormControl):{ [s:string]:boolean } {
    console.log('eigene prüfung');
    let falscheNamen :String[] = ['niemand','keiner','irgendwwer','ich','deine mutter'];
     for (let n of falscheNamen){
       if ( control.value.toLowerCase() == n) {   return { ungueltigername:true}     }
     }
    return null; // nur null oder undefined als rückgabewert fürht zum bestehen der Prüfung
  }

  // eigenner asynchrone Prüfung
  meineAsyncPruefung (control:FormControl): Promise<any> | Observable<any> {
    console.log('eigene asynchrone prüfung');
    let keineHobbys :String[] = ['schlafen','athmen','leben','stitzen','deine mutter'];
    const promise = new Promise<any>(
      (ergebnis, fehler) =>{
        setTimeout(()=>{
          var allesOK=true;
          for (let h of keineHobbys){
            if ( control.value.toLowerCase() == h) { allesOK=false; }
          }
          console.log('allesOK',allesOK)
          if (allesOK){ ergebnis(null)}
          else { ergebnis({ngueltigername:true})}
        },3500);
      }
    );
    return promise;
  }

}
