import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {gesichertComponete} from "./user-edit.guard";
import {UserService} from "./user.service";
import {User} from "./user.model";
import {Subscription} from "rxjs";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <p>Möchtest du deinen Account bearbeiten?</p>
        <table>
          <tr><td>id:</td><td>{{user?.id}}</td></tr>
          <tr>
            <td>name:</td>
            <td><input type="text" [value]="user?.name" #name (keyup)="geaendert()"></td></tr>
        </table>
        <button (click)="speichern(user?.id, name?.value)">speichern</button>
      </div>
    </div>
  `
})
export class UserEditComponent implements OnInit, OnDestroy, gesichertComponete {
  datenGesichert: boolean = true;
  user : User ;
  meineUserSubscription: Subscription;

  constructor(private userService:UserService, ) {  }

  ngOnInit(): void {
    this.meineUserSubscription =this.userService.aktutellerUser.subscribe((u:User)=> this.user = u);
  }

  ngOnDestroy(): void {
    this.meineUserSubscription.unsubscribe();
  }

  geaendert(){
    this.datenGesichert = false;
  }

  speichern(id:number, name:string){
    this.userService.speichern(id, name);
    this.datenGesichert = true;
  }

  gesichert(){
    return !this.datenGesichert ? confirm('willst du ohne speichern weiter?') :true;
  }

}

