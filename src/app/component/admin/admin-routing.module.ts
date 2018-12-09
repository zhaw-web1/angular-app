import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamsComponent} from './teams/teams.component';
import {TeamAddComponent} from './teams/team-add/team-add.component';
import {TeamEditComponent} from './teams/team-edit/team-edit.component';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'teams/add',
    component: TeamAddComponent
  },
  {
    path: 'teams/:team',
    component: TeamEditComponent
  },
  {
    path: 'match',
    loadChildren: './match-admin/match-admin.module#MatchAdminModule'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    redirectTo: 'admin'
  },
  {
    path: '*',
    redirectTo: 'admin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
