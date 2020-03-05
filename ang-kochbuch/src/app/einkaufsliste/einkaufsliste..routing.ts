import {RouterModule, Routes} from "@angular/router";
import {EinkaufslisteComponent} from "./einkaufsliste.component";

export const  einkaufslisteRoutes: Routes =[
  {path: '',  component: EinkaufslisteComponent}
];
export const meinEinkaufslisteRouting = RouterModule.forChild(einkaufslisteRoutes);
