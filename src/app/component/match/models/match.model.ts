import {Game} from './game.model';
import {firestore} from 'firebase';
import {Team} from './team.model';
import {Round} from './round.model';
import {MatchWinner} from './match-winner.enum';

export class Match {
  public matchWinner = MatchWinner;

  id?: string;

  game: Game;
  teams: { team1: Team, team2: Team };
  rounds: Round[];
  finalScores: { team1: number, team2: number };
  winner: MatchWinner;
  date: firestore.Timestamp;
}
