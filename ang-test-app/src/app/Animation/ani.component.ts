import {animate, Component, group, keyframes, state, style, transition, trigger} from "@angular/core";


@Component({
  selector: 'app-ani',
  template: `
                <div class="container-fluid">
                  <button class="btn btn-success" (click)="mehrObst()">hinzufügen</button>
                  <button class="btn btn-success" (click)="keinObst()">alle löschen</button>
                  <hr>
                  <ul class="list-group">
                    <li
                      class="list-group-item"
                      style="cursor: pointer"
                      *ngFor="let frucht of obstListe; let i = index "
                      (click)="wenigerObst(i)"
                      [@listenAni]
                      (@listenAni.start)="info($event)"
                      (@listenAni.done)="info($event)"
                    ><!-- [@listenAni]  - verknüpft den Tag mit dem Trigger in animations
                     (@listenAni.start)="info($event)" - start und done(ende) sind standard animations elemente
                     -->
                      {{frucht}}
                    </li>
                  </ul>
                  <hr>
                  <button class="btn btn-success" (click)="hinundher()">hin und her</button>
                  <button class="btn btn-success" (click)="kleiner()">kleiner</button>
                  <hr>
                  <div style="width: 100px; height: 100px; background-color: blue"
                    [@einfacheAni]="einfacheAniZustand"
                    (@einfacheAni.start)="info($event)"
                    (@einfacheAni.done)="info($event)"
                  ></div>
                  <hr>
                  <button class="btn btn-success" (click)="sichtbar()">sichtbarkeit</button>
                  <hr>
                  <div style="width: 100px; height: 100px; background-color: yellow; text-align: center;  display: table-cell;  vertical-align: middle; font-size: xx-large;"
                       *ngIf="sichtbarkeit"
                        [@komplexeAni]="komplexerAniZustand"
                        (@komplexeAni.start)="info($event)"
                        (@komplexeAni.done)="info($event)"
                        >
                    Box
                  </div>
                  <hr>
                </div>

    `,
  styles: [' * {color:blue;} '],
  animations:[
    trigger('einfacheAni',[
      state('status1',style({'background-color':'green',transform:'translateX(0) scale(1)'})),
      state('status2',style({'background-color':'red',transform:'translateX(200px) scale(1)'})),
      state('status1klein',style({'background-color':'green',transform:'translateX(0) scale(0.5)'})),
      state('status2klein',style({'background-color':'red',transform:'translateX(200px) scale(0.5)'})),
      transition('status1 => status2', animate(500)), // animationeingenschaften von 1 nach 2
      transition('status2 => status1', animate(300)),  // zurück von 2 nach 1 mit  =>
      // transition('status1 <=> status1klein', animate(400)), // animationeingenschaften in beide Richtungen mit <=>
      // transition('status2 <=> status2klein', animate(400)),
      // transition('status1 <=> status2klein', animate(800)),
      // transition('status2 <=> status1klein', animate(800)),

      //einfacher mit wildecard * und <=>
      transition('* <=> status2klein', animate(800)),
      transition('* <=> status1klein', [
        style({'background-color':'orange'}),                   //startet mit orange ohne animation
        // Achtung: {'border-radius' : '30px'} fürht zum fehler bei firefox, bei chrom okay
        animate(1000, style({'background-color':'yellow'})),  // animation der Ecken 1s
        // animate(1000, style({'border-radius' : '30px'})),  // animation der Ecken 1s
        animate(500)                                            // übergang zum endstatus
      ])
    ]), //ende trigger
    trigger('komplexeAni',[
      state('standard',style({'background-color':'yellow', opacity: 1})),
      transition('standard => void', animate(1000)),
      transition('void => standard', [
        style({opacity:0}),
        animate(1000)
      ])
    ]),
    trigger('listenAni',[
      // reinfahren  mit keyframes (erst schnell dann langsam)
      transition('void => *',animate(2000, keyframes([
        style({transform: 'translateX(100%)', opacity: 0, offstet: 0}),
        style({transform: 'translateX(10%)', opacity: 0.8, offstet: 0.7}),
        style({transform: 'translateX(0)', opacity: 1, offstet: 1}),
      ]))),
      // rausfahren mit einfacher animation ab er mit gruppen die gleichzeitig starten
      transition('* => void',[
        group([
          animate(500,style({color:'LightCoral', 'font-weight': 'bold'})),
          animate(1500,style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ])
    ])
  ]//ende animation
})
export class AniComponent {
  constructor() {}
  public einfacheAniZustand = 'status1';
  public komplexerAniZustand = 'standard';
  public sichtbarkeit = true;
  public obstListe = [];
  public obstVorrat = ['Annanas','Äpfel','Bananen','Birnen','Erdbeeren','Himbeeren','Kiwi','Krischen','Mango','Mandarinen','Melone','Quitten','Sternfruch','Trauben'];

  hinundher(){
    if (this.einfacheAniZustand =='status1') { this.einfacheAniZustand ='status2';}
    else if (this.einfacheAniZustand =='status2') { this.einfacheAniZustand ='status1';}
    else if (this.einfacheAniZustand =='status1klein') { this.einfacheAniZustand ='status2klein';}
    else if (this.einfacheAniZustand =='status2klein') { this.einfacheAniZustand ='status1klein';}

  }
  kleiner(){
    if (this.einfacheAniZustand =='status1') { this.einfacheAniZustand ='status1klein';}
    else if (this.einfacheAniZustand =='status2') { this.einfacheAniZustand ='status2klein';}
    else if (this.einfacheAniZustand =='status1klein') { this.einfacheAniZustand ='status1';}
    else if (this.einfacheAniZustand =='status2klein') { this.einfacheAniZustand ='status2';}
  }
  sichtbar(){
    this.sichtbarkeit = !this.sichtbarkeit
  }
  mehrObst(){
    let zufallszahl = Math.round(Math.random() * (this.obstVorrat.length-1));
    this.obstListe.push(this.obstVorrat[zufallszahl]);
  }
  keinObst(){
    this.obstListe = [];
  }
  wenigerObst(index){
    this.obstListe.splice(index, 1);
  }
  info(event){
    console.log('ein animations Event');
    console.log(event);
  }

}
