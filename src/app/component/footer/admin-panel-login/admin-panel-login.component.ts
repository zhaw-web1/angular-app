import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-panel-login',
  templateUrl: './admin-panel-login.component.html',
  styleUrls: ['./admin-panel-login.component.scss']
})
export class AdminPanelLoginComponent implements OnInit {
  isLoggedIn: Observable<boolean>;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
