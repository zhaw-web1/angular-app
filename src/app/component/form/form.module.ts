import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputFieldComponent} from './input-field/input-field.component';
import {PrivacyCheckboxComponent} from './privacy-checkbox/privacy-checkbox.component';
import {TextAreaComponent} from './text-area/text-area.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    PrivacyCheckboxComponent,
    TextAreaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputFieldComponent,
    PrivacyCheckboxComponent,
    TextAreaComponent
  ]
})
export class FormModule { }
