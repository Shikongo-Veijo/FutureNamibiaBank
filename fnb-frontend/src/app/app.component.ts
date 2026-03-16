import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fnb-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  template: `
    <fnb-navbar *ngIf="authService.isLoggedIn()"></fnb-navbar>
    <main [class.with-nav]="authService.isLoggedIn()">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      background-color: var(--fnb-gray-50);
    }
    main.with-nav {
      padding-top: 64px;
    }
  `]
})
export class AppComponent {
  constructor(public authService: AuthService) {}
}
