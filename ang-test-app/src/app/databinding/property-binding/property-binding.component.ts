import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
      <p><span>mein name ist {{name}} </span> 
          er besteht aus vorname: {{vorname}} und  nachname: {{nachname}}
          <br>(eingefügt mit porpertybinding durch @import() von der Parent-Componente)
      </p>
  `,
  styles: [` 
    * {color:hotpink;}
    span { font-size: x-large; font-weight: bolder;
    }
  `]
})
export class PropertyBindingComponent implements OnChanges, OnDestroy {
  @Input()  vorname: string;
  @Input()  nachname: string;
  name: string;

  ngOnChanges(changes:SimpleChanges) {
    console.log("ngOnChanges()",changes);
    console.log("vorname gändert von ",changes['vorname'].previousValue," in ",changes['vorname'].currentValue);
    console.log("Nachname gändert von ",changes['nachname'].previousValue," in ",changes['nachname'].currentValue);
    this.name=this.vorname +" "+ this.nachname;
  }

  ngOnDestroy(): void {
    console.log("app-property-binding zersört")
  }

}
