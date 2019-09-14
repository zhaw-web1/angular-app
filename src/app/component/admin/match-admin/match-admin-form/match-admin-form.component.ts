import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Match} from '../../../match/models/match.model';
import {Game} from '../../../match/models/game.model';
import {MatchWinner} from '../../../match/models/match-winner.enum';
import {Round} from '../../../match/models/round.model';
import {FileUploadService} from '../../file-upload.service';
import {firestore} from 'firebase';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-match-admin-form',
  templateUrl: './match-admin-form.component.html',
  styleUrls: ['./match-admin-form.component.scss']
})
export class MatchAdminFormComponent implements OnInit {

  @Input()
  match: Match = {
    game: {} as Game,
    teams: {
      team1: {},
      team2: {}
    },
    rounds: [],
    finalScores: {},
    winner: MatchWinner.Tie,
    date: null,
    isTournament: false,
    tournamentName: '',
    tournamentLogo: '',
    usesNewImage: false,
  } as Match;

  @Input()
  showRounds = true;

  @Output()
  submit: EventEmitter<Match> = new EventEmitter();

  round = {
    scores: {}
  } as Round;

  constructor(private fileUploadService: FileUploadService, private storage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  addRound(round: Round) {
    this.match.rounds.push(round);
    this.round = {
      scores: {}
    } as Round;
    this._submit();
  }

  removeRound(round: Round) {
    if (!confirm('Are you sure you want to delete this round?')) return;
    const rounds = this.match.rounds;
    if (rounds.indexOf(round) > -1) {
      const index = rounds.indexOf(round);
      rounds.splice(index, 1);
    }
    this._submit();
  }

  _submit() {
    this.submit.emit(this.match);
  }

  getTimestamp(date: string) {
    return firestore.Timestamp.fromDate(new Date(date));
  }

  formatDate(date: Date): string | null {
    if (!date) return null;
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  uploadImage(event, team) {
    if (event.target.files && event.target.files.length) {
      const [file]: Blob[] = event.target.files;
      if (!this.match.id) {
        this.match.id = Math.random().toString(36).substr(2, 12);
      }

      const upload = this.fileUploadService.uploadImage(file, `matches/images/${this.match.id}/${team}/thumbnail`, file.type);

      const percentageChangeSubscription = upload.percentageChanges().subscribe(num => console.log(`upload: ${num}%`));

      upload.catch(err => {
        console.error(err);
        window.alert('Image could not be uploaded');
      })
        .then(() => {
          try {
            percentageChangeSubscription.unsubscribe();
          } catch (ex) {}
          const downloadUrl = this.storage.ref(`matches/images/${this.match.id}/${team}/thumbnail`).getDownloadURL();
          if (team === 0) {
            downloadUrl.subscribe((response) => {
              this.match.teams.team1.logoUrl = response;
            });
          } else if (team === 1 && !this.match.isTournament) {
            downloadUrl.subscribe((response) => {
              this.match.teams.team2.logoUrl = response;
            });
          } else if (team === 1 && this.match.isTournament) {
            downloadUrl.subscribe((response) => {
              this.match.tournamentLogo = response;
            });
          }

          this.match.usesNewImage = true;
          this._submit();
        });
    }
  }
}
