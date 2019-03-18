import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderService} from '../../header/header.service';
import {NewsService} from '../news.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {NewsServiceMock} from '../news.service.mock';
import {RouterTestingModule} from '@angular/router/testing';
import {NewsPreviewComponent} from './news-preview.component';
import {InViewportModule} from '@ngx-starter-kit/ngx-utils';
import {AngularFireStorage} from '@angular/fire/storage';

describe('NewsPreviewComponent', () => {
  let component: NewsPreviewComponent;

  let fixture: ComponentFixture<NewsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPreviewComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule,
        InViewportModule],
      providers: [{
        provide: NewsService,
        useClass: NewsServiceMock,
      }, HeaderService,
        {
          provide: AngularFireStorage,
          useValue: {}
        }]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
