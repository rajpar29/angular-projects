import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBetterHighlighter]'
})

export class BetterHighlighterDirective implements OnInit {
    @Input() defaultColor = 'transparent';
    @Input() highlightColor = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor = 'defaultColor';


    constructor(private renederer: Renderer2, private elRef: ElementRef) {

    }

    ngOnInit(): void {
        // this.renederer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renederer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.defaultColor;
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.renederer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.highlightColor;

    }

}
