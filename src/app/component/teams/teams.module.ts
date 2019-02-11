import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import {TeamsRoutingModule} from './teams-routing.module';
import {PersonModule} from '../person/person.module';
import { TeamBackArrowComponent } from './team-back-arrow/team-back-arrow.component';
import { TeamPreviewComponent } from './team-overview/team-preview/team-preview.component';
import {InViewportModule} from '@ngx-starter-kit/ngx-utils';

@NgModule({
  declarations: [TeamOverviewComponent, TeamDetailComponent, TeamBackArrowComponent, TeamPreviewComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    PersonModule,
    InViewportModule
  ]
})
export class TeamsModule { }
