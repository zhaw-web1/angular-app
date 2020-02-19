import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsAdminOverviewComponent } from './events-admin-overview/events-admin-overview.component';
import { EventsAdminEditComponent } from './events-admin-edit/events-admin-edit.component';
import {EventsAdminRoutingModule} from './events-admin-routing.module';
import { EventsAdminFormComponent } from './events-admin-form/events-admin-form.component';
import { EventsAdminAddComponent } from './events-admin-add/events-admin-add.component';
import {FormModule} from '../../form/form.module';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    EventsAdminOverviewComponent,
    EventsAdminEditComponent,
    EventsAdminFormComponent,
    EventsAdminAddComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    EventsAdminRoutingModule,
    FormsModule,
    FormModule,
  ]
})
export class EventsAdminModule { }
