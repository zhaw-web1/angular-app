import { Injectable } from '@angular/core';
import {Routes} from '@angular/router';
import {routes} from '../../component-routing.module';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  public getRoutes(): Routes {
    return routes;
  }

}
