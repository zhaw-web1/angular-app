import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Match} from '../../models/match.model';
import {MatchWinner} from '../../models/match-winner.enum';

@Component({
  selector: 'app-basic-stats',
  templateUrl: './basic-stats.component.html',
  styleUrls: ['./basic-stats.component.scss']
})
export class BasicStatsComponent implements OnInit {
  @Input()
  match: Match;

  @Input()
  isDetail: boolean;

  @Output()
  loadedImages = new EventEmitter<boolean>();

  loadedImage1 = false;
  loadedImage2 = false;

  MatchWinner;

  team1Name: string;
  team1Logo: string;
  team2Name: string;
  team2Logo: string;

  versusText: string;

  constructor() {
  }

  ngOnInit() {
    this.MatchWinner = MatchWinner;
    this.team1Name = this.match.teams.team1.name;
    this.team1Logo = this.match.teams.team1.logoUrl;
    if (this.match.isTournament) {
      this.team2Name = this.match.tournamentName;
      this.team2Logo = this.match.tournamentLogo;
      this.versusText = 'AT';
    } else {
      this.team2Name = this.match.teams.team2.name;
      this.team2Logo = this.match.teams.team2.logoUrl;
      this.versusText = 'VS';
    }
  }

  loadedImage(imageNumber: number) {
    if (imageNumber === 1) {
      this.loadedImage1 = true;
    } else {
      this.loadedImage2 = true;
    }

    if (this.loadedImage1 && this.loadedImage2) {
      this.loadedImages.emit(true);
    }
  }
}
