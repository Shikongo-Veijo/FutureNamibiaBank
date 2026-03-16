import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { Account, OpenAccountRequest } from '../../models/account.model';

@Component({
  selector: 'fnb-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">
      <div class="page-header">
        <div>
          <h1>My Accounts</h1>
          <p class="text-muted">Manage your bank accounts</p>
        </div>
        <button class="btn btn-primary" (click)="openModal()">
          <span class="material-icons">add</span>
          Open New Account
        </button>
      </div>

      <div *ngIf="loading" class="loading-container">
        <div class="spinner-lg"></div>
      </div>

      <div *ngIf="!loading" class="accounts-grid">
        <div class="account-card-full" *ngFor="let account of accounts">
          <div class="card-header-strip" [class]="'type-' + account.accountType.toLowerCase()">
            <span>{{ account.accountType }} ACCOUNT</span>
            <span class="material-icons">{{ getAccountIcon(account.accountType) }}</span>
          </div>
          <div class="card-body">
            <div class="card-row">
              <span class="card-label">Account Number</span>
              <span class="card-value monospace">{{ account.accountNumber }}</span>
            </div>
            <div class="card-row">
              <span class="card-label">Currency</span>
              <span class="card-value">{{ account.currency }}</span>
            </div>
            <div class="card-row">
              <span class="card-label">Status</span>
              <span class="badge" [class]="account.active ? 'badge-success' : 'badge-danger'">
                {{ account.active ? 'Active' : 'Inactive' }}
              </span>
            </div>
            <div class="balance-display">
              <span class="balance-label">Available Balance</span>
              <span class="balance-amount">N$ {{ account.balance | number:'1.2-2' }}</span>
            </div>
          </div>
        </div>

        <div class="empty-card" *ngIf="accounts.length === 0">
          <span class="material-icons">account_balance</span>
          <h3>No Accounts Yet</h3>
          <p>Open your first account to get started</p>
          <button class="btn btn-primary" (click)="openModal()">Open Account</button>
        </div>
      </div>

      <!-- OPEN ACCOUNT MODAL -->
      <div class="modal-overlay" *ngIf="showOpenModal" (click)="closeModal()">
        <div class="modal" (click)="$event.stopPropagation()">

          <div class="modal-header">
            <div class="modal-title-group">
              <span class="material-icons">account_balance</span>
              <h3>Open New Account</h3>
            </div>
            <button class="modal-close" (click)="closeModal()">
              <span class="material-icons">close</span>
            </button>
          </div>

          <!-- Steps -->
          <div class="steps">
            <div class="step" [class.active]="step===1" [class.done]="step>1">
              <span class="step-num">{{ step > 1 ? '✓' : '1' }}</span>
              <span class="step-label">Personal Info</span>
            </div>
            <div class="step-line"></div>
            <div class="step" [class.active]="step===2" [class.done]="step>2">
              <span class="step-num">{{ step > 2 ? '✓' : '2' }}</span>
              <span class="step-label">Identity</span>
            </div>
            <div class="step-line"></div>
            <div class="step" [class.active]="step===3">
              <span class="step-num">3</span>
              <span class="step-label">Account Type</span>
            </div>
          </div>

          <div class="modal-body">
            <div *ngIf="modalError"   class="alert alert-danger"><span class="material-icons">error</span>{{ modalError }}</div>
            <div *ngIf="modalSuccess" class="alert alert-success"><span class="material-icons">check_circle</span>{{ modalSuccess }}</div>

            <!-- STEP 1: Personal Info -->
            <div *ngIf="step===1" class="step-content">
              <p class="step-desc">Please provide your personal details as they appear on your identity document.</p>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">First Name <span class="req">*</span></label>
                  <div class="input-wrap" [class.wrap-invalid]="errs.firstName">
                    <span class="material-icons">person</span>
                    <input type="text" class="form-control" [(ngModel)]="form.firstName" placeholder="e.g. John">
                  </div>
                  <small class="err-msg" *ngIf="errs.firstName">{{ errs.firstName }}</small>
                </div>
                <div class="form-group">
                  <label class="form-label">Last Name <span class="req">*</span></label>
                  <div class="input-wrap" [class.wrap-invalid]="errs.lastName">
                    <span class="material-icons">person</span>
                    <input type="text" class="form-control" [(ngModel)]="form.lastName" placeholder="e.g. Doe">
                  </div>
                  <small class="err-msg" *ngIf="errs.lastName">{{ errs.lastName }}</small>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Date of Birth <span class="req">*</span></label>
                  <div class="input-wrap" [class.wrap-invalid]="errs.dateOfBirth">
                    <span class="material-icons">cake</span>
                    <input type="date" class="form-control" [(ngModel)]="form.dateOfBirth" [max]="maxDob">
                  </div>
                  <small class="err-msg" *ngIf="errs.dateOfBirth">{{ errs.dateOfBirth }}</small>
                </div>
                <div class="form-group">
                  <label class="form-label">Gender <span class="req">*</span></label>
                  <div class="input-wrap" [class.wrap-invalid]="errs.gender">
                    <span class="material-icons">wc</span>
                    <select class="form-control" [(ngModel)]="form.gender">
                      <option value="">-- Select --</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <small class="err-msg" *ngIf="errs.gender">{{ errs.gender }}</small>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Email Address <span class="req">*</span></label>
                <div class="input-wrap" [class.wrap-invalid]="errs.email">
                  <span class="material-icons">email</span>
                  <input type="email" class="form-control" [(ngModel)]="form.email" placeholder="e.g. john@example.com">
                </div>
                <small class="err-msg" *ngIf="errs.email">{{ errs.email }}</small>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Mobile Number <span class="req">*</span></label>
                  <div class="input-wrap" [class.wrap-invalid]="errs.phoneNumber">
                    <span class="material-icons">phone</span>
                    <input type="tel" class="form-control" [(ngModel)]="form.phoneNumber" placeholder="+264 81 000 0000">
                  </div>
                  <small class="err-msg" *ngIf="errs.phoneNumber">{{ errs.phoneNumber }}</small>
                </div>
                <div class="form-group">
                  <label class="form-label">Nationality <span class="req">*</span></label>
                  <div class="input-wrap" [class.wrap-invalid]="errs.nationality">
                    <span class="material-icons">flag</span>
                    <input type="text" class="form-control" [(ngModel)]="form.nationality" placeholder="e.g. Namibian">
                  </div>
                  <small class="err-msg" *ngIf="errs.nationality">{{ errs.nationality }}</small>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Street Address <span class="req">*</span></label>
                <div class="input-wrap" [class.wrap-invalid]="errs.address">
                  <span class="material-icons">home</span>
                  <input type="text" class="form-control" [(ngModel)]="form.address" placeholder="e.g. 12 Independence Ave, Windhoek">
                </div>
                <small class="err-msg" *ngIf="errs.address">{{ errs.address }}</small>
              </div>
            </div>

            <!-- STEP 2: Identity -->
            <div *ngIf="step===2" class="step-content">
              <p class="step-desc">Provide your national ID or passport number for KYC verification.</p>
              <div class="form-group">
                <label class="form-label">National ID / Passport Number <span class="req">*</span></label>
                <div class="input-wrap" [class.wrap-invalid]="errs.idNumber">
                  <span class="material-icons">badge</span>
                  <input type="text" class="form-control" [(ngModel)]="form.idNumber" placeholder="e.g. 00010100163 or N12345678">
                </div>
                <small class="err-msg"   *ngIf="errs.idNumber">{{ errs.idNumber }}</small>
                <small class="form-hint">Enter your Namibian ID (11 digits) or passport number.</small>
              </div>

              <div class="summary-box">
                <h4><span class="material-icons">person</span>Personal Details Summary</h4>
                <div class="summary-row"><span>Full Name</span><span>{{ form.firstName }} {{ form.lastName }}</span></div>
                <div class="summary-row"><span>Date of Birth</span><span>{{ form.dateOfBirth }}</span></div>
                <div class="summary-row"><span>Gender</span><span>{{ form.gender }}</span></div>
                <div class="summary-row"><span>Nationality</span><span>{{ form.nationality }}</span></div>
                <div class="summary-row"><span>Email</span><span>{{ form.email }}</span></div>
                <div class="summary-row"><span>Mobile</span><span>{{ form.phoneNumber }}</span></div>
                <div class="summary-row"><span>Address</span><span>{{ form.address }}</span></div>
              </div>
            </div>

            <!-- STEP 3: Account Type -->
            <div *ngIf="step===3" class="step-content">
              <p class="step-desc">Select the type of account you would like to open.</p>
              <div class="account-types">
                <div class="account-type-card" *ngFor="let t of accountTypes"
                  [class.selected]="form.accountType === t.value"
                  (click)="form.accountType = t.value">
                  <span class="material-icons type-icon">{{ t.icon }}</span>
                  <div class="type-text">
                    <strong>{{ t.label }}</strong>
                    <p>{{ t.description }}</p>
                  </div>
                  <span class="material-icons check-icon" *ngIf="form.accountType === t.value">check_circle</span>
                </div>
              </div>
              <small class="err-msg" *ngIf="errs.accountType">{{ errs.accountType }}</small>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-outline" (click)="step > 1 ? step = step - 1 : closeModal()" [disabled]="opening">
              <span class="material-icons">{{ step > 1 ? 'arrow_back' : 'close' }}</span>
              {{ step > 1 ? 'Back' : 'Cancel' }}
            </button>
            <button class="btn btn-primary" (click)="nextStep()" [disabled]="opening">
              <span class="spinner" *ngIf="opening"></span>
              <span class="material-icons" *ngIf="!opening && step < 3">arrow_forward</span>
              <span class="material-icons" *ngIf="!opening && step === 3">check</span>
              {{ opening ? 'Opening…' : step < 3 ? 'Next' : 'Open Account' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 88px 24px 32px; max-width: 1200px; margin: 0 auto; }
    .page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
    .page-header h1 { font-size: 24px; margin: 0 0 4px; font-weight: 700; color: var(--fnb-gray-800); }
    .text-muted { color: var(--fnb-gray-500); font-size: 14px; margin: 0; }
    .loading-container { display: flex; justify-content: center; padding: 80px; }
    .spinner-lg { width: 36px; height: 36px; border: 3px solid var(--fnb-gray-200); border-top-color: var(--fnb-primary); border-radius: 50%; animation: spin 0.8s linear infinite; }

    .accounts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
    .account-card-full { background: var(--fnb-white); border-radius: 12px; overflow: hidden; box-shadow: var(--fnb-shadow); transition: 0.2s; }
    .account-card-full:hover { box-shadow: var(--fnb-shadow-md); transform: translateY(-2px); }
    .card-header-strip { padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; font-weight: 700; letter-spacing: 1px; color: white; }
    .type-savings       { background: var(--fnb-primary); }
    .type-current       { background: #3b82f6; }
    .type-business      { background: #8b5cf6; }
    .type-fixed_deposit { background: #f59e0b; }
    .card-body { padding: 20px; }
    .card-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--fnb-gray-100); }
    .card-label { font-size: 12px; color: var(--fnb-gray-500); }
    .card-value { font-size: 13px; font-weight: 500; color: var(--fnb-gray-800); }
    .monospace { font-family: monospace; letter-spacing: 0.5px; }
    .balance-display { margin-top: 16px; padding: 14px; background: var(--fnb-primary-pale); border-radius: 8px; }
    .balance-label { font-size: 12px; color: var(--fnb-primary); display: block; margin-bottom: 4px; }
    .balance-amount { font-size: 22px; font-weight: 700; color: var(--fnb-primary); }
    .badge { padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; }
    .badge-success { background: #dcfce7; color: #15803d; }
    .badge-danger  { background: #fee2e2; color: #dc2626; }
    .empty-card { grid-column: 1/-1; display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 60px; background: var(--fnb-white); border-radius: 12px; box-shadow: var(--fnb-shadow); color: var(--fnb-gray-400); text-align: center; }
    .empty-card .material-icons { font-size: 56px; }
    .empty-card h3 { color: var(--fnb-gray-600); margin: 0; }
    .empty-card p { margin: 0; }

    .btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 18px; border-radius: 8px; font-size: 14px; font-weight: 600; cursor: pointer; border: none; transition: 0.2s; }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-primary { background: var(--fnb-primary); color: white; }
    .btn-primary:hover:not(:disabled) { filter: brightness(1.08); }
    .btn-outline { background: transparent; color: var(--fnb-primary); border: 1.5px solid var(--fnb-primary); }
    .btn-outline:hover:not(:disabled) { background: var(--fnb-primary-pale); }
    .spinner { width: 15px; height: 15px; border: 2px solid rgba(255,255,255,.4); border-top-color: white; border-radius: 50%; animation: spin .7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }

    .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.55); display: flex; align-items: center; justify-content: center; z-index: 2000; padding: 20px; }
    .modal { background: var(--fnb-white); border-radius: 14px; width: 100%; max-width: 580px; max-height: 92vh; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,.2); display: flex; flex-direction: column; }
    .modal-header { display: flex; justify-content: space-between; align-items: center; padding: 18px 24px; border-bottom: 1px solid var(--fnb-gray-100); flex-shrink: 0; }
    .modal-title-group { display: flex; align-items: center; gap: 10px; }
    .modal-title-group .material-icons { color: var(--fnb-primary); }
    .modal-title-group h3 { margin: 0; font-size: 17px; font-weight: 700; color: var(--fnb-gray-800); }
    .modal-close { background: none; border: none; cursor: pointer; color: var(--fnb-gray-400); padding: 4px; border-radius: 6px; display: flex; }
    .modal-close:hover { background: var(--fnb-gray-100); }
    .modal-body { padding: 24px; flex: 1; overflow-y: auto; }
    .modal-footer { display: flex; gap: 12px; justify-content: flex-end; padding: 14px 24px; border-top: 1px solid var(--fnb-gray-100); flex-shrink: 0; }

    .steps { display: flex; align-items: flex-start; padding: 14px 24px; background: var(--fnb-gray-50, #f9fafb); border-bottom: 1px solid var(--fnb-gray-100); flex-shrink: 0; }
    .step { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .step-num { width: 26px; height: 26px; border-radius: 50%; background: var(--fnb-gray-200); color: var(--fnb-gray-500); font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; transition: .2s; }
    .step.active .step-num { background: var(--fnb-primary); color: white; }
    .step.done   .step-num { background: #16a34a; color: white; }
    .step-label { font-size: 10px; color: var(--fnb-gray-500); font-weight: 500; white-space: nowrap; }
    .step.active .step-label { color: var(--fnb-primary); font-weight: 700; }
    .step-line { flex: 1; height: 2px; background: var(--fnb-gray-200); margin: 0 8px; margin-bottom: 14px; }

    .step-content { display: flex; flex-direction: column; gap: 16px; }
    .step-desc { font-size: 13px; color: var(--fnb-gray-600); margin: 0; background: var(--fnb-secondary, #e8f4e8); padding: 10px 14px; border-radius: 8px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    @media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
    .form-group { display: flex; flex-direction: column; gap: 4px; }
    .form-label { font-size: 12px; font-weight: 600; color: var(--fnb-gray-700); }
    .req { color: #ef4444; }
    .input-wrap { display: flex; align-items: center; gap: 8px; border: 1.5px solid var(--fnb-gray-200); border-radius: 8px; padding: 0 10px; background: white; transition: border-color .2s; }
    .input-wrap:focus-within { border-color: var(--fnb-primary); }
    .wrap-invalid { border-color: #ef4444 !important; }
    .input-wrap .material-icons { color: var(--fnb-gray-400); font-size: 17px; flex-shrink: 0; }
    .form-control { flex: 1; border: none; outline: none; font-size: 13px; padding: 10px 0; background: transparent; color: var(--fnb-gray-800); font-family: inherit; width: 100%; }
    select.form-control { cursor: pointer; }
    .err-msg   { font-size: 11px; color: #dc2626; }
    .form-hint { font-size: 11px; color: var(--fnb-gray-400); }

    .summary-box { background: var(--fnb-gray-50, #f9fafb); border: 1px solid var(--fnb-gray-200); border-radius: 10px; padding: 14px 16px; }
    .summary-box h4 { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; color: var(--fnb-primary); margin: 0 0 10px; }
    .summary-box h4 .material-icons { font-size: 15px; }
    .summary-row { display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 1px solid var(--fnb-gray-100); font-size: 12px; }
    .summary-row:last-child { border-bottom: none; }
    .summary-row span:first-child { color: var(--fnb-gray-500); }
    .summary-row span:last-child  { color: var(--fnb-gray-800); font-weight: 500; text-align: right; max-width: 58%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    .account-types { display: flex; flex-direction: column; gap: 10px; }
    .account-type-card { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border: 2px solid var(--fnb-gray-200); border-radius: 10px; cursor: pointer; transition: .2s; }
    .account-type-card:hover { border-color: var(--fnb-primary); background: var(--fnb-primary-pale); }
    .account-type-card.selected { border-color: var(--fnb-primary); background: var(--fnb-primary-pale); }
    .type-icon { font-size: 26px; color: var(--fnb-primary); flex-shrink: 0; }
    .type-text { flex: 1; }
    .type-text strong { font-size: 13px; color: var(--fnb-gray-800); display: block; margin-bottom: 2px; }
    .type-text p { font-size: 12px; color: var(--fnb-gray-500); margin: 0; }
    .check-icon { color: var(--fnb-primary); font-size: 20px; }

    .alert { display: flex; align-items: center; gap: 8px; padding: 10px 14px; border-radius: 8px; font-size: 13px; margin-bottom: 16px; }
    .alert .material-icons { font-size: 18px; }
    .alert-danger  { background: #fee2e2; color: #dc2626; }
    .alert-success { background: #dcfce7; color: #15803d; }
  `]
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  loading = false;
  showOpenModal = false;
  opening = false;
  modalError = '';
  modalSuccess = '';
  step = 1;

  maxDob = new Date(new Date().setFullYear(new Date().getFullYear() - 18))
    .toISOString().split('T')[0];

  accountTypes = [
    { value: 'SAVINGS',       label: 'Savings Account',  icon: 'savings',         description: 'Earn interest on savings. Ideal for personal goals.' },
    { value: 'CURRENT',       label: 'Current Account',  icon: 'account_balance', description: 'Flexible daily-use account with unlimited transactions.' },
    { value: 'BUSINESS',      label: 'Business Account', icon: 'business',        description: 'Designed for business operations and payroll.' },
    { value: 'FIXED_DEPOSIT', label: 'Fixed Deposit',    icon: 'lock',            description: 'Lock funds for a period and earn higher interest.' },
  ];

  form: OpenAccountRequest = this.emptyForm();
  errs: Partial<Record<keyof OpenAccountRequest, string>> = {};
  user = this.authService.getCurrentUser();

  constructor(private authService: AuthService, private accountService: AccountService) {}

  ngOnInit(): void { this.loadAccounts(); }

  loadAccounts(): void {
    if (!this.user) return;
    this.loading = true;
    this.accountService.getAccountsByUser(this.user.userId).subscribe({
      next: (a) => { this.accounts = a; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  openModal(): void {
    this.form = this.emptyForm();
    if (this.user) {
      this.form.firstName = this.user.firstName || '';
      this.form.lastName  = this.user.lastName  || '';
      this.form.email     = this.user.email     || '';
    }
    this.errs = {};
    this.step = 1;
    this.modalError = this.modalSuccess = '';
    this.showOpenModal = true;
  }

  nextStep(): void {
    if (!this.validateStep()) return;
    if (this.step < 3) { this.step++; return; }
    this.submitForm();
  }

  validateStep(): boolean {
    this.errs = {};
    if (this.step === 1) {
      if (!this.form.firstName?.trim())   this.errs.firstName   = 'First name is required.';
      if (!this.form.lastName?.trim())    this.errs.lastName    = 'Last name is required.';
      if (!this.form.dateOfBirth)         this.errs.dateOfBirth = 'Date of birth is required.';
      if (!this.form.gender)              this.errs.gender      = 'Gender is required.';
      if (!this.form.email?.trim())       this.errs.email       = 'Email address is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email))
                                          this.errs.email       = 'Enter a valid email address.';
      if (!this.form.phoneNumber?.trim()) this.errs.phoneNumber = 'Mobile number is required.';
      if (!this.form.nationality?.trim()) this.errs.nationality = 'Nationality is required.';
      if (!this.form.address?.trim())     this.errs.address     = 'Street address is required.';
    }
    if (this.step === 2) {
      if (!this.form.idNumber?.trim())    this.errs.idNumber    = 'ID / Passport number is required.';
    }
    if (this.step === 3) {
      if (!this.form.accountType)         this.errs.accountType = 'Please select an account type.';
    }
    return Object.keys(this.errs).length === 0;
  }

  submitForm(): void {
    if (!this.user) return;
    this.opening = true;
    this.modalError = '';
    this.accountService.createAccount(this.user.userId, this.form).subscribe({
      next: (account) => {
        this.accounts.push(account);
        this.modalSuccess = `${account.accountType} account opened! Account No: ${account.accountNumber}`;
        this.opening = false;
        setTimeout(() => this.closeModal(), 3000);
      },
      error: (err) => {
        this.modalError = err.error?.message || 'Failed to open account. Please try again.';
        this.opening = false;
      }
    });
  }

  closeModal(): void {
    this.showOpenModal = false;
    this.errs = {};
    this.modalError = this.modalSuccess = '';
    this.step = 1;
  }

  private emptyForm(): OpenAccountRequest {
    return { accountType:'', firstName:'', lastName:'', dateOfBirth:'',
             gender:'', nationality:'', idNumber:'', email:'', phoneNumber:'', address:'' };
  }

  getAccountIcon(type: string): string {
    return ({ SAVINGS:'savings', CURRENT:'account_balance', BUSINESS:'business', FIXED_DEPOSIT:'lock' } as Record<string,string>)[type] || 'account_balance';
  }
}
