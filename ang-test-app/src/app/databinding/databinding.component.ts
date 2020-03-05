import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  einString = 'ich bin ein string';
  eineNummer = 100;
  klasseAnzeigen = false;
  hintergundfarbe = 'lightpink';
  name1='max';
  name2='power';
  propAnzeigen=true;
  @ViewChild('divtext') textfeld;         // greift auf ein DOM Element zu (Objekt ist ein ElementRef)
  @ContentChild('übergabetext') ügText;   // greift auf ein DOM Element zu das mit <ng-content> übergeben wurde
  showLiefcycle = false;

  constructor() {
    setTimeout(() => {
      this.eineNummer += 200;
      this.klasseAnzeigen = true;
      this.hintergundfarbe = 'hotpink';

      this.textfeld.nativeElement.innerText = this.textfeld.nativeElement.innerText + " (3sek später)";
      this.ügText.nativeElement.innerText = this.ügText.nativeElement.innerText + " (3sek später)";
    }, 3000)
  }

  klickmich(ev: Event) {
    console.log(ev);
    if (this.klasseAnzeigen) {      this.klasseAnzeigen = false;    }
    else {      this.klasseAnzeigen = true;    }
  }
  ngOnInit()    {    if (this.showLiefcycle) {      console.log("ngOnInit()");    }  }
  ngOnChanges(changes:SimpleChanges) {    if (this.showLiefcycle) {      console.log("ngOnChanges()",changes);    }  }
  ngAfterContentChecked(): void {    if (this.showLiefcycle) {      console.log("ngAfterContentChecked()");    }  }
  ngAfterContentInit(): void {    if (this.showLiefcycle) {      console.log("ngAfterContentInit()");    }  }
  ngAfterViewChecked(): void {    if (this.showLiefcycle) {      console.log("ngAfterViewChecked()");    }  }
  ngAfterViewInit(): void {    if (this.showLiefcycle) {      console.log("ngAfterViewInit()");    }  }
  ngDoCheck(): void {    if (this.showLiefcycle) {      console.log("ngDoCheck)");    }  }
  ngOnDestroy(): void {    if (this.showLiefcycle) {      console.log("ngOnDestroy()");    }  }
}
