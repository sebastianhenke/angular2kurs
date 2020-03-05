import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StartComponet} from "./start.componet";
import { HeaderComponent } from './header.component';
import { DropdownDirective } from "./dropdown.directive";
import { EinkaufslisteService } from "./einkaufsliste/einkaufsliste.service";
import { meinRouting } from './app.routing';
import {RezepteService} from "./rezepte/rezepte.service";


@NgModule({
  declarations: [
    AppComponent,
    StartComponet,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    meinRouting,
    HttpModule
  ],
  providers: [RezepteService,EinkaufslisteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
