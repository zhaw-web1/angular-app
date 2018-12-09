import {Person} from '../person';

export interface Team {
  id: string;

  logoUrl: string;
  name: string;
  players: Person[];

}
