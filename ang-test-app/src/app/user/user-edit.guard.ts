import {CanDeactivate} from "@angular/router";
import {Observable} from "rxjs";

export interface gesichertComponete {
  gesichert: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<any>{
  // kann nur mit componenten aufgerufen werden, die das interface implementiert haben
  canDeactivate(component: gesichertComponete): Observable<boolean> | boolean {
    return component.gesichert();
  }

}
