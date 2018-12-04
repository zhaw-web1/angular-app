import {NgModule} from '@angular/core';
import {MatchComponent} from './match.component';
import {MatchOverviewComponent} from './overview/match-overview.component';
import {MatchPreviewComponent} from './preview/match-preview.component';
import {MatchRoutingModule} from './match-routing.module';
import {CommonModule} from '@angular/common';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatchDetailComponent} from './detail/match-detail.component';
import {BasicStatsComponent} from './stats/basic-stats/basic-stats.component';
import {AdvancedStatsComponent} from './stats/advanced-stats/advanced-stats.component';


@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule,
    AngularFirestoreModule
  ],
  declarations: [
    MatchComponent,
    MatchOverviewComponent,
    MatchPreviewComponent,
    MatchDetailComponent,
    BasicStatsComponent,
    AdvancedStatsComponent
  ]
})
export class MatchModule {
}
