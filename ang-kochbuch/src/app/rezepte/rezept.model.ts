import {Zutaten} from "../shared/zutaten.model";

export class Rezept {
  kurzinfo:string;

  constructor (
    public titel:string,
    public beschreibung:string,
    public bildlink:string,
    public zutaten: Zutaten[]
    ) {
    this.kurzinfo = this.beschreibung.substr(0,35)+' ...';
  }
}
