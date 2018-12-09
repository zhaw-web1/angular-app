import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../core/auth.guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';

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
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule'
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
