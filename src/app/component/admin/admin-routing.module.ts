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
    loadChildren: () => import('./match-admin/match-admin.module').then(m => m.MatchAdminModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff-admin.module').then(m => m.StaffAdminModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events-admin/events-admin.module').then(m => m.EventsAdminModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./content-page-admin/content-page-admin.module').then(m => m.ContentPageAdminModule)
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
