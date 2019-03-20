import {HomeComponent} from './home.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {AngularFirestore} from '@angular/fire/firestore';
import SpyObj = jasmine.SpyObj;
import {of} from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;

  let fixture: ComponentFixture<HomeComponent>;

  let fs: SpyObj<AngularFirestore>;


  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('AngularFirestore', ['collection']);
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ RouterTestingModule ],
      providers: [ { provide: AngularFirestore, useValue: spy} ]
    }).compileComponents();
    fs = TestBed.get(AngularFirestore);
    fs.collection.and.returnValue({
      get: () => of({}),
      snapshotChanges: () => of({})
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
