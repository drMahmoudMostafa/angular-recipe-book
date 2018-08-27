import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = true;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onclick() {
    if (this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show');
      this.elRef.nativeElement.querySelector('.dropdown-toggle').setAttribute('aria-expanded', this.isOpen);
      this.isOpen = !this.isOpen;
    } else {
      this.renderer.removeClass(this.elRef.nativeElement.querySelector('.dropdown-menu'), 'show');
      this.elRef.nativeElement.querySelector('.dropdown-toggle').setAttribute('aria-expanded', this.isOpen);
      this.isOpen = !this.isOpen;
    }
  }

}
