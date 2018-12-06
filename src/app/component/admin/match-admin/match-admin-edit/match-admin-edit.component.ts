import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../../../match/match.service';
import {Match} from '../../../match/models/match.model';
import {JsonEditorOptions} from 'ang-jsoneditor';
import {HeaderService} from '../../../header/header.service';

@Component({
  selector: 'app-match-admin-edit',
  templateUrl: './match-admin-edit.component.html',
  styleUrls: ['./match-admin-edit.component.scss']
})
export class MatchAdminEditComponent implements OnInit {
  match: Match = {} as Match;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchService: MatchService,
    private header: HeaderService
  ) {
  }

  ngOnInit() {
    this.header.setTitle('Admin - Edit Match');
    this.header.setImage('/assets/img/banners/desktop-header.png');
    const id = this.route.snapshot.paramMap.get('match');

    this.matchService.getMatch(id).subscribe(match => this.match = match)
  }

}
