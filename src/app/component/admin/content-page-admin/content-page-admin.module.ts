import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPageAdminRoutingModule } from './content-page-admin-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [OverviewComponent, FormComponent, EditComponent],
  imports: [
    CommonModule,
    ContentPageAdminRoutingModule
  ]
})
export class ContentPageAdminModule { }
