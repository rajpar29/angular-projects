import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnlessDirective]'
})
export class UnlessDirectiveDirective {

  @Input() set appUnlessDirective(condition: boolean) {
    if ( !condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {

     }
  }
  constructor( private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
