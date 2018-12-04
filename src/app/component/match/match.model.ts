import Timestamp = firebase.firestore.Timestamp;
import {TeamStats} from './team-stats.model';
import {Game} from './game.model';

export class Match {
  // Firebase ids can be strings, they just need to be unique.
  // This can be changed if we want to switch to a different type of db system.
  id: string;
  stats: [TeamStats, TeamStats];
  game: Game;
  date: Timestamp;
}
