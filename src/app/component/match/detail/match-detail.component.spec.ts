import {MatchDetailComponent} from './match-detail.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderService} from '../../header/header.service';
import {MatchService} from '../match.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatchServiceMock} from '../match.service.mock';
import {RouterTestingModule} from '@angular/router/testing';

describe('MatchDetailComponent', () => {
  let component: MatchDetailComponent;

  let fixture: ComponentFixture<MatchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDetailComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
      providers: [{
        provide: MatchService,
        useClass: MatchServiceMock
      }, HeaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
