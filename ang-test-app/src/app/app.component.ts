import { Component } from '@angular/core';
import {User} from "./user/user.model";


export const meinefarben=['yellow', 'hotpink', 'red', 'blue','orange','violet','silver','black','gold','lime','aqua'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  daOderNicht =false;
  da=false;
  directives=false;
  otherCompo=false;
  siServiceCompo=false;
  routingCompo=false;
  bindingCompo=false;
  formCompo=false;
  pipesCompo=false;
  httpCompo=false;
  authent=false;
  ani=false;

  title = 'appComponent (approot)';
  compoFarben=meinefarben;
  auswahlparameter=0;


}



