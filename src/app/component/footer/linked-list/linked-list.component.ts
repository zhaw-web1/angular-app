import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth as fbAuth, User} from 'firebase';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.scss']
})
export class LinkedListComponent implements OnInit {
  private authState: Observable<User | null>;

  constructor(
    private auth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.authState = this.auth.authState;
  }

  login() {
    this.auth.auth.signInWithRedirect(new fbAuth.GoogleAuthProvider());
  }

  logout() {
    this.auth.auth.signOut();
  }
}
