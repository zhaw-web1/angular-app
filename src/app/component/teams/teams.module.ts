import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import {TeamsRoutingModule} from './teams-routing.module';
import {PersonModule} from '../person/person.module';
import { TeamBackArrowComponent } from './team-back-arrow/team-back-arrow.component';

@NgModule({
  declarations: [TeamOverviewComponent, TeamDetailComponent, TeamBackArrowComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    PersonModule
  ]
})
export class TeamsModule { }
