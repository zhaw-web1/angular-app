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
import { AdminPanelLoginComponent } from './footer/admin-panel-login/admin-panel-login.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InputFieldComponent } from './contact-form/input-field/input-field.component';
import { TextAreaComponent } from './contact-form/text-area/text-area.component';
import { PrivacyCheckboxComponent } from './contact-form/privacy-checkbox/privacy-checkbox.component';
import {FormsModule} from '@angular/forms';
import {NewsModule} from './news/news.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    AngularFireAuthModule,
    NewsModule,
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, SocialMediaListComponent,
    SocialMediaComponent, LinkedListComponent, HomeComponent, AdminPanelLoginComponent, ContactFormComponent,
    InputFieldComponent, TextAreaComponent, PrivacyCheckboxComponent, NotFoundComponent],
  exports: [HeaderComponent, FooterComponent, SocialMediaComponent],
  providers: [NavigationService]
})
export class ComponentModule { }
