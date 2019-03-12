import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderService} from '../../header/header.service';
import {NewsService} from '../news.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NewsServiceMock} from '../news.service.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {NewsPreviewComponent} from './news-preview.component';

describe('NewsPreviewComponent', () => {
  let component: NewsPreviewComponent;

  let fixture: ComponentFixture<NewsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPreviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
      providers: [{
        provide: NewsService,
        useClass: NewsServiceMock
      }, HeaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPreviewComponent);
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
