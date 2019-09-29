import { Directive , ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  constructor(private elementRef : ElementRef){
    elementRef.nativeElement.style.background = 'pink';
    elementRef.nativeElement.style.color = 'white';
    elementRef.nativeElement.style.padding = '60px';
    elementRef.nativeElement.style.marginTop = '70px';
  }
@HostListener('mouseenter')
mouseEnter(){
this.elementRef.nativeElement.style.background = 'red';
this.elementRef.nativeElement.style.color = 'white';
}
@HostListener('mouseenter')
mouseLeave(){
this.elementRef.nativeElement.style.background = 'green';
this.elementRef.nativeElement.style.color = 'black';
}
}
