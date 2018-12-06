import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamsComponent} from './teams/teams.component';
import {TeamAddComponent} from './teams/team-add/team-add.component';
import {TeamEditComponent} from './teams/team-edit/team-edit.component';

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
    path: '',
    redirectTo: 'teams'
  },
  {
    path: '*',
    redirectTo: 'teams'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
