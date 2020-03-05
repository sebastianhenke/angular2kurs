import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {UserService} from "./user.service";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>Dein user Account Id:{{userId}}
          <a class="btn btn-primary" [routerLink]="['details']">details</a>
          <a class="btn btn-primary" [routerLink]="['edit']">edit</a>
        </h2>
        <router-outlet></router-outlet>
        <button class="btn btn-primary" (click)="gehezu()">Zur Startseite mit tokens</button>
      </div>
    </div>
  `
})
export class UserComponent implements OnInit, OnChanges, OnDestroy {
  public userId: number;
  meineUserSubscription: Subscription;

  constructor(private userService:UserService, private meinRouter: Router, private linkPfad: ActivatedRoute) {
  }

  gehezu() {
    this.meinRouter.navigate(['/'], {queryParams:{'token':100},fragment:'ende'});
  }


  ngOnInit(): void {
    // funktioniert nur wenn die componete neu erstellt wird da nur dann ein snapshort erstellt wird
    //this.userId = this.linkPfad.snapshot.params['id'];

    // mit subscribe reagiert angular auf jeden veränderen parameter (id) und gibt ihn an this.userId
    this.meineUserSubscription = this.linkPfad.params.subscribe(
      (para: Params)=> {
        this.userId = para['id'];
        this.userService.aktutellerUser.next(this.userService.UserById(this.userId));
      }
    );

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    // wenn die componete aufgelöst wird, wird hiermit die subscirption beendet,
    // andernfalls läuft sie immer weiter bzw mehrere Instanzen davon und verstoüfen den Speicher
    this.meineUserSubscription.unsubscribe();
  }


}
