import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  template: `
    <h2>home Works!</h2>
    <p>Eigentlich wäre hier der Hauptinhalt der seite</p>
    <p *ngIf="token">die seite wurde mit {{token}} tockens übergeben</p>
    <p *ngIf="fragment">die seite wurde mit #{{fragment}} übergeben</p>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy{
  private subscr: Subscription;
  private fragSubscr: Subscription;
  token:number;
  fragment:string;

  constructor(private link: ActivatedRoute) { }

  ngOnInit() {
    //this.token = this.link.snapshot.queryParams['token'];
    //besser mit subscribe
    this.subscr = this.link.queryParams.subscribe( (p:Params) => this.token = p['token']);
    // das gleiche für fragmenete
    this.fragSubscr = this.link.fragment.subscribe( (f:string) => this.fragment = f);

  }

  ngOnDestroy(): void {
    //am ende wieder zerstören damit der speicher nicht belastet wird
    this.subscr.unsubscribe();
    this.fragSubscr.unsubscribe();
  }

}
