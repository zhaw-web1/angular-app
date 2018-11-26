import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatchOverviewComponent} from './overview/match-overview.component';
import {MatchDetailComponent} from './detail/match-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MatchOverviewComponent
  },
  {
    path: ':id',
    component: MatchDetailComponent
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
