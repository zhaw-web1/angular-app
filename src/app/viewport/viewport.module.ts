import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SosViewportDirective } from './sos-viewport.directive';
import {ViewportService} from './viewport.service';

@NgModule({
  declarations: [SosViewportDirective],
  exports: [SosViewportDirective],
  imports: [
    CommonModule
  ],
  providers: [
    ViewportService
  ]
})
export class ViewportModule { }
