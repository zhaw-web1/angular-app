import {MatchOverviewComponent} from './match-overview.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderService} from '../../header/header.service';
import {MatchService} from '../match.service';
import {InjectionToken, NO_ERRORS_SCHEMA} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatchServiceMock} from '../match.service.mock';

describe('MatchOverviewComponent', () => {
  let component: MatchOverviewComponent;

  let fixture: ComponentFixture<MatchOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchOverviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [  ],
      providers: [{
        provide: MatchService,
        useClass: MatchServiceMock
      }, HeaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
