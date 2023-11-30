import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { CoreModule } from '../core/core.type';

@NgModule({
  declarations: [SectionComponent],
  imports: [CommonModule],
  // exports: [SectionComponent],
})
export class SectionModule implements CoreModule {
  getComponent() {
    return SectionComponent;
  }
}
