import {Team} from './team.model';

export class Match {
  id: number;

  team1: Team;
  team1score: number;

  team2: Team;
  team2score: number;

  date: Date;
}
