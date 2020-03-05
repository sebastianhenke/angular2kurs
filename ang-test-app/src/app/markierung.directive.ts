import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer} from '@angular/core';
import { meinefarben } from './app.component';

@Directive({
  selector: '[meineMarkierung]'
})
export class MarkierungDirective implements OnInit{

  @HostBinding('style.backgroundColor') hintergrundfarbe:string;    //hostbinding verbindet das argument mit dem Dom Element
  @HostBinding('style.fontWeight') schriftart :string;

  @Input() normaleSchriftFarbe=  'blue';           // wird durch [normaleSchriftFarbe]="'red'" von außen überschrieben
  @Input() besondereSchriftFarbe= 'white';         // wenn von außen nichts kommt wird der Standartwert 'white' genommen

  // die zuweisung der normalen Farbe hat *hier* die Wirkung, das sie den voreingestellten wert hat
  // und nicht den von außen zugewisenen da Klasse abgearbeitet wird bevor das elemet erzeugt/initialisiert wird
  // und somit bevor eine zuweisung von außen erfolgen kann
  // darum muss die Zuweisung z.B. in der funktion ngOnInit erfolgen
  @HostBinding('style.color') schriftfarbe =this.normaleSchriftFarbe;

  @HostListener('mouseenter') mausdrueber() {   // hostlistener ist eine art eventlistener
    this.schriftart='bolder';
    this.schriftfarbe=this.besondereSchriftFarbe;
  }
  @HostListener('mouseleave') mausverlassen() {
    this.schriftart='lighter';
    this.schriftfarbe=this.normaleSchriftFarbe;
  }

/*                      statt  ElementRef oder Renderer kann man HostBinding verwenden
  constructor(ele:ElementRef, renderer:Renderer) {
    for (let i=0; i<this.farbe.length*100; i++){
      setTimeout(() => {
        //native Element greift direkt auf das Dom Element zu
        // ele.nativeElement.style.backgroundColor=this.farbe[i%this.farbe.length];
        // renderer benutzt den Dom nicht direkt --> sicherer (funktioniert immer)
        renderer.setElementStyle(ele.nativeElement,'background-color',this.farbe[i%this.farbe.length])
      }, i*1000)
    }
  }
 */
  ngOnInit() {
    this.schriftfarbe =this.normaleSchriftFarbe; // nach init exsitiert das Element wircklich und kann von außen überschrieben werden

    // Das Array Farben wird von AppComponent imporiert
    for (let i=0; i<meinefarben.length*100; i++) {
      setTimeout(() => {
        this.hintergrundfarbe = meinefarben[i % meinefarben.length];
      }, i * 1000)
    }
  }
}
