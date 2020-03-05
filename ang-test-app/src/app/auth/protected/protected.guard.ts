import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../auth.service";


// diese Guard beschützts den link zum gesicherten bereich und wird im routingmodul verwendet

@Injectable()
export class ProtectedGuard implements CanActivate{

  constructor(private authService : AuthService) {  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuth().first();          //first gibt nur die erste Änderung des observable aus
  }

}
