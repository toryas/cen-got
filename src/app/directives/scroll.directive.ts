import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[scrollable]'
})
export class ScrollDirective {

  @Output() scrollPosition = new EventEmitter()
  
  constructor(public er: ElementRef) { }

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    try {

      const top = event.target.scrollTop
      const height = this.er.nativeElement.scrollHeight
      const offset = this.er.nativeElement.offsetHeight

      // emit bottom event
      if (top > height - offset - 1) {
        this.scrollPosition.emit('bottom')
      }

      // emit top event
      if (top === 0) {
        this.scrollPosition.emit('top')
      }

    } catch (err) {}
  }

}
