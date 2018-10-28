import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentRoutingModule} from './component-routing.module';
import {NewsModule} from './news/news.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    NewsModule
  ],
  declarations: []
})
export class ComponentModule { }
