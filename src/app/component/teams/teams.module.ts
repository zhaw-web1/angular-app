import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamOverviewComponent } from './team-overview/team-overview.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import {TeamsRoutingModule} from './teams-routing.module';
import { TeamPersonComponent } from './team-detail/team-person/team-person.component';

@NgModule({
  declarations: [TeamOverviewComponent, TeamDetailComponent, TeamPersonComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule { }
