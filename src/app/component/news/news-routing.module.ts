import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  },
  {
    path: ':page',
    component: DetailComponent
  },
  {
    path: '*',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
