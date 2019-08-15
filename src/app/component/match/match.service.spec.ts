import {MatchService} from './match.service';
import {Match} from './models/match.model';
import {MatchWinner} from './models/match-winner.enum';
import {DocumentSnapshot} from '@angular/fire/firestore';


describe('MatchService', () => {
  let service: MatchService;
  beforeEach(() => {
    service = new MatchService(null, null);
  });

  it('should be constructed', () => {
    expect(service).toBeTruthy();
  });

  it('should map an id and winner correctly', () => {
    const mapped = MatchService['mapIdAndWinnerToMatch']({
      data: () => ({
        finalScores: {
          team1: 4,
          team2: 1
        }
      } as Match),
      id: 'test'
    } as any);
    expect(mapped.id).toBe('test');
    expect(mapped.winner).toBe(MatchWinner.Team1);
  });

});
