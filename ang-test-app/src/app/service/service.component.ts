import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
    selector: 'si-service',
    template: `
    <si-cmp-a></si-cmp-a>
    <si-cmp-b></si-cmp-b>
  `,
  // der DataService wird hier eingestellt damit alle Töchter Componenten die gleiche Instanz nutzen
  providers:[DataService]
})
export class ServiceComponent {
}
