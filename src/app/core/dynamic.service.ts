import {
  ComponentRef,
  EnvironmentInjector,
  Injectable,
  Injector,
  ViewContainerRef,
  createComponent,
  createNgModule,
  reflectComponentType,
} from '@angular/core';

import {
  CoreComponentConstructor,
  CoreModuleConstructor,
  DynamicTypeConstructor,
} from './core.type';

// ViewContainerRef source code: https://github.com/angular/angular/blob/16.2.x/packages/core/src/linker/view_container_ref.ts
@Injectable({ providedIn: 'root' })
export class DynamicService {
  constructor(private injector: Injector) {}

  loadComponent(
    constructor: DynamicTypeConstructor,
    container: ViewContainerRef
  ): ComponentRef<any> {
    let componentRef: ComponentRef<any>;
    if (reflectComponentType(constructor)) {
      const environmentInjector = this.injector.get(EnvironmentInjector);
      componentRef = createComponent(constructor as CoreComponentConstructor, {
        environmentInjector,
      });
      container.insert(componentRef.hostView);
      // ng16; same behaviour as below code.
      // container.createComponent(constructor as CoreComponentConstructor, {
      //   injector: this.injector,
      // });
    } else {
      const ngModuleRef = createNgModule(
        constructor as CoreModuleConstructor,
        this.injector
      );
      componentRef = container.createComponent(
        ngModuleRef.instance.getComponent(),
        {
          ngModuleRef,
        }
      );
    }
    return componentRef;
  }
}
