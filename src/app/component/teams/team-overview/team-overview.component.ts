import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss']
})
export class TeamOverviewComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.setTitle('Teams');
    this.headerService.setImage('/assets/img/banners/desktop-header.png');
  }

}
