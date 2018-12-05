import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextFormat]'
})
export class TextFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }

}
