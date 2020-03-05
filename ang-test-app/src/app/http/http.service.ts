import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx'; //importiert operatoren zb. map

@Injectable()
export class HttpService {
  constructor(private http : Http) {
  }
  sendeUserDaten(user:any){
    const daten = JSON.stringify(user);
    const head = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://test-angular-http-4d38f.firebaseio.com/userdaten.json',daten,{headers:head});
  }
  abrufenUserDaten(){
    return this.http.get('https://test-angular-http-4d38f.firebaseio.com/userdaten.json').map(
      (daten:Response) => {
        const jsonDaten = daten.json();
        const ausgabeArray = [];
        for (let eintragId in jsonDaten){
          ausgabeArray.push(jsonDaten[eintragId])
        }
        return ausgabeArray;
      }
    );
  }

}
