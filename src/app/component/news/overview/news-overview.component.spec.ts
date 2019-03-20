import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderService} from '../../header/header.service';
import {NewsService} from '../news.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NewsServiceMock} from '../news.service.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {NewsOverviewComponent} from './news-overview.component';

describe('NewsOverviewComponent', () => {
  let component: NewsOverviewComponent;

  let fixture: ComponentFixture<NewsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsOverviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
      providers: [{
        provide: NewsService,
        useClass: NewsServiceMock
      }, HeaderService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
