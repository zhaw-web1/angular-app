import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentModule} from './component/component.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './core/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BREAKPOINT} from '@angular/flex-layout';
import {AngularFireStorageModule} from '@angular/fire/storage';

const SOS_BREAKPOINTS = [{
  alias: 'sos.tablet',
  suffix: 'SosTablet',
  mediaQuery: 'screen and (min-width: 545px) and (max-width: 993px)',
  overlapping: false
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition(
      // this is just the name of our application
      // configured in angular-cli.json
      { appId: 'webapp' }
    ),
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentModule,
    AngularFireModule.initializeApp(environment.firebase, 'Scythe of Seraph'),
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [AngularFirestore, AuthService, {provide: BREAKPOINT, useValue: SOS_BREAKPOINTS, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
