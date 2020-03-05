import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[eigenesIf]'         //Selektor anpassen das er meisten mit app anfängt
})
export class EigenesIfDirective {
  @Input() set eigenesIf (wert:boolean){
    if (wert){
      this.view.createEmbeddedView(this.temp);
    }
    else {
      this.view.clear();
    }
  }

  constructor (private temp: TemplateRef<any>, private view: ViewContainerRef) {
    // im Gegensatz zum Tutorial gibt es ohne <any> die Fehlermeldung: TemplateRef<C>' requires 1 type argument(s).
    // der Constructor erzeugt automatisch die Argumente temp und view und füllt sie mit den entsprechenden Refferenzen
  }

}
