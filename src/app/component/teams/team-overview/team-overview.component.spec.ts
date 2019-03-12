import {TeamOverviewComponent} from './team-overview.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderService} from '../../header/header.service';
import {InjectionToken, NO_ERRORS_SCHEMA} from '@angular/core';
import {TeamsService} from '../teams.service';
import {TeamsServiceMock} from '../teams.service.mock';

describe('TeamOverviewComponent', () => {
  let component: TeamOverviewComponent;

  let fixture: ComponentFixture<TeamOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamOverviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [  ],
      providers: [{
        provide: TeamsService,
        useClass: TeamsServiceMock
      }, HeaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
