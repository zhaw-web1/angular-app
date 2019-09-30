import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonComponent} from './person.component';
import {ViewportModule} from '../../viewport/viewport.module';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    ViewportModule
  ],
  exports: [PersonComponent]
})
export class PersonModule { }
