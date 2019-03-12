import {MatchPreviewComponent} from './match-preview.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {InjectionToken, NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('MatchDetailComponent', () => {
  let component: MatchPreviewComponent;

  let fixture: ComponentFixture<MatchPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchPreviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    // TODO: help this fails & i'm afraid to break something if i change it
    //
    //  error message:
    //  Binding to event property 'oneTime' is disallowed for security reasons, please use (eTime)=...
    // 	If 'oneTime' is a directive input, make sure the directive is imported by the current module. ("o-bg': isDetail, 'loaded': loaded, 'animate': animate}" ngxInViewport (inViewport)="animate = true" [ERROR ->][oneTime]="true">
    // 	    <div class="title-container">
    // 	      <span class="title">{{match.game.name}}</sp"): ng:///DynamicTestModule/MatchPreviewComponent.html@1:143
  });
});
