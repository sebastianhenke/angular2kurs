import {Directive, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') istOffen=false;
  @HostListener('click') aufzu(){
    this.istOffen = !this.istOffen;
  }
}
