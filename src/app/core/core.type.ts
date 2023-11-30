import { InjectionToken, Type } from '@angular/core';

export type CoreComponent = {};

export type CoreModule = {
  getComponent(): Type<any>;
};

export const DYNAMIC_COMPONENT_TOKEN =
  new InjectionToken<DynamicComponentConfig>('dynamic-components');

export interface DynamicComponentConfig {
  [name: string]: Promise<DynamicTypeConstructor>;
}

export type CoreModuleConstructor = Type<CoreModule>;
export type CoreComponentConstructor = Type<CoreComponent>;

export type DynamicTypeConstructor =
  | CoreModuleConstructor
  | CoreComponentConstructor;

export interface Content {
  id: string;
  data: {
    text: string;
  };
}
