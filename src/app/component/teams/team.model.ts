import {Player} from './player.model';

export interface Team {
  id: string;

  logoUrl: string;
  name: string;
  players: Player[];

}
