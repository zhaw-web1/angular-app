import {Team} from './team.model';

export class Match {
  // Firebase ids can be strings, they just need to be unique.
  // This can be changed if we want to switch to a different type of db system.
  id: string;

  team1: Team;
  team1score: number;

  team2: Team;
  team2score: number;

  date: Date;
}
