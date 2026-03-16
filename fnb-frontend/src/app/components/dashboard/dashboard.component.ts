import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { Account, Transaction } from '../../models/account.model';

@Component({
  selector: 'fnb-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="dashboard">
      <div class="dashboard-header">
        <div>
          <h1>Good {{ greeting }}, {{ user?.firstName }}!</h1>
          <p class="text-muted">Here's your financial overview</p>
        </div>
        <div class="header-actions">
          <a routerLink="/transactions" class="btn btn-primary">
            <span class="material-icons">swap_horiz</span>
            New Transfer
          </a>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="summary-grid">
        <div class="summary-card primary">
          <div class="summary-icon">
            <span class="material-icons">account_balance_wallet</span>
          </div>
          <div class="summary-info">
            <p class="summary-label">Total Balance</p>
            <p class="summary-value">{{ getTotalBalance() | currency:'NAD ':'symbol':'1.2-2' }}</p>
          </div>
        </div>

        <div class="summary-card secondary">
          <div class="summary-icon">
            <span class="material-icons">credit_card</span>
          </div>
          <div class="summary-info">
            <p class="summary-label">Active Accounts</p>
            <p class="summary-value">{{ accounts.length }}</p>
          </div>
        </div>

        <div class="summary-card success">
          <div class="summary-icon">
            <span class="material-icons">trending_up</span>
          </div>
          <div class="summary-info">
            <p class="summary-label">Completed Transactions</p>
            <p class="summary-value">{{ recentTransactions.length }}</p>
          </div>
        </div>

        <div class="summary-card info">
          <div class="summary-icon">
            <span class="material-icons">account_circle</span>
          </div>
          <div class="summary-info">
            <p class="summary-label">Account Status</p>
            <p class="summary-value">Active</p>
          </div>
        </div>
      </div>

      <div class="dashboard-body">
        <!-- Accounts Section -->
        <div class="section accounts-section">
          <div class="section-header">
            <h2>My Accounts</h2>
            <a routerLink="/accounts" class="btn btn-outline btn-sm">View All</a>
          </div>

          <div *ngIf="loadingAccounts" class="loading-state">
            <div class="spinner"></div>
            <p>Loading accounts...</p>
          </div>

          <div *ngIf="!loadingAccounts && accounts.length === 0" class="empty-state">
            <span class="material-icons">account_balance</span>
            <p>No accounts found</p>
            <a routerLink="/accounts" class="btn btn-primary btn-sm">Open Account</a>
          </div>

          <div class="accounts-list" *ngIf="!loadingAccounts && accounts.length > 0">
            <div class="account-card" *ngFor="let account of accounts">
              <div class="account-type-badge" [class]="'type-' + account.accountType.toLowerCase()">
                {{ account.accountType }}
              </div>
              <div class="account-number">{{ account.accountNumber }}</div>
              <div class="account-balance">
                <span class="balance-label">Available Balance</span>
                <span class="balance-amount">{{ account.balance | currency:'NAD ':'symbol':'1.2-2' }}</span>
              </div>
              <div class="account-currency">{{ account.currency }}</div>
            </div>
          </div>
        </div>

        <!-- Recent Transactions -->
        <div class="section transactions-section">
          <div class="section-header">
            <h2>Recent Transactions</h2>
            <a routerLink="/transactions" class="btn btn-outline btn-sm">View All</a>
          </div>

          <div *ngIf="loadingTransactions" class="loading-state">
            <div class="spinner"></div>
            <p>Loading transactions...</p>
          </div>

          <div *ngIf="!loadingTransactions && recentTransactions.length === 0" class="empty-state">
            <span class="material-icons">receipt_long</span>
            <p>No transactions yet</p>
          </div>

          <div class="transactions-list" *ngIf="!loadingTransactions && recentTransactions.length > 0">
            <div class="transaction-row" *ngFor="let tx of recentTransactions.slice(0, 5)">
              <div class="tx-icon" [class]="'tx-' + tx.transactionType.toLowerCase()">
                <span class="material-icons">{{ getTransactionIcon(tx.transactionType) }}</span>
              </div>
              <div class="tx-details">
                <p class="tx-desc">{{ tx.description || tx.transactionType }}</p>
                <p class="tx-ref">{{ tx.referenceNumber }}</p>
              </div>
              <div class="tx-amount" [class.credit]="isCredit(tx)" [class.debit]="!isCredit(tx)">
                {{ isCredit(tx) ? '+' : '-' }}{{ tx.amount | currency:'NAD ':'symbol':'1.2-2' }}
              </div>
              <div>
                <span class="badge" [class]="'badge-' + getStatusClass(tx.status)">{{ tx.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 32px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 32px;
    }

    .dashboard-header h1 {
      font-size: 24px;
      margin-bottom: 4px;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 32px;
    }

    .summary-card {
      background: var(--fnb-white);
      border-radius: var(--fnb-radius-lg);
      padding: 20px;
      display: flex;
      align-items: center;
      gap: 16px;
      box-shadow: var(--fnb-shadow);
    }

    .summary-icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .summary-icon .material-icons { font-size: 24px; }

    .summary-card.primary .summary-icon { background: var(--fnb-primary-pale); color: var(--fnb-primary); }
    .summary-card.secondary .summary-icon { background: var(--fnb-secondary-pale); color: var(--fnb-secondary-dark); }
    .summary-card.success .summary-icon { background: rgba(34,197,94,0.1); color: var(--fnb-success); }
    .summary-card.info .summary-icon { background: rgba(59,130,246,0.1); color: var(--fnb-info); }

    .summary-label {
      font-size: 12px;
      color: var(--fnb-gray-500);
      margin-bottom: 4px;
    }

    .summary-value {
      font-size: 20px;
      font-weight: 700;
      color: var(--fnb-gray-800);
    }

    .dashboard-body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .section {
      background: var(--fnb-white);
      border-radius: var(--fnb-radius-lg);
      padding: 24px;
      box-shadow: var(--fnb-shadow);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .section-header h2 { font-size: 16px; }

    .loading-state, .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 32px 0;
      color: var(--fnb-gray-400);
    }

    .empty-state .material-icons { font-size: 40px; }

    .accounts-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .account-card {
      background: var(--fnb-gray-50);
      border-radius: var(--fnb-radius);
      padding: 16px;
      border-left: 4px solid var(--fnb-primary);
    }

    .account-type-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      color: var(--fnb-primary);
    }

    .account-number {
      font-size: 13px;
      color: var(--fnb-gray-500);
      margin-bottom: 10px;
      font-family: monospace;
    }

    .account-balance {
      display: flex;
      flex-direction: column;
    }

    .balance-label {
      font-size: 11px;
      color: var(--fnb-gray-400);
    }

    .balance-amount {
      font-size: 20px;
      font-weight: 700;
      color: var(--fnb-gray-800);
    }

    .transactions-list {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .transaction-row {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 8px;
      border-radius: var(--fnb-radius);
      transition: var(--fnb-transition);
    }

    .transaction-row:hover {
      background: var(--fnb-gray-50);
    }

    .tx-icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .tx-icon .material-icons { font-size: 18px; }
    .tx-transfer .material-icons { color: var(--fnb-primary); background: var(--fnb-primary-pale); }
    .tx-deposit .material-icons { color: var(--fnb-success); }
    .tx-withdrawal .material-icons { color: var(--fnb-danger); }
    .tx-payment .material-icons { color: var(--fnb-secondary-dark); }

    .tx-transfer { background: var(--fnb-primary-pale); color: var(--fnb-primary); }
    .tx-deposit { background: rgba(34,197,94,0.1); color: var(--fnb-success); }
    .tx-withdrawal { background: rgba(239,68,68,0.1); color: var(--fnb-danger); }
    .tx-payment { background: var(--fnb-secondary-pale); color: var(--fnb-secondary-dark); }

    .tx-details { flex: 1; min-width: 0; }
    .tx-desc { font-size: 13px; font-weight: 500; color: var(--fnb-gray-700); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .tx-ref { font-size: 11px; color: var(--fnb-gray-400); font-family: monospace; }

    .tx-amount { font-weight: 600; font-size: 14px; white-space: nowrap; }
    .tx-amount.credit { color: var(--fnb-success); }
    .tx-amount.debit { color: var(--fnb-danger); }

    @media (max-width: 1024px) {
      .summary-grid { grid-template-columns: repeat(2, 1fr); }
      .dashboard-body { grid-template-columns: 1fr; }
    }

    @media (max-width: 600px) {
      .dashboard { padding: 16px; }
      .summary-grid { grid-template-columns: 1fr 1fr; }
      .dashboard-header { flex-direction: column; gap: 16px; }
    }
  `]
})
export class DashboardComponent implements OnInit {
  user = this.authService.getCurrentUser();
  accounts: Account[] = [];
  recentTransactions: Transaction[] = [];
  loadingAccounts = false;
  loadingTransactions = false;

  get greeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Morning';
    if (hour < 17) return 'Afternoon';
    return 'Evening';
  }

  constructor(
    private authService: AuthService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    if (this.user) {
      this.loadAccounts();
    }
  }

  loadAccounts(): void {
    this.loadingAccounts = true;
    this.accountService.getAccountsByUser(this.user!.userId).subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        this.loadingAccounts = false;
        if (accounts.length > 0) {
          this.loadTransactions(accounts[0].id!);
        }
      },
      error: () => { this.loadingAccounts = false; }
    });
  }

  loadTransactions(accountId: number): void {
    this.loadingTransactions = true;
    this.accountService.getTransactions(accountId).subscribe({
      next: (txns) => {
        this.recentTransactions = txns;
        this.loadingTransactions = false;
      },
      error: () => { this.loadingTransactions = false; }
    });
  }

  getTotalBalance(): number {
    return this.accounts.reduce((sum, acc) => sum + acc.balance, 0);
  }

  getTransactionIcon(type: string): string {
    const icons: Record<string, string> = {
      TRANSFER: 'swap_horiz',
      DEPOSIT: 'add_circle',
      WITHDRAWAL: 'remove_circle',
      PAYMENT: 'payment'
    };
    return icons[type] || 'receipt';
  }

  isCredit(tx: Transaction): boolean {
    return tx.transactionType === 'DEPOSIT';
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      COMPLETED: 'success',
      PENDING: 'warning',
      FAILED: 'danger',
      REVERSED: 'info'
    };
    return classes[status] || 'info';
  }
}
