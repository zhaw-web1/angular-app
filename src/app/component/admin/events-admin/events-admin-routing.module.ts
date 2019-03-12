import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsAdminEditComponent} from './events-admin-edit/events-admin-edit.component';
import {EventsAdminOverviewComponent} from './events-admin-overview/events-admin-overview.component';
import {EventsAdminAddComponent} from './events-admin-add/events-admin-add.component';
const routes: Routes = [
  {
    path: '',
    component: EventsAdminOverviewComponent
  },
  {
    path: 'add',
    component: EventsAdminAddComponent
  },
  {
    path: ':event',
    component: EventsAdminEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsAdminRoutingModule { }
