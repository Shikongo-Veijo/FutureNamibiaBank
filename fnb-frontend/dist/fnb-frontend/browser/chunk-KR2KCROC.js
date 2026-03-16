import {
  RouterLink
} from "./chunk-SPEQUCMQ.js";
import {
  AccountService
} from "./chunk-53PK2IHO.js";
import {
  AuthService,
  CommonModule,
  CurrencyPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-4RVPYBMO.js";

// src/app/components/dashboard/dashboard.component.ts
function DashboardComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading accounts...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 5);
    \u0275\u0275text(2, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No accounts found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 28);
    \u0275\u0275text(6, "Open Account");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 34)(6, "span", 35);
    \u0275\u0275text(7, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const account_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + account_r1.accountType.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", account_r1.accountType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(account_r1.accountNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 6, account_r1.balance, "NAD ", "symbol", "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(account_r1.currency);
  }
}
function DashboardComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, DashboardComponent_div_59_div_1_Template, 13, 11, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.accounts);
  }
}
function DashboardComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading transactions...");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 5);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No transactions yet");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_div_68_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 42)(5, "p", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 44);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 45);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "span", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tx_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("tx-" + tx_r3.transactionType.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getTransactionIcon(tx_r3.transactionType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r3.description || tx_r3.transactionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r3.referenceNumber);
    \u0275\u0275advance();
    \u0275\u0275classProp("credit", ctx_r1.isCredit(tx_r3))("debit", !ctx_r1.isCredit(tx_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.isCredit(tx_r3) ? "+" : "-", "", \u0275\u0275pipeBind4(11, 14, tx_r3.amount, "NAD ", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap("badge-" + ctx_r1.getStatusClass(tx_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r3.status);
  }
}
function DashboardComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, DashboardComponent_div_68_div_1_Template, 15, 19, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.recentTransactions.slice(0, 5));
  }
}
var DashboardComponent = class _DashboardComponent {
  get greeting() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return "Morning";
    if (hour < 17)
      return "Afternoon";
    return "Evening";
  }
  constructor(authService, accountService) {
    this.authService = authService;
    this.accountService = accountService;
    this.user = this.authService.getCurrentUser();
    this.accounts = [];
    this.recentTransactions = [];
    this.loadingAccounts = false;
    this.loadingTransactions = false;
  }
  ngOnInit() {
    if (this.user) {
      this.loadAccounts();
    }
  }
  loadAccounts() {
    this.loadingAccounts = true;
    this.accountService.getAccountsByUser(this.user.userId).subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        this.loadingAccounts = false;
        if (accounts.length > 0) {
          this.loadTransactions(accounts[0].id);
        }
      },
      error: () => {
        this.loadingAccounts = false;
      }
    });
  }
  loadTransactions(accountId) {
    this.loadingTransactions = true;
    this.accountService.getTransactions(accountId).subscribe({
      next: (txns) => {
        this.recentTransactions = txns;
        this.loadingTransactions = false;
      },
      error: () => {
        this.loadingTransactions = false;
      }
    });
  }
  getTotalBalance() {
    return this.accounts.reduce((sum, acc) => sum + acc.balance, 0);
  }
  getTransactionIcon(type) {
    const icons = {
      TRANSFER: "swap_horiz",
      DEPOSIT: "add_circle",
      WITHDRAWAL: "remove_circle",
      PAYMENT: "payment"
    };
    return icons[type] || "receipt";
  }
  isCredit(tx) {
    return tx.transactionType === "DEPOSIT";
  }
  getStatusClass(status) {
    const classes = {
      COMPLETED: "success",
      PENDING: "warning",
      FAILED: "danger",
      REVERSED: "info"
    };
    return classes[status] || "info";
  }
  static {
    this.\u0275fac = function DashboardComponent_Factory(t) {
      return new (t || _DashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["fnb-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 69, vars: 16, consts: [[1, "dashboard"], [1, "dashboard-header"], [1, "text-muted"], [1, "header-actions"], ["routerLink", "/transactions", 1, "btn", "btn-primary"], [1, "material-icons"], [1, "summary-grid"], [1, "summary-card", "primary"], [1, "summary-icon"], [1, "summary-info"], [1, "summary-label"], [1, "summary-value"], [1, "summary-card", "secondary"], [1, "summary-card", "success"], [1, "summary-card", "info"], [1, "dashboard-body"], [1, "section", "accounts-section"], [1, "section-header"], ["routerLink", "/accounts", 1, "btn", "btn-outline", "btn-sm"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "accounts-list", 4, "ngIf"], [1, "section", "transactions-section"], ["routerLink", "/transactions", 1, "btn", "btn-outline", "btn-sm"], ["class", "transactions-list", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "empty-state"], ["routerLink", "/accounts", 1, "btn", "btn-primary", "btn-sm"], [1, "accounts-list"], ["class", "account-card", 4, "ngFor", "ngForOf"], [1, "account-card"], [1, "account-type-badge"], [1, "account-number"], [1, "account-balance"], [1, "balance-label"], [1, "balance-amount"], [1, "account-currency"], [1, "transactions-list"], ["class", "transaction-row", 4, "ngFor", "ngForOf"], [1, "transaction-row"], [1, "tx-icon"], [1, "tx-details"], [1, "tx-desc"], [1, "tx-ref"], [1, "tx-amount"], [1, "badge"]], template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Here's your financial overview");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "a", 4)(9, "span", 5);
        \u0275\u0275text(10, "swap_horiz");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, " New Transfer ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "span", 5);
        \u0275\u0275text(16, "account_balance_wallet");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9)(18, "p", 10);
        \u0275\u0275text(19, "Total Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p", 11);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "currency");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 12)(24, "div", 8)(25, "span", 5);
        \u0275\u0275text(26, "credit_card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 9)(28, "p", 10);
        \u0275\u0275text(29, "Active Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 11);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 13)(33, "div", 8)(34, "span", 5);
        \u0275\u0275text(35, "trending_up");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 9)(37, "p", 10);
        \u0275\u0275text(38, "Completed Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p", 11);
        \u0275\u0275text(40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 14)(42, "div", 8)(43, "span", 5);
        \u0275\u0275text(44, "account_circle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 9)(46, "p", 10);
        \u0275\u0275text(47, "Account Status");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 11);
        \u0275\u0275text(49, "Active");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(50, "div", 15)(51, "div", 16)(52, "div", 17)(53, "h2");
        \u0275\u0275text(54, "My Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "a", 18);
        \u0275\u0275text(56, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(57, DashboardComponent_div_57_Template, 4, 0, "div", 19)(58, DashboardComponent_div_58_Template, 7, 0, "div", 20)(59, DashboardComponent_div_59_Template, 2, 1, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 22)(61, "div", 17)(62, "h2");
        \u0275\u0275text(63, "Recent Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "a", 23);
        \u0275\u0275text(65, "View All");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(66, DashboardComponent_div_66_Template, 4, 0, "div", 19)(67, DashboardComponent_div_67_Template, 5, 0, "div", 20)(68, DashboardComponent_div_68_Template, 2, 1, "div", 24);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("Good ", ctx.greeting, ", ", ctx.user == null ? null : ctx.user.firstName, "!");
        \u0275\u0275advance(17);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(22, 11, ctx.getTotalBalance(), "NAD ", "symbol", "1.2-2"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.accounts.length);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.recentTransactions.length);
        \u0275\u0275advance(17);
        \u0275\u0275property("ngIf", ctx.loadingAccounts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingAccounts && ctx.accounts.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingAccounts && ctx.accounts.length > 0);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loadingTransactions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingTransactions && ctx.recentTransactions.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingTransactions && ctx.recentTransactions.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, CurrencyPipe, RouterLink], styles: ["\n\n.dashboard[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n}\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 4px;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 32px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  background: var(--fnb-white);\n  border-radius: var(--fnb-radius-lg);\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: var(--fnb-shadow);\n}\n.summary-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.summary-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.summary-card.primary[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: var(--fnb-primary-pale);\n  color: var(--fnb-primary);\n}\n.summary-card.secondary[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: var(--fnb-secondary-pale);\n  color: var(--fnb-secondary-dark);\n}\n.summary-card.success[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--fnb-success);\n}\n.summary-card.info[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: var(--fnb-info);\n}\n.summary-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-500);\n  margin-bottom: 4px;\n}\n.summary-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--fnb-gray-800);\n}\n.dashboard-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.section[_ngcontent-%COMP%] {\n  background: var(--fnb-white);\n  border-radius: var(--fnb-radius-lg);\n  padding: 24px;\n  box-shadow: var(--fnb-shadow);\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 32px 0;\n  color: var(--fnb-gray-400);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.accounts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.account-card[_ngcontent-%COMP%] {\n  background: var(--fnb-gray-50);\n  border-radius: var(--fnb-radius);\n  padding: 16px;\n  border-left: 4px solid var(--fnb-primary);\n}\n.account-type-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n  color: var(--fnb-primary);\n}\n.account-number[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fnb-gray-500);\n  margin-bottom: 10px;\n  font-family: monospace;\n}\n.account-balance[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.balance-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fnb-gray-400);\n}\n.balance-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: var(--fnb-gray-800);\n}\n.transactions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.transaction-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 8px;\n  border-radius: var(--fnb-radius);\n  transition: var(--fnb-transition);\n}\n.transaction-row[_ngcontent-%COMP%]:hover {\n  background: var(--fnb-gray-50);\n}\n.tx-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.tx-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.tx-transfer[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n  background: var(--fnb-primary-pale);\n}\n.tx-deposit[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-success);\n}\n.tx-withdrawal[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-danger);\n}\n.tx-payment[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-secondary-dark);\n}\n.tx-transfer[_ngcontent-%COMP%] {\n  background: var(--fnb-primary-pale);\n  color: var(--fnb-primary);\n}\n.tx-deposit[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--fnb-success);\n}\n.tx-withdrawal[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: var(--fnb-danger);\n}\n.tx-payment[_ngcontent-%COMP%] {\n  background: var(--fnb-secondary-pale);\n  color: var(--fnb-secondary-dark);\n}\n.tx-details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.tx-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--fnb-gray-700);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tx-ref[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fnb-gray-400);\n  font-family: monospace;\n}\n.tx-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.tx-amount.credit[_ngcontent-%COMP%] {\n  color: var(--fnb-success);\n}\n.tx-amount.debit[_ngcontent-%COMP%] {\n  color: var(--fnb-danger);\n}\n@media (max-width: 1024px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .dashboard-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .dashboard[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent" });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-KR2KCROC.js.map
