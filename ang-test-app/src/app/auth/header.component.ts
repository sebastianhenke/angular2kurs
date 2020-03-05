import { Component } from "@angular/core";
import {AuthService} from "./auth.service";

@Component({
    selector: 'auth-header',
    template: `

        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="[{ outlets: { login: ['signup'] } }]">Sign Up</a></li>
                        <li><a [routerLink]="[{ outlets: { login: ['signin'] } }]">Sign In</a></li>
                        <li><a [routerLink]="[{ outlets: { login: ['protected'] } }]">Protected</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li *ngIf="displayLogout">
                          <a style="cursor: pointer" (click)="logout()">Logout</a>
                        </li>
                    </ul>
                </div><!-- /.container-fluid -->
            </nav>
        </header>
    `
})
export class HeaderComponent {
  displayLogout=false;

  constructor(private authService:AuthService) {
    this.authService.isAuth().subscribe(auth => this.displayLogout =auth );
  }

  logout(){
    this.authService.logout()

  }
}
