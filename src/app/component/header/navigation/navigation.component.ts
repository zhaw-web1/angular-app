import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {auth, User} from 'firebase';
import {AuthService} from '../../../core/auth.service';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isOpen = false;
  isMenuAnimated = false;
  currentRoute: string;
  isAuthorizedUser: Observable<boolean>;


  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof RoutesRecognized),
      map((event: RoutesRecognized) => event.state.root),
      map(snapshot => snapshot.firstChild.firstChild === null ? '' : snapshot.firstChild.firstChild.routeConfig.path)
    ).subscribe(currentRoute => this.currentRoute = currentRoute);
  }

  ngOnInit() {
    this.isAuthorizedUser = this.authService.isAuthorizedUser();
  }

  toggleNavigation(openNav?: boolean) {
    if (openNav === false) {
      this.isOpen = false;
    } else {
      this.isOpen = !this.isOpen;
    }
    const navigation = document.querySelector('.navigation');

    if (!this.isOpen) {
      this.isMenuAnimated = !this.isMenuAnimated;
      const self = this;
      setTimeout(function() { self.isMenuAnimated = !self.isMenuAnimated; }, 1000);
      enableBodyScroll(navigation);
    } else {
      disableBodyScroll(navigation);
    }
  }

}
