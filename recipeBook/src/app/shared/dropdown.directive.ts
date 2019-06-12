import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})


export class DropDownDirective {
   @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpn() {
        this.isOpen = !this.isOpen;
    }
}
