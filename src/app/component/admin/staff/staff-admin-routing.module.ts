import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StaffEditComponent} from './staff-edit/staff-edit.component';
import {StaffAdminOverviewComponent} from './staff-admin-overview/staff-admin-overview.component';
import {StaffAddComponent} from './staff-add/staff-add.component';
const routes: Routes = [
  {
    path: '',
    component: StaffAdminOverviewComponent
  },
  {
    path: 'add',
    component: StaffAddComponent
  },
  {
    path: ':staff',
    component: StaffEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffAdminRoutingModule { }
