import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentModule} from './component/component.module';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './core/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BREAKPOINT} from '@angular/flex-layout';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

const SOS_BREAKPOINTS = [{
  alias: 'sos.tablet',
  suffix: 'SosTablet',
  mediaQuery: 'screen and (min-width: 545px) and (max-width: 993px)',
  overlapping: false
}, {
  alias: 'sos.mobile',
  suffix: 'SosMobile',
  mediaQuery: 'screen and (max-width: 544px)',
  overlapping: false
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentModule,
    AngularFireModule.initializeApp(environment.firebase, 'Scythe of Seraph'),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatMomentDateModule
  ],
  providers: [AngularFirestore, AuthService, {provide: BREAKPOINT, useValue: SOS_BREAKPOINTS, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'de-CH'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
