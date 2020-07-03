import { Component, OnInit, ElementRef, AfterViewInit, Input, OnDestroy } from '@angular/core';
import MetisMenu from 'metismenujs';
import { IMMOptions } from 'metismenujs/dist/types/interface';

export type toggleType = 'true' | 'false';

@Component({
  selector: 'metis-menu, [metis-menu]',
  // inputs: ['toggle', 'parentTrigger', 'subMenu', 'triggerElement'],
  template: `<ng-content></ng-content>`,
  styles: []
})
export class MetismenuAngularComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() toggle: toggleType = 'true';
  @Input() parentTrigger = 'li';
  @Input() subMenu = 'ul';
  @Input() triggerElement = 'a';

  protected mm!: MetisMenu;
  mmOpts!: IMMOptions;

  constructor(private elem: ElementRef) { }

  ngAfterViewInit(): void {
    this.mmOpts = {
      toggle: (this.toggle.toLowerCase() === 'true'),
      parentTrigger: this.parentTrigger || 'li',
      subMenu: this.subMenu || 'ul',
      triggerElement: this.triggerElement || 'a',
    };

    this.mm = new MetisMenu(this.elem.nativeElement, this.mmOpts);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.mm.dispose();
  }

}
