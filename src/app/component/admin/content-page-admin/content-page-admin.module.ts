import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContentPageAdminRoutingModule} from './content-page-admin-routing.module';
import {OverviewComponent} from './overview/overview.component';
import {FormComponent} from './form/form.component';
import {EditComponent} from './edit/edit.component';
import {ContentPageModule} from '../../content-page/content-page.module';
import {FormModule} from '../../form/form.module';
import {FormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AdminModule} from '../admin.module';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

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
    AngularFireStorageModule,
    MatInputModule,
    FlexLayoutModule,
    MatDatepickerModule
  ]
})
export class ContentPageAdminModule { }
