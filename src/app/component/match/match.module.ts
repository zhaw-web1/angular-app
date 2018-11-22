import {NgModule} from '@angular/core';
import {MatchComponent} from './match.component';
import {MatchOverviewComponent} from './overview/match-overview.component';
import {MatchPreviewComponent} from './preview/match-preview.component';
import {MatchRoutingModule} from './match-routing.module';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    MatchRoutingModule
  ],
  declarations: [
    MatchComponent,
    MatchOverviewComponent,
    MatchPreviewComponent
  ]
})
export class MatchModule {
}
