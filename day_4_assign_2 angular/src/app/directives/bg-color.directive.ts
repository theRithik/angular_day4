import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  constructor(private elref: ElementRef) { }
    @HostListener('mouseenter')
  onMouseEnter(){
    this.elref.nativeElement.style.backgroundColor='red'
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.elref.nativeElement.style.backgroundColor='white'
  }
    
  }


