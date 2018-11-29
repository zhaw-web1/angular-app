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

@NgModule({
  imports: [
    CommonModule,
    ComponentRoutingModule,
    AngularFireAuthModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, SocialMediaListComponent,
    SocialMediaComponent, LinkedListComponent, HomeComponent],
  exports: [HeaderComponent, FooterComponent, SocialMediaComponent],
  providers: [NavigationService]
})
export class ComponentModule { }
