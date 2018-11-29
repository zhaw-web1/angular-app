import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import {TeamsRoutingModule} from './teams-routing.module';

@NgModule({
  declarations: [TeamOverviewComponent, TeamDetailComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
