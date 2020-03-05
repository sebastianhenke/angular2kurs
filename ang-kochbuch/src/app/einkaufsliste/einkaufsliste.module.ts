import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {EinkaufslisteComponent} from "./einkaufsliste.component";
import {EinkaufslisteHinzufuegenComponent} from "./einkaufsliste-hinzufuegen.component";
import {meinEinkaufslisteRouting} from "./einkaufsliste..routing";


@NgModule({
  declarations: [
    EinkaufslisteComponent,
    EinkaufslisteHinzufuegenComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    meinEinkaufslisteRouting
  ]
})
export class EinkaufslisteModule {
}
