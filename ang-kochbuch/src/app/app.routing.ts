import {RouterModule, Routes} from "@angular/router";
import {EinkaufslisteComponent} from "./einkaufsliste/einkaufsliste.component";
import {StartComponet} from "./start.componet";

const meineRoutes :Routes = [
  //{path: '', redirectTo: '/rezepte', pathMatch: 'full'}, // pathMatch: 'full' bewirkt das nur wenn der ganze path dem angebenen path entspricht die Umleitung erfolgen soll
  {path: '', component: StartComponet},
  {path: 'start', component: StartComponet},

  //{path: '**',  redirectTo: "/rezepte"},   //wildcards: ** fängt alle undefinierten verzeichnisse ab und leitet sie auf die hauptseite (sollte immer am ende stehen)
  //{path: 'rezepte', component: RezepteComponent, children: rezeptRoutes},
  {path: 'rezepte',loadChildren: 'app/rezepte/rezepte.module#RezepteModule'}, // für Lazy Loading

  //{path: 'einkaufsliste', component: EinkaufslisteComponent}
  {path: 'einkaufsliste',loadChildren: 'app/einkaufsliste/einkaufsliste.module#EinkaufslisteModule'}, // für Lazy Loading
];

export const meinRouting = RouterModule.forRoot(meineRoutes);
