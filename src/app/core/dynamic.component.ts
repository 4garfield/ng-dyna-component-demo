import {
  Component,
  Inject,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import {
  Content,
  DYNAMIC_COMPONENT_TOKEN,
  DynamicComponentConfig,
} from './core.type';
import { DynamicService } from './dynamic.service';

@Component({
  selector: 'app-dynamic',
  template: `<ng-template #container></ng-template>`,
})
export class DynamicComponent {
  @Input() content!: Content;

  @ViewChild('container', { read: ViewContainerRef })
  public container!: ViewContainerRef;

  constructor(
    @Inject(DYNAMIC_COMPONENT_TOKEN)
    private dynamicComponentMap: DynamicComponentConfig,
    private dynamicService: DynamicService
  ) {}

  ngOnDestroy() {
    if (this.container) {
      this.container.clear();
    }
  }

  ngAfterViewInit() {
    if (!this.container) {
      return;
    }

    this.container.clear();
    Object.keys(this.dynamicComponentMap)
      .filter(key => key === this.content.id)
      .map(async key => {
        const compRef = this.dynamicService.loadComponent(
          await this.dynamicComponentMap[key],
          this.container
        );
        compRef.setInput('data', this.content.data);
        compRef.changeDetectorRef.detectChanges();
      });
  }
}
