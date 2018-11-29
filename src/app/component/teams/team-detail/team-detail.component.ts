import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../header/header.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.headerService.setTitle('Teams');
    this.headerService.setImage('/assets/img/banners/desktop-header.png');
  }

}
