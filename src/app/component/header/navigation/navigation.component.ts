import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isOpen = false;
  isMenuAnimated = false;
  currentRoute: string;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof RoutesRecognized),
      map((event: RoutesRecognized) => event.state.root),
      map(snapshot => snapshot.firstChild.firstChild === null ? '' : snapshot.firstChild.firstChild.routeConfig.path)
    ).subscribe(currentRoute => this.currentRoute = currentRoute);
  }

  ngOnInit() {
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
