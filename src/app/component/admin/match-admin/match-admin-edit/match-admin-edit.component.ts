import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../../../match/match.service';
import {Match} from '../../../match/models/match.model';
import {JsonEditorOptions} from 'ang-jsoneditor';

@Component({
  selector: 'app-match-admin-edit',
  templateUrl: './match-admin-edit.component.html',
  styleUrls: ['./match-admin-edit.component.scss']
})
export class MatchAdminEditComponent implements OnInit {
  match: Match = {} as Match;
  editorOptions: JsonEditorOptions;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchService: MatchService
  ) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view'];
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('match');

    this.matchService.getMatch(id).subscribe(match => this.match = match)
  }

}
