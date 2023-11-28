import {
  Component,
  Injector,
  ViewChild,
  ViewContainerRef,
  createNgModule,
} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  template: `<ng-template #container></ng-template>`
})
export class DynamicComponent {

  @ViewChild('container', { read: ViewContainerRef }) public container!: ViewContainerRef;

  constructor(private injector: Injector) {}

  ngOnDestroy() {
    if (this.container) {
      this.container.clear();
    }
  }

  async ngAfterViewInit() {
    if (!this.container) {
      return;
    }
    const constructor = await import('./section/section.module').then(
      m=> m.SectionModule
    );
    const moduleRef = createNgModule(constructor, this.injector);

    this.container.clear();
    // using "comp" property to get component
    this.container.createComponent(moduleRef.instance.comp, { ngModuleRef: moduleRef });
  }

}
