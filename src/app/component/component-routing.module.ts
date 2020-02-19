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
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./match/match.module').then(m => m.MatchModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)
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
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
    loadChildren: () => import('./content-page/content-page.module').then(m => m.ContentPageModule)
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
