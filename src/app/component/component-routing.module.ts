import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../core/auth.guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {ImprintComponent} from './imprint/imprint.component';
import {DataPolicyComponent} from './data-policy/data-policy.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';

export const routes: Routes = [
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: 'match',
    loadChildren: './match/match.module#MatchModule'
  },
  {
    path: 'teams',
    loadChildren: './teams/teams.module#TeamsModule'
  },
  {
    path: 'staff',
    loadChildren: './staff/staff.module#StaffModule'
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'imprint',
    component: ImprintComponent
  },
  {
    path: 'data-policy',
    component: DataPolicyComponent
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page',
    loadChildren: './content-page/content-page.module#ContentPageModule'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
