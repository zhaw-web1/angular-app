import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: 'match',
    loadChildren: './match/match.module#MatchModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
