import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentPageAdminRoutingModule} from './content-page-admin-routing.module';
import {OverviewComponent} from './overview/overview.component';
import {FormComponent} from './form/form.component';
import {EditComponent} from './edit/edit.component';
import {ContentPageModule} from '../../content-page/content-page.module';
import {FormModule} from '../../form/form.module';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatIconModule, MatSelectModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AdminModule} from '../admin.module';
import {AngularFireStorageModule} from '@angular/fire/storage';

@NgModule({
  declarations: [OverviewComponent, FormComponent, EditComponent],
  imports: [
    CommonModule,
    ContentPageAdminRoutingModule,
    AdminModule,
    ContentPageModule,
    FormModule,
    DragDropModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    AngularFireStorageModule
  ]
})
export class ContentPageAdminModule { }
