import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyRedDirective]'
})
export class MyRedDirectiveDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.style.color = 'red';
    elRef.nativeElement.style.backgroundColor = 'aqua';
  }

}
