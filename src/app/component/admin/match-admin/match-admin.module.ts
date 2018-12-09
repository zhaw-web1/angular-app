import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchAdminOverviewComponent } from './match-admin-overview/match-admin-overview.component';
import { MatchAdminEditComponent } from './match-admin-edit/match-admin-edit.component';
import {NgJsonEditorModule} from 'ang-jsoneditor';
import {MatchAdminRoutingModule} from './match-admin-routing.module';
import { MatchAdminFormComponent } from './match-admin-form/match-admin-form.component';
import { MatchAdminAddComponent } from './match-admin-add/match-admin-add.component';

@NgModule({
  declarations: [
    MatchAdminOverviewComponent,
    MatchAdminEditComponent,
    MatchAdminFormComponent,
    MatchAdminAddComponent
  ],
  imports: [
    CommonModule,
    MatchAdminRoutingModule,
    NgJsonEditorModule
  ]
})
export class MatchAdminModule { }
