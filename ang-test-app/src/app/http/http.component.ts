import { Component, OnInit } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styles: []
})
export class HttpComponent implements OnInit {
  alleUser : any = [];
  asyncAlleUser :any = this.http.abrufenUserDaten();

  constructor(private http:HttpService) { }

  ngOnInit() {}

  abrufen(){
    this.http.abrufenUserDaten().subscribe(
      daten => this.alleUser = daten,
      error => console.log('fehler: ',error),
      () => console.log('übertragung beendet')
    )
  }

  senden(name:string, email:string){
    this.http.sendeUserDaten({username:name, email:email}).subscribe(
      data => console.log('empfangene Daten: ',data),
      error => console.log('fehler: ',error),
      () => console.log('übertragung beendet')
    );
  }

}
