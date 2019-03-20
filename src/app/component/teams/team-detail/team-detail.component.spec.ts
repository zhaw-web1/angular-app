import {TeamDetailComponent} from './team-detail.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderService} from '../../header/header.service';
import {TeamsService} from '../teams.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TeamsServiceMock} from '../teams.service.mock';
import {RouterTestingModule} from '@angular/router/testing';

describe('TeamDetailComponent', () => {
  let component: TeamDetailComponent;

  let fixture: ComponentFixture<TeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDetailComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
      providers: [{
        provide: TeamsService,
        useClass: TeamsServiceMock
      }, HeaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
