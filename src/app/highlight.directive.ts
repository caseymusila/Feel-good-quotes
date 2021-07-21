import { Directive, ElementRef} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  highlightElement() {
    this.el.nativeElement.style.backgroundColor = 'black';
    this.el.nativeElement.style.color = 'black';
  }
  ngOnInit() {
    this.highlightElement();
  }
}
