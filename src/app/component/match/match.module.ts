import {NgModule} from '@angular/core';
import {MatchComponent} from './match.component';
import {MatchOverviewComponent} from './overview/match-overview.component';
import {MatchPreviewComponent} from './preview/match-preview.component';
import {MatchRoutingModule} from './match-routing.module';
import {CommonModule} from '@angular/common';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { TeamThumbnailComponent } from './team-thumbnail/team-thumbnail.component';
import { MatchDetailComponent } from './detail/match-detail.component';


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
    TeamThumbnailComponent,
    MatchDetailComponent
  ]
})
export class MatchModule {
}
