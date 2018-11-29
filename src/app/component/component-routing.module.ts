import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../core/auth.guard';

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
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
