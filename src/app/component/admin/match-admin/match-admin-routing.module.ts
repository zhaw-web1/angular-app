import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatchAdminEditComponent} from './match-admin-edit/match-admin-edit.component';
const routes: Routes = [
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
