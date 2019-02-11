import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonComponent} from './person.component';
import {InViewportModule} from '@ngx-starter-kit/ngx-utils';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    InViewportModule
  ],
  exports: [PersonComponent]
})
export class PersonModule { }
