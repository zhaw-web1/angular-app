import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsOverviewComponent} from './overview/news-overview.component';
import {NewsDetailComponent} from './detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NewsOverviewComponent
  },
  {
    path: ':page',
    component: NewsDetailComponent
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
