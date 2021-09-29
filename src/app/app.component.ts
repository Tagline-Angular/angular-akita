import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SessionService } from './session/state/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'akita';
  isLoginScreen: boolean = false;

  constructor(private sessionService: SessionService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/' || event.url === '/auth/login')
          this.isLoginScreen = true;
        else this.isLoginScreen = false;
      }
    });
  }

  logout(): void {
    this.sessionService.reset();
    this.router.navigate(['']);
  }
}
