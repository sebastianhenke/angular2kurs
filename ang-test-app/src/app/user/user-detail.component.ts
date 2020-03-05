import {Component, OnDestroy, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {Subscription} from "rxjs";
import {User} from "./user.model";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <p>Details zu deinem Account</p>
        <table>
          <tr><td>id:</td><td>{{user?.id}}</td></tr>
          <tr><td>name:</td><td>{{user?.name}}</td></tr>
        </table>
      </div>
    </div>

  `
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user : User ;
  meineUserSubscription: Subscription;

  constructor(private userService:UserService, ) {  }

  ngOnInit(): void {
    this.meineUserSubscription =this.userService.aktutellerUser.subscribe((u:User)=> this.user = u);
  }

  ngOnDestroy(): void {
    this.meineUserSubscription.unsubscribe();
  }
}
