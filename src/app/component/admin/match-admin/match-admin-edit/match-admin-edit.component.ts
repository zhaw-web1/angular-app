import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../../../match/match.service';
import {Match} from '../../../match/models/match.model';
import {HeaderService} from '../../../header/header.service';

@Component({
  selector: 'app-match-admin-edit',
  templateUrl: './match-admin-edit.component.html',
  styleUrls: ['./match-admin-edit.component.scss']
})
export class MatchAdminEditComponent implements OnInit {
  match: Match = {} as Match;
  loading = true;
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchService: MatchService,
    private header: HeaderService
  ) {
  }

  ngOnInit() {
    this.header.setTitle('Admin - Edit Match');
    this.header.setImage('https://firebasestorage.googleapis.com/v0/b/scythe-of-seraph-e7412.appspot.com' +
      '/o/header-images%2Fdesktop-header.jpg?alt=media&token=787b4b13-50a4-4a15-84e0-eb7f11d6d5d8');
    this.id = this.route.snapshot.paramMap.get('match');
    this.matchService.getMatch(this.id).subscribe(match => {
      this.match = match;
      this.loading = false;
    });
  }

  submit() {
    this.loading = true;
    this.matchService.updateMatch(this.id, this.match).then(() => {
      this.loading = false;
    });
  }
}
