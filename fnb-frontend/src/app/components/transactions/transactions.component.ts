import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { Account, Transaction } from '../../models/account.model';

@Component({
  selector: 'fnb-transactions',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="page">

      <!-- ── Page Header ───────────────────────────── -->
      <div class="page-header">
        <div>
          <h1>Transactions</h1>
          <p class="text-muted">Transfer money and view transaction history</p>
        </div>
      </div>

      <div class="page-body">

        <!-- ── Left: New Transfer Form ──────────────── -->
        <div class="transfer-panel">
          <div class="panel-header">
            <span class="material-icons">swap_horiz</span>
            <h2>New Transfer</h2>
          </div>

          <div *ngIf="transferError"   class="alert alert-danger">{{ transferError }}</div>
          <div *ngIf="transferSuccess" class="alert alert-success">{{ transferSuccess }}</div>

          <form [formGroup]="transferForm" (ngSubmit)="onTransfer()">
            <div class="form-group">
              <label class="form-label">From Account</label>
              <select class="form-control" formControlName="sourceAccountNumber">
                <option value="">-- Select source account --</option>
                <option *ngFor="let acc of accounts" [value]="acc.accountNumber">
                  {{ acc.accountNumber }} (N${'$'}{{ acc.balance | number:'1.2-2' }})
                </option>
              </select>
            </div>

            <div class="transfer-arrow">
              <span class="material-icons">arrow_downward</span>
            </div>

            <div class="form-group">
              <label class="form-label">To Account Number</label>
              <input type="text" class="form-control" formControlName="destinationAccountNumber" placeholder="FNB0000000000" />
            </div>

            <div class="form-group">
              <label class="form-label">Amount (NAD)</label>
              <div class="amount-input">
                <span class="currency-prefix">N$</span>
                <input type="number" class="form-control" formControlName="amount" placeholder="0.00" min="0.01" step="0.01" />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Description (Optional)</label>
              <input type="text" class="form-control" formControlName="description" placeholder="Payment reference..." />
            </div>

            <button type="submit" class="btn btn-primary w-full btn-lg" [disabled]="transferring || transferForm.invalid">
              <span class="spinner" *ngIf="transferring"></span>
              <span class="material-icons" *ngIf="!transferring">send</span>
              {{ transferring ? 'Processing...' : 'Send Money' }}
            </button>
          </form>
        </div>

        <!-- ── Right: Transaction History ───────────── -->
        <div class="history-panel">
          <div class="panel-header">
            <span class="material-icons">receipt_long</span>
            <h2>Transaction History</h2>
            <div class="account-selector-inline">
              <select class="form-control-sm" [(ngModel)]="selectedAccountId" (change)="onAccountChange()">
                <option value="">All Accounts</option>
                <option *ngFor="let acc of accounts" [value]="acc.id">
                  {{ acc.accountType }} · {{ acc.accountNumber }}
                </option>
              </select>
            </div>
          </div>

          <!-- Summary Cards -->
          <div class="summary-row" *ngIf="transactions.length > 0">
            <div class="summary-card credit-card">
              <span class="material-icons">south</span>
              <div>
                <p class="s-label">Total Credits</p>
                <p class="s-value">N${'$'}{{ totalCredits | number:'1.2-2' }}</p>
              </div>
            </div>
            <div class="summary-card debit-card">
              <span class="material-icons">north</span>
              <div>
                <p class="s-label">Total Debits</p>
                <p class="s-value">N${'$'}{{ totalDebits | number:'1.2-2' }}</p>
              </div>
            </div>
            <div class="summary-card count-card">
              <span class="material-icons">receipt</span>
              <div>
                <p class="s-label">Transactions</p>
                <p class="s-value">{{ transactions.length }}</p>
              </div>
            </div>
          </div>

          <!-- Loading -->
          <div *ngIf="loadingTransactions" class="loading-state">
            <div class="spinner-lg"></div>
            <p>Loading transactions...</p>
          </div>

          <!-- Empty states -->
          <div *ngIf="!loadingTransactions && transactions.length === 0 && selectedAccountId" class="empty-state">
            <span class="material-icons">receipt_long</span>
            <p>No transactions found for this account</p>
          </div>

          <div *ngIf="!loadingTransactions && !selectedAccountId && transactions.length === 0" class="empty-state">
            <span class="material-icons">account_balance</span>
            <p>Select an account to view transactions</p>
          </div>

          <!-- Transaction Table -->
          <div class="transaction-table" *ngIf="!loadingTransactions && transactions.length > 0">
            <div class="table-header">
              <span>Type</span>
              <span>Reference</span>
              <span>Description</span>
              <span>From / To</span>
              <span>Date</span>
              <span class="text-right">Amount</span>
              <span class="text-right">Status</span>
            </div>

            <div class="table-row" *ngFor="let tx of transactions">

              <div class="tx-type-cell">
                <div class="tx-icon" [ngClass]="'tx-' + tx.transactionType.toLowerCase()">
                  <span class="material-icons">{{ getIcon(tx.transactionType) }}</span>
                </div>
                <span class="tx-label">{{ tx.transactionType }}</span>
              </div>

              <div class="ref-cell">{{ tx.referenceNumber }}</div>

              <div class="desc-cell">{{ tx.description || '—' }}</div>

              <div class="route-cell">
                <span class="acc-chip from" *ngIf="tx.fromAccountNumber">{{ tx.fromAccountNumber }}</span>
                <span class="acc-chip none" *ngIf="!tx.fromAccountNumber">External</span>
                <span class="material-icons arrow-icon">east</span>
                <span class="acc-chip to" *ngIf="tx.toAccountNumber">{{ tx.toAccountNumber }}</span>
                <span class="acc-chip none" *ngIf="!tx.toAccountNumber">External</span>
              </div>

              <div class="date-cell">
                {{ tx.transactionDate | date:'dd MMM yyyy' }}<br/>
                <small>{{ tx.transactionDate | date:'HH:mm' }}</small>
              </div>

              <div class="amount-cell" [class.credit]="tx.credit" [class.debit]="!tx.credit">
                {{ tx.credit ? '+' : '-' }}N${'$'}{{ tx.amount | number:'1.2-2' }}
              </div>

              <div class="status-cell">
                <span class="badge" [ngClass]="'badge-' + getStatusClass(tx.status)">{{ tx.status }}</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .page { padding: 32px; max-width: 1400px; margin: 0 auto; }
    .page-header { margin-bottom: 28px; }
    .page-header h1 { font-size: 24px; margin-bottom: 4px; }

    .page-body {
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 24px;
      align-items: start;
    }

    .transfer-panel, .history-panel {
      background: var(--fnb-white);
      border-radius: var(--fnb-radius-lg);
      padding: 24px;
      box-shadow: var(--fnb-shadow);
    }

    .panel-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid var(--fnb-gray-100);
      flex-wrap: wrap;
    }
    .panel-header .material-icons { color: var(--fnb-primary); font-size: 22px; }
    .panel-header h2 { font-size: 16px; flex: 1; }

    .account-selector-inline { margin-left: auto; }
    .form-control-sm {
      padding: 6px 10px;
      border: 1px solid var(--fnb-gray-200);
      border-radius: var(--fnb-radius);
      font-size: 13px;
      outline: none;
      background: var(--fnb-gray-50);
      color: var(--fnb-gray-700);
      min-width: 230px;
    }

    .transfer-arrow { display: flex; justify-content: center; margin: 4px 0; color: var(--fnb-primary); }
    .amount-input { position: relative; }
    .currency-prefix {
      position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
      font-weight: 600; color: var(--fnb-gray-500); font-size: 14px; z-index: 1;
    }
    .amount-input .form-control { padding-left: 32px; }

    .summary-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }
    .summary-card {
      display: flex; align-items: center; gap: 10px;
      padding: 14px; border-radius: var(--fnb-radius); font-size: 13px;
    }
    .summary-card .material-icons { font-size: 20px; }
    .credit-card { background: rgba(34,197,94,0.08); color: #16a34a; }
    .debit-card  { background: rgba(239,68,68,0.08);  color: #dc2626; }
    .count-card  { background: var(--fnb-primary-pale); color: var(--fnb-primary); }
    .s-label { font-size: 11px; opacity: .75; margin-bottom: 2px; }
    .s-value { font-size: 15px; font-weight: 700; }

    .loading-state, .empty-state {
      display: flex; flex-direction: column;
      align-items: center; gap: 12px; padding: 48px;
      color: var(--fnb-gray-400);
    }
    .empty-state .material-icons { font-size: 40px; }
    .spinner-lg {
      width: 36px; height: 36px;
      border: 3px solid var(--fnb-gray-200);
      border-top-color: var(--fnb-primary);
      border-radius: 50%;
      animation: spin .8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    .transaction-table { overflow-x: auto; }
    .table-header {
      display: grid;
      grid-template-columns: 120px 140px 1fr 200px 90px 120px 100px;
      padding: 8px 12px;
      font-size: 11px; font-weight: 600;
      text-transform: uppercase; letter-spacing: .5px;
      color: var(--fnb-gray-400);
      border-bottom: 1px solid var(--fnb-gray-100);
    }
    .table-row {
      display: grid;
      grid-template-columns: 120px 140px 1fr 200px 90px 120px 100px;
      padding: 13px 12px;
      border-bottom: 1px solid var(--fnb-gray-50);
      align-items: center; font-size: 13px;
      transition: var(--fnb-transition);
    }
    .table-row:hover { background: var(--fnb-gray-50); }

    .tx-type-cell { display: flex; align-items: center; gap: 8px; }
    .tx-icon {
      width: 30px; height: 30px; border-radius: 8px;
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    }
    .tx-icon .material-icons { font-size: 15px; }
    .tx-transfer   { background: var(--fnb-primary-pale); color: var(--fnb-primary); }
    .tx-deposit    { background: rgba(34,197,94,.12); color: #16a34a; }
    .tx-withdrawal { background: rgba(239,68,68,.12); color: #dc2626; }
    .tx-payment    { background: var(--fnb-secondary-pale); color: var(--fnb-secondary-dark); }
    .tx-label { font-weight: 500; font-size: 12px; }

    .ref-cell { font-family: monospace; font-size: 11px; color: var(--fnb-gray-500); word-break: break-all; }
    .desc-cell { font-size: 12px; color: var(--fnb-gray-600); }

    .route-cell { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
    .acc-chip {
      font-family: monospace; font-size: 10px;
      padding: 2px 6px; border-radius: 4px;
    }
    .acc-chip.from { background: rgba(239,68,68,.08); color: #dc2626; }
    .acc-chip.to   { background: rgba(34,197,94,.08); color: #16a34a; }
    .acc-chip.none { background: var(--fnb-gray-100); color: var(--fnb-gray-400); }
    .arrow-icon { font-size: 14px; color: var(--fnb-gray-400); }

    .date-cell { font-size: 12px; color: var(--fnb-gray-500); line-height: 1.4; }
    .date-cell small { font-size: 11px; }

    .amount-cell { font-weight: 700; font-size: 14px; text-align: right; }
    .amount-cell.credit { color: #16a34a; }
    .amount-cell.debit  { color: #dc2626; }

    .status-cell { text-align: right; }
    .badge { padding: 3px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
    .badge-success { background: rgba(34,197,94,.12); color: #16a34a; }
    .badge-warning { background: rgba(234,179,8,.12);  color: #b45309; }
    .badge-danger  { background: rgba(239,68,68,.12);  color: #dc2626; }
    .badge-info    { background: var(--fnb-secondary-pale); color: var(--fnb-secondary-dark); }

    .text-right { text-align: right; }

    @media (max-width: 900px) {
      .page-body { grid-template-columns: 1fr; }
    }
    @media (max-width: 600px) {
      .page { padding: 16px; }
      .table-header { display: none; }
      .table-row {
        display: flex; flex-direction: column;
        gap: 6px; padding: 16px 12px;
        border: 1px solid var(--fnb-gray-100);
        border-radius: 10px; margin-bottom: 8px;
      }
    }
  `]
})
export class TransactionsComponent implements OnInit {
  accounts: Account[] = [];
  transactions: Transaction[] = [];
  selectedAccountId: number | string = '';
  loadingTransactions = false;
  transferring = false;
  transferError = '';
  transferSuccess = '';
  transferForm: FormGroup;

  user = this.authService.getCurrentUser();

  constructor(
    private authService: AuthService,
    private accountService: AccountService,
    private fb: FormBuilder
  ) {
    this.transferForm = this.fb.group({
      sourceAccountNumber:      ['', Validators.required],
      destinationAccountNumber: ['', Validators.required],
      amount:      ['', [Validators.required, Validators.min(0.01)]],
      description: ['']
    });
  }

  ngOnInit(): void {
    if (this.user) this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAccountsByUser(this.user!.userId).subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        // Auto-load the first account's transactions on page open
        if (accounts.length > 0 && accounts[0].id) {
          this.selectedAccountId = accounts[0].id;
          this.loadTransactions(accounts[0].id);
        }
      }
    });
  }

  onAccountChange(): void {
    if (!this.selectedAccountId) { this.transactions = []; return; }
    this.loadTransactions(+this.selectedAccountId);
  }

  private loadTransactions(accountId: number): void {
    this.loadingTransactions = true;
    this.accountService.getTransactions(accountId).subscribe({
      next: (txns) => { this.transactions = txns; this.loadingTransactions = false; },
      error: () => { this.loadingTransactions = false; }
    });
  }

  onTransfer(): void {
    if (this.transferForm.invalid) return;
    this.transferring = true;
    this.transferError = '';
    this.transferSuccess = '';

    this.accountService.transfer(this.transferForm.value).subscribe({
      next: () => {
        this.transferSuccess = 'Transfer successful!';
        this.transferring = false;
        this.transferForm.reset();
        this.loadAccounts();
      },
      error: (err) => {
        this.transferError = err.error?.message || 'Transfer failed. Please try again.';
        this.transferring = false;
      }
    });
  }

  get totalCredits(): number {
    return this.transactions.filter(t => t.credit).reduce((s, t) => s + t.amount, 0);
  }

  get totalDebits(): number {
    return this.transactions.filter(t => !t.credit).reduce((s, t) => s + t.amount, 0);
  }

  getIcon(type: string): string {
    const icons: Record<string, string> = {
      TRANSFER: 'swap_horiz', DEPOSIT: 'add_circle',
      WITHDRAWAL: 'remove_circle', PAYMENT: 'payment'
    };
    return icons[type] || 'receipt';
  }

  getStatusClass(status: string): string {
    const classes: Record<string, string> = {
      COMPLETED: 'success', PENDING: 'warning', FAILED: 'danger', REVERSED: 'info'
    };
    return classes[status] || 'info';
  }
}
