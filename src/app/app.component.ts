import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {
  }


  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(loggedIn => {
      if (loggedIn) {
        this.authService.isAdmin().subscribe(admin => {
          if (!admin) {
            this.authService.logout();
          }
        });
      }
    });
  }

}
