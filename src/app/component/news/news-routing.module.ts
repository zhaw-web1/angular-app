import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsOverviewComponent} from './overview/news-overview.component';

const routes: Routes = [
  {
    path: '',
    component: NewsOverviewComponent
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
