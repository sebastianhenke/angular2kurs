//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home/home.component";
import {OtherComponent} from "./other/other.component";
import {meine_user_routes} from "./user/user.routes";
import {SigninComponent} from "./auth/unprotected/signin.component";
import {SignupComponent} from "./auth/unprotected/signup.component";
import {ProtectedComponent} from "./auth/protected/protected.component";
import {ProtectedGuard} from "./auth/protected/protected.guard";


const meine_routes: Routes = [
  //{path: '', redirectTo: '/home'},  // fürht zur Fehlermeldung:Unhandled Promise rejection: Invalid configuration of route
  // {path: '', component: HomeComponent, pathMatch: 'full'}, fürht zu einer Fehlermelung wenn <router-outlet> nicht erstellt wird
  //{path: ''},
  {path: 'signup', component: SignupComponent, outlet:'login'},
  {path: 'signin', component: SigninComponent, outlet:'login'},
  {path: 'protected', component: ProtectedComponent, outlet:'login', canActivate: [ProtectedGuard]},
  {path: 'home', component: HomeComponent },
  {path: 'other', component: OtherComponent },
  {path: 'user/:id', component: UserComponent, children: meine_user_routes },
  {path: '**',  redirectTo: "/"},   //wildcards: ** fängt alle undefinierten verzeichnisse ab und leitet sie auf die hauptseite (sollte immer am ende stehen)
];

export const meinRouting = RouterModule.forRoot(meine_routes);


/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class CompleteGuideDeRoutingModule { }
*/
