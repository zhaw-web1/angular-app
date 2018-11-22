import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatchOverviewComponent} from './overview/match-overview.component';

const routes: Routes = [
  {
    path: '',
    component: MatchOverviewComponent
  },
  {
    path: ':page',
    component: MatchOverviewComponent
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
export class MatchRoutingModule {
}
