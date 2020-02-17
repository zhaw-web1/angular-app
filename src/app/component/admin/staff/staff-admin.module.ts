import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffAdminOverviewComponent } from './staff-admin-overview/staff-admin-overview.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';
import {StaffAdminRoutingModule} from './staff-admin-routing.module';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { StaffAddComponent } from './staff-add/staff-add.component';
import {FormModule} from '../../form/form.module';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FileUploadService} from '../file-upload.service';

@NgModule({
  declarations: [
    StaffAdminOverviewComponent,
    StaffEditComponent,
    StaffFormComponent,
    StaffAddComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    StaffAdminRoutingModule,
    FormsModule,
    FormModule,
    AngularFireStorageModule
  ],
  providers: [FileUploadService]
})
export class StaffAdminModule { }
