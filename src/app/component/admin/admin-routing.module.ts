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
    path: 'staff',
    loadChildren: './staff/staff-admin.module#StaffAdminModule'
  },
  {
    path: 'events',
    loadChildren: './events-admin/events-admin.module#EventsAdminModule'
  },
  {
    path: 'pages',
    loadChildren: './content-page-admin/content-page-admin.module#ContentPageAdminModule'
  },
  {
    path: '',
    component: AdminComponent
  },
  {
    path: '*',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
