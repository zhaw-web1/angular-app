import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchAdminOverviewComponent } from './match-admin-overview/match-admin-overview.component';
import { MatchAdminEditComponent } from './match-admin-edit/match-admin-edit.component';
import {MatchAdminRoutingModule} from './match-admin-routing.module';
import { MatchAdminFormComponent } from './match-admin-form/match-admin-form.component';
import { MatchAdminAddComponent } from './match-admin-add/match-admin-add.component';
import {FormModule} from '../../form/form.module';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';

@NgModule({
  declarations: [
    MatchAdminOverviewComponent,
    MatchAdminEditComponent,
    MatchAdminFormComponent,
    MatchAdminAddComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatchAdminRoutingModule,
    FormsModule,
    FormModule,
  ]
})
export class MatchAdminModule { }
