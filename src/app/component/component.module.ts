import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComponentRoutingModule} from './component-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavigationComponent} from './header/navigation/navigation.component';
import {SocialMediaListComponent} from './footer/social-media-list/social-media-list.component';
import {LinkedListComponent} from './footer/linked-list/linked-list.component';
import {SocialMediaComponent} from './social-media/social-media.component';
import {NavigationService} from './header/navigation/navigation.service';
import {HomeComponent} from './home/home.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AdminPanelLoginComponent} from './footer/admin-panel-login/admin-panel-login.component';
import {FormsModule} from '@angular/forms';
import {NewsModule} from './news/news.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {FormModule} from './form/form.module';
import {MatchModule} from './match/match.module';
import {ContactFormComponent} from './contact/contact-form/contact-form.component';
import {ContactComponent} from './contact/contact.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContentPageModule} from './content-page/content-page.module';
import {EventsModule} from './events/events.module';
import { ImprintComponent } from './imprint/imprint.component';
import { DataPolicyComponent } from './data-policy/data-policy.component';
import {FooterNavigationComponent} from './footer/navigation/navigation.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import {ContactService} from './contact/contact.service';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';
import {ViewportModule} from '../viewport/viewport.module';
import {LogoutComponent} from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    ContentPageModule,
    AngularFireAuthModule,
    MatchModule,
    NewsModule,
    AngularFireAuthModule,
    FormsModule,
    FormModule,
    EventsModule,
    FlexLayoutModule,
    HttpClientModule,
    ViewportModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, SocialMediaListComponent,
    SocialMediaComponent, LinkedListComponent, HomeComponent, AdminPanelLoginComponent, ContactFormComponent,
    AboutUsComponent, NotFoundComponent, ContactComponent, ContactFormComponent, ImprintComponent,
    DataPolicyComponent, FooterNavigationComponent, CookieBannerComponent, LoginComponent, LogoutComponent],
  exports: [HeaderComponent, FooterComponent, SocialMediaComponent, CookieBannerComponent],
  providers: [NavigationService, ContactService]
})
export class ComponentModule { }
