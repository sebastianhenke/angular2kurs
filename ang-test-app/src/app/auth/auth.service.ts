import {User} from "./user.interface";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

declare var firebase:any; //trick um firebase zu nutzen (firebase wird in der index.html importiert)

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signupUser(user:User){
    console.log('registiere',user);
    firebase.auth().createUserWithEmailAndPassword(user.email,user.password)  //die funktion kommt aus der firebase.js
      .catch (function (error) {console.log(error)});
    this.router.navigate([{ outlets: { login: ['signin'] } }]);
  }

  signinUser(user:User){
    console.log('login',user);
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)  //die funktion kommt aus der firebase.js
      .catch (function (error) {console.log(error)});
  }

  logout(){
    firebase.auth().signOut();
    //this.router.navigate(['signin']);
    this.router.navigate([{ outlets: { login: ['signin'] } }]);
  }

  isAuth() {
    const status = new Subject<boolean>();
    firebase.auth().onAuthStateChanged(function (user) {      //die funktion kommt aus der firebase.js
      if (user){ status.next(true); }                   //wenn der user exsitiert ist er eingelogt
      else {status.next(false);}
    });
    return status.asObservable();                           // gibt den status als observable zurück
  }
}
