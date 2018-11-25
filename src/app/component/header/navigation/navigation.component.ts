import { Component, OnInit } from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isOpen = false;
  isMenuAnimated = false;
  navPoints: string[] = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    const routes = this.navigationService.getRoutes();
    this.navPoints = routes.map(route => route.path);
  }

  toggleNavigation() {
    this.isOpen = !this.isOpen;

    if (!this.isOpen) {
      this.isMenuAnimated = !this.isMenuAnimated;
      const self = this;
      setTimeout(function() { self.isMenuAnimated = !self.isMenuAnimated; }, 1000);
    }
  }

}
