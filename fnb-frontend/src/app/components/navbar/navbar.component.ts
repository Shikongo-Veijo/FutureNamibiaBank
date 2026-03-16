import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fnb-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="brand-logo">
          <span class="logo-icon">FNB</span>
        </div>
        <div class="brand-text">
          <span class="brand-name">Future Namibia Bank</span>
          <span class="brand-slogan">Payments Made Better</span>
        </div>
      </div>

      <ul class="navbar-nav">
        <li>
          <a routerLink="/dashboard" routerLinkActive="active">
            <span class="material-icons">dashboard</span>
            Dashboard
          </a>
        </li>
        <li>
          <a routerLink="/accounts" routerLinkActive="active">
            <span class="material-icons">account_balance</span>
            Accounts
          </a>
        </li>
        <li>
          <a routerLink="/transactions" routerLinkActive="active">
            <span class="material-icons">swap_horiz</span>
            Transactions
          </a>
        </li>
        <li>
          <a routerLink="/p2p-payment" routerLinkActive="active">
            <span class="material-icons">send</span>
            P2P Payment
          </a>
        </li>
      </ul>

      <div class="navbar-user" *ngIf="currentUser">
        <div class="user-avatar">{{ getInitials() }}</div>
        <div class="user-info">
          <span class="user-name">{{ currentUser.firstName }} {{ currentUser.lastName }}</span>
          <span class="user-role">{{ currentUser.role }}</span>
        </div>
        <button class="btn-logout" (click)="logout()" title="Logout">
          <span class="material-icons">logout</span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 64px;
      background: var(--fnb-white);
      border-bottom: 1px solid var(--fnb-gray-200);
      display: flex;
      align-items: center;
      padding: 0 24px;
      gap: 32px;
      z-index: 1000;
      box-shadow: var(--fnb-shadow-sm);
    }

    .navbar-brand {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 220px;
    }

    .brand-logo {
      width: 40px;
      height: 40px;
      background: var(--fnb-primary);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-icon {
      color: white;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-size: 14px;
      font-weight: 700;
      color: var(--fnb-gray-800);
      line-height: 1.2;
    }

    .brand-slogan {
      font-size: 11px;
      color: var(--fnb-primary);
      font-style: italic;
    }

    .navbar-nav {
      display: flex;
      list-style: none;
      gap: 4px;
      flex: 1;
    }

    .navbar-nav a {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: var(--fnb-radius);
      color: var(--fnb-gray-600);
      font-weight: 500;
      font-size: 14px;
      transition: var(--fnb-transition);
    }

    .navbar-nav a:hover {
      background: var(--fnb-primary-pale);
      color: var(--fnb-primary);
    }

    .navbar-nav a.active {
      background: var(--fnb-primary-pale);
      color: var(--fnb-primary);
    }

    .navbar-nav .material-icons {
      font-size: 18px;
    }

    .navbar-user {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: auto;
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      background: var(--fnb-secondary);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      font-weight: 700;
      color: var(--fnb-gray-700);
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    .user-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--fnb-gray-800);
      line-height: 1.2;
    }

    .user-role {
      font-size: 11px;
      color: var(--fnb-gray-500);
      text-transform: capitalize;
    }

    .btn-logout {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--fnb-gray-400);
      padding: 6px;
      border-radius: var(--fnb-radius);
      display: flex;
      transition: var(--fnb-transition);
    }

    .btn-logout:hover {
      background: rgba(239, 68, 68, 0.1);
      color: var(--fnb-danger);
    }

    @media (max-width: 768px) {
      .brand-text, .user-info { display: none; }
      .navbar { padding: 0 16px; gap: 16px; }
    }
  `]
})
export class NavbarComponent {
  currentUser = this.authService.getCurrentUser();

  constructor(private authService: AuthService, private router: Router) {}

  getInitials(): string {
    const user = this.currentUser;
    if (!user) return '?';
    return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
