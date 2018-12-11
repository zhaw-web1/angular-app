import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputFieldComponent} from './input-field/input-field.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {TextAreaComponent} from './text-area/text-area.component';
import { InputRefDirective } from './input-ref.directive';

@NgModule({
  declarations: [
    InputFieldComponent,
    CheckboxComponent,
    TextAreaComponent,
    InputRefDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputFieldComponent,
    CheckboxComponent,
    TextAreaComponent,
    InputRefDirective
  ]
})
export class FormModule { }
