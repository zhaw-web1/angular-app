import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentRoutingModule} from './component-routing.module';
import {NewsModule} from './news/news.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    NewsModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class ComponentModule { }
