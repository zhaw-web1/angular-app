import { Component, OnInit } from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isOpen = false;
  navPoints: string[] = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    const routes = this.navigationService.getRoutes();
    this.navPoints = routes.map(route => route.path);
  }

  toggleNavigation() {
    this.isOpen = !this.isOpen;
  }

}
