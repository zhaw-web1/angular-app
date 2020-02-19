import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {TeamsComponent} from './teams/teams.component';
import {FormsModule} from '@angular/forms';
import {TeamsModule} from '../teams/teams.module';
import {AdminComponent} from './admin.component';
import {TeamAddComponent} from './teams/team-add/team-add.component';
import {TeamEditComponent} from './teams/team-edit/team-edit.component';
import {TeamFormComponent} from './teams/team-form/team-form.component';
import {FormModule} from '../form/form.module';
import {PersonModule} from '../person/person.module';
import {MatIconModule} from '@angular/material/icon';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FileUploadService} from './file-upload.service';

@NgModule({
  declarations: [
    TeamsComponent,
    AdminComponent,
    TeamAddComponent, TeamEditComponent, TeamFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatIconModule,
    TeamsModule,
    FormModule,
    PersonModule,
    AngularFireStorageModule
  ],
  providers: [FileUploadService]
})
export class AdminModule { }
