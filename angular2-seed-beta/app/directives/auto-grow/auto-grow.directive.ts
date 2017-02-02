import {Directive, ElementRef, Renderer} from 'angular2/core';

// ElementRef gives access to the host element
// Renderer is a service used to modify that element

@Directive({
    selector: '[autoGrow]', // Note: tells browser to look for element that has attribute autoGrow  
    host: {  //Use host to subscribe to events raised from this element
        '(focus)': 'onFocus()', // () around focus tells angular to bind focus event to onFocus fn
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    // _el: ElementRef not needed to be done through usage of private keyword 

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
    }

    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
    }
}