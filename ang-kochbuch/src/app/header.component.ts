import { Component, OnInit } from '@angular/core';
import {RezepteService} from "./rezepte/rezepte.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private rezepteService: RezepteService) { }

  ngOnInit() {
  }
  speichern (){
    console.log(this.rezepteService.ausgabeListe());
    if(this.rezepteService.ausgabeListe().length == 0){
      console.log('nicht speichern, weil leer')
    }
    else {
      console.log('speichern')
      this.rezepteService.aufServerSpeichern().subscribe(
        daten => console.log('gesendete daten: ',daten),
        error => console.log('fehler: ',error)
      );
    }
  }
  laden (){
    this.rezepteService.vomServerLaden();
  }

}
