import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import {StaffService} from './staff.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {StaffComponent} from './staff.component';
import {PersonModule} from '../person/person.module';

@NgModule({
  declarations: [StaffComponent],
  imports: [
    CommonModule,
    StaffRoutingModule,
    AngularFirestoreModule,
    PersonModule
  ],
  providers: [StaffService]
})
export class StaffModule { }
