import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ComponentAComponent } from './component-a.component';

@NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [ComponentAComponent]
})
export class ModuleAModule { }
