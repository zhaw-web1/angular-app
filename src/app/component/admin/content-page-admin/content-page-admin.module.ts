import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentPageAdminRoutingModule} from './content-page-admin-routing.module';
import {OverviewComponent} from './overview/overview.component';
import {FormComponent} from './form/form.component';
import {EditComponent} from './edit/edit.component';
import {ContentPageModule} from '../../content-page/content-page.module';
import {FormModule} from '../../form/form.module';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [OverviewComponent, FormComponent, EditComponent],
  imports: [
    CommonModule,
    ContentPageAdminRoutingModule,
    ContentPageModule,
    FormModule,
    DragDropModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class ContentPageAdminModule { }
