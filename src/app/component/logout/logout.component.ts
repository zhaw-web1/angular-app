import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.isLoggedIn().subscribe(loggedIn => {
      if (loggedIn) this.auth.logout();
    });

  }

}
