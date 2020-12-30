import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderes: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderes.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');
    this.backgroundColor = this.highlightColor;
    this.renderes.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderes.setStyle(this.elRef.nativeElement, 'background-color' , 'transparent');
    this.backgroundColor = this.defaultColor;
    this.renderes.setStyle(this.elRef.nativeElement, 'color', 'black');
  }

}
