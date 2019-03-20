import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {InjectionToken, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {TeamBackArrowComponent} from './team-back-arrow.component';

describe('TeamBackArrowComponent', () => {
  let component: TeamBackArrowComponent;

  let fixture: ComponentFixture<TeamBackArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBackArrowComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBackArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
