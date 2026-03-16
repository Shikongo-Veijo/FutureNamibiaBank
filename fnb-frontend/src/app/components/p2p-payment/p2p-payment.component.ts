import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { AuthService } from '../../services/auth.service';
import { Account, P2PPaymentRequest, P2PPaymentResponse, Transaction } from '../../models/account.model';

@Component({
  selector: 'fnb-p2p-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-container">

      <!-- ── Page Header ── -->
      <div class="page-header">
        <h1 class="page-title">
          <span class="material-icons">send</span>
          P2P Payment
        </h1>
        <p class="page-subtitle">Send money directly to another account</p>
      </div>

      <!-- ══ TOP GRID: Form + Result/Info ══ -->
      <div class="content-grid">

        <!-- ── Payment Form ── -->
        <div class="card form-card">
          <div class="card-header">
            <span class="material-icons">payments</span>
            <h2>Payment Details</h2>
          </div>

          <form class="payment-form" #paymentForm="ngForm" (ngSubmit)="onSubmit(paymentForm)">

            <div class="form-group">
              <label class="form-label">
                Client Reference
                <span class="badge-auto">Auto-generated</span>
              </label>
              <div class="input-readonly">
                <span class="material-icons">tag</span>
                <span>{{ form.clientReference }}</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="senderAccount">Sender Account <span class="required">*</span></label>
              <div class="select-wrapper">
                <span class="material-icons">account_balance</span>
                <select id="senderAccount" name="senderAccount" [(ngModel)]="form.senderAccountNumber"
                  required class="form-select" [class.invalid]="senderErr">
                  <option value="">-- Select your account --</option>
                  <option *ngFor="let acc of accounts" [value]="acc.accountNumber">
                    {{ acc.accountNumber }} ({{ acc.accountType }}) – N$ {{ acc.balance | number:'1.2-2' }}
                  </option>
                </select>
              </div>
              <small class="error-text" *ngIf="senderErr">{{ senderErr }}</small>
            </div>

            <div class="form-group">
              <label class="form-label" for="receiverAccount">Receiver Account <span class="required">*</span></label>
              <div class="input-wrapper">
                <span class="material-icons">person</span>
                <input id="receiverAccount" name="receiverAccount" type="text"
                  [(ngModel)]="form.receiverAccountNumber" placeholder="e.g. FNB4569299567"
                  maxlength="20" class="form-input" [class.invalid]="receiverErr" required>
              </div>
              <small class="error-text" *ngIf="receiverErr">{{ receiverErr }}</small>
            </div>

            <div class="form-group">
              <label class="form-label" for="amount">Amount <span class="required">*</span></label>
              <div class="input-wrapper">
                <span class="currency-prefix">N$</span>
                <input id="amount" name="amount" type="number" [(ngModel)]="form.amount"
                  placeholder="0.00" min="0.01" step="0.01" class="form-input with-prefix"
                  [class.invalid]="amountErr" required>
              </div>
              <small class="error-text" *ngIf="amountErr">{{ amountErr }}</small>
            </div>

            <div class="form-group">
              <label class="form-label">Currency</label>
              <div class="input-readonly">
                <span class="material-icons">currency_exchange</span>
                <span>NAD – Namibian Dollar</span>
                <span class="badge-fixed">Fixed</span>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="reference">Payment Reference <span class="required">*</span></label>
              <div class="input-wrapper">
                <span class="material-icons">description</span>
                <input id="reference" name="reference" type="text" [(ngModel)]="form.reference"
                  placeholder="e.g. Rent payment, Lunch money" maxlength="50"
                  class="form-input" [class.invalid]="referenceErr" required>
              </div>
              <div class="input-footer">
                <small class="error-text" *ngIf="referenceErr">{{ referenceErr }}</small>
                <small class="char-count" [class.warn]="form.reference.length > 40">{{ form.reference.length }}/50</small>
              </div>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" (click)="resetForm()" [disabled]="loading">
                <span class="material-icons">refresh</span> Reset
              </button>
              <button type="submit" class="btn btn-primary" [disabled]="loading">
                <span class="material-icons" *ngIf="!loading">send</span>
                <span class="spinner" *ngIf="loading"></span>
                {{ loading ? 'Processing…' : 'Send Payment' }}
              </button>
            </div>
          </form>
        </div>

        <!-- ── Result Panel ── -->
        <div class="card result-card" *ngIf="result">
          <div class="result-header" [class.success]="result.status === 'SUCCESS'" [class.failed]="result.status === 'FAILED'">
            <span class="material-icons result-icon">{{ result.status === 'SUCCESS' ? 'check_circle' : 'cancel' }}</span>
            <h2>{{ result.status === 'SUCCESS' ? 'Payment Successful' : 'Payment Failed' }}</h2>
          </div>
          <div class="result-body">
            <div class="result-row">
              <span class="result-label">Status</span>
              <span class="result-value">
                <span class="status-badge" [class.success]="result.status === 'SUCCESS'" [class.failed]="result.status === 'FAILED'">{{ result.status }}</span>
              </span>
            </div>
            <div class="result-row" *ngIf="result.transactionId">
              <span class="result-label">Transaction ID</span>
              <span class="result-value mono">{{ result.transactionId }}</span>
            </div>
            <div class="result-row">
              <span class="result-label">Client Reference</span>
              <span class="result-value mono">{{ lastClientRef }}</span>
            </div>
            <div class="result-row" *ngIf="result.errorCode">
              <span class="result-label">Error Code</span>
              <span class="result-value error-code">{{ result.errorCode }}</span>
            </div>
            <div class="result-row">
              <span class="result-label">Message</span>
              <span class="result-value">{{ result.message }}</span>
            </div>
          </div>
          <div class="result-footer">
            <button class="btn btn-outline" (click)="newPayment()">
              <span class="material-icons">add</span> New Payment
            </button>
          </div>
        </div>

        <!-- ── Info Panel ── -->
        <div class="card info-card" *ngIf="!result">
          <div class="card-header">
            <span class="material-icons">info</span>
            <h2>How It Works</h2>
          </div>
          <ul class="info-list">
            <li><span class="material-icons">looks_one</span><div><strong>Select your account</strong><p>Choose the account to send money from.</p></div></li>
            <li><span class="material-icons">looks_two</span><div><strong>Enter receiver details</strong><p>Provide the account number of the recipient.</p></div></li>
            <li><span class="material-icons">looks_3</span><div><strong>Set amount & reference</strong><p>Enter the NAD amount and a payment reference.</p></div></li>
            <li><span class="material-icons">looks_4</span><div><strong>Review & send</strong><p>Confirm details then click Send Payment.</p></div></li>
          </ul>
          <div class="validation-rules">
            <h3>Validation Rules</h3>
            <ul>
              <li>Account numbers are alphanumeric, at least 10 characters (e.g. FNB4569299567)</li>
              <li>Amount must be greater than 0</li>
              <li>Currency is fixed to NAD</li>
              <li>Payment reference is required (max 50 characters)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- ══ PAYMENT HISTORY ══ -->
      <div class="card history-card">
        <div class="history-header">
          <div class="history-title">
            <span class="material-icons">history</span>
            <h2>Payment History</h2>
          </div>
          <div class="history-meta" *ngIf="payments.length > 0">
            <span class="meta-chip total-chip">{{ payments.length }} payments</span>
            <span class="meta-chip amount-chip">N${'$'}{{ totalSent | number:'1.2-2' }} sent</span>
          </div>
          <button class="btn-refresh" (click)="loadPayments()" [disabled]="loadingPayments" title="Refresh">
            <span class="material-icons" [class.spinning]="loadingPayments">refresh</span>
          </button>
        </div>

        <!-- Loading -->
        <div class="history-loading" *ngIf="loadingPayments">
          <div class="dot-spinner"><span></span><span></span><span></span></div>
          <p>Loading payment history…</p>
        </div>

        <!-- Empty -->
        <div class="history-empty" *ngIf="!loadingPayments && payments.length === 0">
          <span class="material-icons">receipt_long</span>
          <p>No payment history yet</p>
          <small>Payments you send or receive will appear here</small>
        </div>

        <!-- Table -->
        <div class="history-table" *ngIf="!loadingPayments && payments.length > 0">
          <div class="ht-header">
            <span>Reference</span>
            <span>Client Ref / Description</span>
            <span>From</span>
            <span>To</span>
            <span>Date & Time</span>
            <span class="text-right">Amount</span>
            <span class="text-right">Status</span>
          </div>

          <div class="ht-row" *ngFor="let p of payments">
            <div class="ht-ref">
              <span class="material-icons pay-icon">payment</span>
              <span>{{ p.referenceNumber }}</span>
            </div>
            <div class="ht-desc">{{ p.description || '—' }}</div>
            <div class="ht-acc from-acc">{{ p.fromAccountNumber || 'External' }}</div>
            <div class="ht-acc to-acc">{{ p.toAccountNumber || 'External' }}</div>
            <div class="ht-date">
              {{ p.transactionDate | date:'dd MMM yyyy' }}
              <small>{{ p.transactionDate | date:'HH:mm' }}</small>
            </div>
            <div class="ht-amount" [class.credit]="p.credit" [class.debit]="!p.credit">
              {{ p.credit ? '+' : '-' }}N${'$'}{{ p.amount | number:'1.2-2' }}
            </div>
            <div class="ht-status">
              <span class="badge" [ngClass]="'badge-' + statusClass(p.status)">{{ p.status }}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .page-container { padding: 88px 24px 40px; max-width: 1200px; margin: 0 auto; }
    .page-header { margin-bottom: 28px; }
    .page-title {
      display: flex; align-items: center; gap: 10px;
      font-size: 24px; font-weight: 700; color: var(--fnb-gray-800); margin: 0 0 4px;
    }
    .page-title .material-icons { color: var(--fnb-primary); font-size: 28px; }
    .page-subtitle { color: var(--fnb-gray-500); margin: 0; font-size: 14px; }

    /* ── Grid ── */
    .content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 28px; }
    @media (max-width: 900px) { .content-grid { grid-template-columns: 1fr; } }

    /* ── Card base ── */
    .card {
      background: var(--fnb-white); border-radius: 12px;
      box-shadow: var(--fnb-shadow-sm); border: 1px solid var(--fnb-gray-200); overflow: hidden;
    }
    .card-header {
      display: flex; align-items: center; gap: 10px;
      padding: 20px 24px 16px; border-bottom: 1px solid var(--fnb-gray-100);
    }
    .card-header h2 { margin: 0; font-size: 16px; font-weight: 600; color: var(--fnb-gray-800); }
    .card-header .material-icons { color: var(--fnb-primary); }

    /* ── Form ── */
    .payment-form { padding: 24px; display: flex; flex-direction: column; gap: 20px; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-label { font-size: 13px; font-weight: 600; color: var(--fnb-gray-700); display: flex; align-items: center; gap: 8px; }
    .required { color: var(--fnb-danger); }
    .badge-auto, .badge-fixed {
      font-size: 10px; font-weight: 600; padding: 2px 7px;
      border-radius: 20px; background: var(--fnb-secondary); color: var(--fnb-gray-600);
    }
    .input-wrapper, .input-readonly, .select-wrapper {
      display: flex; align-items: center; gap: 10px;
      border: 1.5px solid var(--fnb-gray-200); border-radius: 8px;
      padding: 0 12px; background: var(--fnb-white); transition: border-color 0.2s;
    }
    .input-wrapper:focus-within, .select-wrapper:focus-within { border-color: var(--fnb-primary); }
    .input-readonly { background: var(--fnb-gray-50, #f9fafb); border-style: dashed; }
    .input-wrapper .material-icons, .input-readonly .material-icons, .select-wrapper .material-icons { color: var(--fnb-gray-400); font-size: 18px; flex-shrink: 0; }
    .currency-prefix { font-size: 14px; font-weight: 700; color: var(--fnb-primary); flex-shrink: 0; }
    .form-input, .form-select { flex: 1; border: none; outline: none; font-size: 14px; color: var(--fnb-gray-800); background: transparent; padding: 11px 0; font-family: inherit; }
    .form-select { cursor: pointer; }
    .input-footer { display: flex; justify-content: space-between; align-items: center; }
    .error-text { font-size: 12px; color: var(--fnb-danger); }
    .char-count { font-size: 12px; color: var(--fnb-gray-400); }
    .char-count.warn { color: #f59e0b; }
    .form-actions { display: flex; gap: 12px; justify-content: flex-end; padding-top: 4px; }

    /* ── Buttons ── */
    .btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; transition: all 0.2s; }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-primary { background: var(--fnb-primary); color: white; }
    .btn-primary:hover:not(:disabled) { filter: brightness(1.1); }
    .btn-secondary { background: var(--fnb-gray-100); color: var(--fnb-gray-700); }
    .btn-secondary:hover:not(:disabled) { background: var(--fnb-gray-200); }
    .btn-outline { background: transparent; color: var(--fnb-primary); border: 1.5px solid var(--fnb-primary); }
    .btn-outline:hover { background: var(--fnb-primary-pale); }
    .spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.4); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* ── Result ── */
    .result-header { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 32px 24px 20px; }
    .result-header.success { background: linear-gradient(135deg, #f0fdf4, #dcfce7); }
    .result-header.failed  { background: linear-gradient(135deg, #fef2f2, #fee2e2); }
    .result-icon { font-size: 48px; }
    .result-header.success .result-icon { color: #16a34a; }
    .result-header.failed  .result-icon { color: var(--fnb-danger); }
    .result-header h2 { margin: 0; font-size: 18px; font-weight: 700; }
    .result-header.success h2 { color: #15803d; }
    .result-header.failed  h2 { color: var(--fnb-danger); }
    .result-body { padding: 20px 24px; display: flex; flex-direction: column; gap: 14px; }
    .result-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding-bottom: 14px; border-bottom: 1px solid var(--fnb-gray-100); }
    .result-row:last-child { border-bottom: none; padding-bottom: 0; }
    .result-label { font-size: 13px; color: var(--fnb-gray-500); font-weight: 500; white-space: nowrap; }
    .result-value { font-size: 13px; color: var(--fnb-gray-800); font-weight: 600; text-align: right; word-break: break-all; }
    .result-value.mono { font-family: monospace; letter-spacing: 0.5px; }
    .status-badge { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; }
    .status-badge.success { background: #dcfce7; color: #15803d; }
    .status-badge.failed  { background: #fee2e2; color: #dc2626; }
    .error-code { color: #dc2626; font-family: monospace; font-size: 13px; }
    .result-footer { padding: 16px 24px 20px; display: flex; justify-content: center; }

    /* ── Info panel ── */
    .info-card .info-list { list-style: none; padding: 20px 24px; margin: 0; display: flex; flex-direction: column; gap: 18px; }
    .info-list li { display: flex; gap: 14px; align-items: flex-start; }
    .info-list .material-icons { color: var(--fnb-primary); font-size: 22px; flex-shrink: 0; margin-top: 2px; }
    .info-list strong { font-size: 14px; color: var(--fnb-gray-800); display: block; margin-bottom: 2px; }
    .info-list p { font-size: 13px; color: var(--fnb-gray-500); margin: 0; }
    .validation-rules { margin: 0 24px 24px; background: var(--fnb-secondary); border-radius: 8px; padding: 14px 16px; }
    .validation-rules h3 { margin: 0 0 8px; font-size: 13px; font-weight: 700; color: var(--fnb-primary); }
    .validation-rules ul { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px; }
    .validation-rules li { font-size: 12px; color: var(--fnb-gray-600); }

    /* ══ Payment History ══ */
    .history-card { margin-top: 0; }

    .history-header {
      display: flex; align-items: center; gap: 12px;
      padding: 18px 24px; border-bottom: 1px solid var(--fnb-gray-100); flex-wrap: wrap;
    }
    .history-title { display: flex; align-items: center; gap: 8px; flex: 1; }
    .history-title .material-icons { color: var(--fnb-primary); }
    .history-title h2 { margin: 0; font-size: 16px; font-weight: 600; color: var(--fnb-gray-800); }

    .history-meta { display: flex; gap: 8px; align-items: center; }
    .meta-chip {
      font-size: 12px; font-weight: 600; padding: 4px 10px;
      border-radius: 20px;
    }
    .total-chip  { background: var(--fnb-primary-pale); color: var(--fnb-primary); }
    .amount-chip { background: rgba(239,68,68,.08); color: #dc2626; }

    .btn-refresh {
      background: none; border: none; cursor: pointer; padding: 6px;
      border-radius: 8px; color: var(--fnb-gray-400); display: flex; align-items: center;
      transition: all 0.2s;
    }
    .btn-refresh:hover { background: var(--fnb-gray-100); color: var(--fnb-primary); }
    .btn-refresh:disabled { opacity: .5; cursor: not-allowed; }
    .spinning { animation: spin 1s linear infinite; }

    .history-loading, .history-empty {
      display: flex; flex-direction: column; align-items: center;
      gap: 10px; padding: 48px; color: var(--fnb-gray-400);
    }
    .history-empty .material-icons { font-size: 40px; }
    .history-empty small { font-size: 12px; }

    .dot-spinner { display: flex; gap: 6px; }
    .dot-spinner span {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--fnb-primary); animation: dot-bounce 1.2s ease-in-out infinite;
    }
    .dot-spinner span:nth-child(2) { animation-delay: .2s; }
    .dot-spinner span:nth-child(3) { animation-delay: .4s; }
    @keyframes dot-bounce { 0%,80%,100% { transform: scale(0.6); opacity: .4; } 40% { transform: scale(1); opacity: 1; } }

    /* History table */
    .history-table { overflow-x: auto; }

    .ht-header {
      display: grid;
      grid-template-columns: 160px 1fr 140px 140px 110px 120px 100px;
      padding: 8px 20px;
      font-size: 11px; font-weight: 600;
      text-transform: uppercase; letter-spacing: .5px;
      color: var(--fnb-gray-400);
      border-bottom: 1px solid var(--fnb-gray-100);
    }

    .ht-row {
      display: grid;
      grid-template-columns: 160px 1fr 140px 140px 110px 120px 100px;
      padding: 13px 20px;
      border-bottom: 1px solid var(--fnb-gray-50);
      align-items: center; font-size: 13px;
      transition: background 0.15s;
    }
    .ht-row:last-child { border-bottom: none; }
    .ht-row:hover { background: var(--fnb-gray-50); }

    .ht-ref { display: flex; align-items: center; gap: 6px; font-family: monospace; font-size: 11px; color: var(--fnb-gray-600); }
    .pay-icon { font-size: 14px; color: var(--fnb-primary); flex-shrink: 0; }

    .ht-desc { font-size: 12px; color: var(--fnb-gray-600); }

    .ht-acc {
      font-family: monospace; font-size: 11px; padding: 3px 7px;
      border-radius: 4px; display: inline-block;
    }
    .from-acc { background: rgba(239,68,68,.07); color: #dc2626; }
    .to-acc   { background: rgba(34,197,94,.07); color: #16a34a; }

    .ht-date { font-size: 12px; color: var(--fnb-gray-500); line-height: 1.5; }
    .ht-date small { font-size: 11px; display: block; }

    .ht-amount { font-weight: 700; font-size: 14px; text-align: right; }
    .ht-amount.credit { color: #16a34a; }
    .ht-amount.debit  { color: #dc2626; }

    .ht-status { text-align: right; }
    .badge { padding: 3px 8px; border-radius: 20px; font-size: 11px; font-weight: 600; }
    .badge-success { background: rgba(34,197,94,.12); color: #16a34a; }
    .badge-warning { background: rgba(234,179,8,.12);  color: #b45309; }
    .badge-danger  { background: rgba(239,68,68,.12);  color: #dc2626; }
    .badge-info    { background: var(--fnb-secondary-pale); color: var(--fnb-secondary-dark); }

    .text-right { text-align: right; }

    @media (max-width: 768px) {
      .ht-header { display: none; }
      .ht-row { display: flex; flex-direction: column; gap: 6px; padding: 14px 16px; border: 1px solid var(--fnb-gray-100); border-radius: 10px; margin: 8px 16px; }
    }
  `]
})
export class P2PPaymentComponent implements OnInit {

  accounts: Account[] = [];
  loading = false;
  result: P2PPaymentResponse | null = null;
  lastClientRef = '';

  payments: Transaction[] = [];
  loadingPayments = false;

  senderErr = ''; receiverErr = ''; amountErr = ''; referenceErr = '';

  form: P2PPaymentRequest = {
    clientReference: '', senderAccountNumber: '',
    receiverAccountNumber: '', amount: 0, currency: 'NAD', reference: ''
  };

  private userId?: number;

  constructor(private accountService: AccountService, private authService: AuthService) {}

  ngOnInit(): void {
    this.generateClientReference();
    const user = this.authService.getCurrentUser();
    if (user?.userId) {
      this.userId = user.userId;
      this.accountService.getAccountsByUser(user.userId).subscribe({
        next: (accounts) => { this.accounts = accounts; }
      });
      this.loadPayments();
    }
  }

  loadPayments(): void {
    if (!this.userId) return;
    this.loadingPayments = true;
    this.accountService.getPaymentsByUser(this.userId).subscribe({
      next: (p) => { this.payments = p; this.loadingPayments = false; },
      error: () => { this.loadingPayments = false; }
    });
  }

  get totalSent(): number {
    return this.payments.filter(p => !p.credit).reduce((s, p) => s + p.amount, 0);
  }

  generateClientReference(): void {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const d = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}`;
    this.form.clientReference = `REF-${d}-${String(Math.floor(Math.random() * 9000) + 1000)}`;
  }

  validate(): boolean {
    this.senderErr = this.receiverErr = this.amountErr = this.referenceErr = '';
    let valid = true;

    if (!this.form.senderAccountNumber) { this.senderErr = 'Please select a sender account.'; valid = false; }
    if (!this.form.receiverAccountNumber) {
      this.receiverErr = 'Receiver account number is required.'; valid = false;
    } else if (!/^[A-Za-z0-9]+$/.test(this.form.receiverAccountNumber)) {
      this.receiverErr = 'Account number must contain letters and digits only (e.g. FNB4569299567).'; valid = false;
    } else if (this.form.receiverAccountNumber.length < 10) {
      this.receiverErr = 'Account number must be at least 10 characters.'; valid = false;
    } else if (this.form.receiverAccountNumber.toUpperCase() === this.form.senderAccountNumber.toUpperCase()) {
      this.receiverErr = 'Sender and receiver cannot be the same account.'; valid = false;
    }
    if (!this.form.amount || this.form.amount <= 0) { this.amountErr = 'Amount must be greater than 0.'; valid = false; }
    if (!this.form.reference?.trim()) {
      this.referenceErr = 'Payment reference is required.'; valid = false;
    } else if (this.form.reference.length > 50) {
      this.referenceErr = 'Reference must not exceed 50 characters.'; valid = false;
    }
    return valid;
  }

  onSubmit(form: any): void {
    if (!this.validate()) return;
    this.loading = true; this.result = null;
    this.lastClientRef = this.form.clientReference;

    this.accountService.p2pPayment({ ...this.form, amount: Number(this.form.amount), currency: 'NAD', reference: this.form.reference.trim() }).subscribe({
      next: (res) => {
        this.result = res; this.loading = false;
        if (res.status === 'SUCCESS') { this.generateClientReference(); this.loadPayments(); }
      },
      error: (err) => {
        this.result = err.error ?? { status: 'FAILED', errorCode: 'ERR006', transactionId: null, message: 'An unexpected error occurred.' };
        this.loading = false;
      }
    });
  }

  resetForm(): void {
    this.form = { clientReference: '', senderAccountNumber: '', receiverAccountNumber: '', amount: 0, currency: 'NAD', reference: '' };
    this.senderErr = this.receiverErr = this.amountErr = this.referenceErr = '';
    this.result = null;
    this.generateClientReference();
  }

  newPayment(): void {
    this.result = null; this.generateClientReference();
    this.form.receiverAccountNumber = ''; this.form.amount = 0; this.form.reference = '';
  }

  statusClass(status: string): string {
    return { COMPLETED: 'success', PENDING: 'warning', FAILED: 'danger', REVERSED: 'info' }[status] ?? 'info';
  }
}
