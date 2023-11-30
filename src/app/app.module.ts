import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './core/dynamic.component';
import {
  DynamicComponentConfig,
  DYNAMIC_COMPONENT_TOKEN,
} from './core/core.type';

const DYNAMIC_COMPONENT_MAP: DynamicComponentConfig = {
  section: import('./section/section.module').then(m => m.SectionModule),
  part: import('./part/part.component').then(m => m.PartComponent),
};

@NgModule({
  declarations: [AppComponent, DynamicComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: DYNAMIC_COMPONENT_TOKEN,
      useValue: DYNAMIC_COMPONENT_MAP,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
