import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatchAdminEditComponent} from './match-admin-edit/match-admin-edit.component';
import {MatchAdminOverviewComponent} from './match-admin-overview/match-admin-overview.component';
import {MatchAdminAddComponent} from './match-admin-add/match-admin-add.component';
const routes: Routes = [
  {
    path: '',
    component: MatchAdminOverviewComponent
  },
  {
    path: 'add',
    component: MatchAdminAddComponent
  },
  {
    path: ':match',
    component: MatchAdminEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchAdminRoutingModule { }
