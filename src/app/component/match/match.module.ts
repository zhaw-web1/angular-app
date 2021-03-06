import {NgModule} from '@angular/core';
import {MatchOverviewComponent} from './overview/match-overview.component';
import {MatchPreviewComponent} from './preview/match-preview.component';
import {MatchRoutingModule} from './match-routing.module';
import {CommonModule} from '@angular/common';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {MatchDetailComponent} from './detail/match-detail.component';
import {BasicStatsComponent} from './stats/basic-stats/basic-stats.component';
import {RoundStatsComponent} from './stats/round-stats/round-stats.component';
import {MatchBackArrowComponent} from './detail/match-back-arrow/match-back-arrow.component';
import {ViewportModule} from '../../viewport/viewport.module';


@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule,
    AngularFirestoreModule,
    ViewportModule,
    AngularFireStorageModule
  ],
  declarations: [
    MatchOverviewComponent,
    MatchPreviewComponent,
    MatchDetailComponent,
    BasicStatsComponent,
    RoundStatsComponent,
    MatchBackArrowComponent
  ],
  exports: [
    MatchPreviewComponent
  ]
})
export class MatchModule {
}
