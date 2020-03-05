import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {RezepteComponent} from "./rezepte.component";
import {RezeptlisteComponent} from "./rezeptliste/rezeptliste.component";
import {RezeptdetailsComponent} from "./rezeptdetails/rezeptdetails.component";
import {RezeptartikelComponent} from "./rezeptliste/rezeptartikel.component";
import {RezepteStartComponent} from "./rezepte-start.component";
import {RezeptebearbeitenComponent} from "./rezeptebearbeiten/rezeptebearbeiten.component";
import {meinRezeptRouting} from "./rezepte.routing";

@NgModule({
  declarations: [
    RezepteComponent,
    RezeptlisteComponent,
    RezeptdetailsComponent,
    RezeptartikelComponent,
    RezepteStartComponent,
    RezeptebearbeitenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    meinRezeptRouting
  ]
})
export class RezepteModule { }
