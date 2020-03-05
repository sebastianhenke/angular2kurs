import {RouterModule, Routes} from "@angular/router";
import {RezepteStartComponent} from "./rezepte-start.component";
import {RezeptebearbeitenComponent} from "./rezeptebearbeiten/rezeptebearbeiten.component";
import {RezeptdetailsComponent} from "./rezeptdetails/rezeptdetails.component";
import {RezepteComponent} from "./rezepte.component";

export const  rezeptRoutes: Routes =[
  {path: '',  component: RezepteComponent, children: [
      {path: '', component: RezepteStartComponent},
      {path: 'neu', component: RezeptebearbeitenComponent},
      {path: ':id', component: RezeptdetailsComponent},
      {path: ':id/bearbeiten', component: RezeptebearbeitenComponent}
    ]}

];
export const meinRezeptRouting = RouterModule.forChild(rezeptRoutes);
