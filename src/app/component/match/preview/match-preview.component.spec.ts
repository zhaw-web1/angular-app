import {MatchPreviewComponent} from './match-preview.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {InjectionToken, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {ViewportModule} from '../../../viewport/viewport.module';

describe('MatchDetailComponent', () => {
  let component: MatchPreviewComponent;

  let fixture: ComponentFixture<MatchPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchPreviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule,
        ViewportModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
