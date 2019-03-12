import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderService} from '../../../header/header.service';
import {MatchService} from '../../match.service';
import {InjectionToken, NO_ERRORS_SCHEMA} from '@angular/core';
import {MatchServiceMock} from '../../match.service.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {MatchBackArrowComponent} from './match-back-arrow.component';

describe('MatchBackArrowComponent', () => {
  let component: MatchBackArrowComponent;

  let fixture: ComponentFixture<MatchBackArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchBackArrowComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchBackArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
