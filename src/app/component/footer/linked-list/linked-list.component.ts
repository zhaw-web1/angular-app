import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent implements OnInit {
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
