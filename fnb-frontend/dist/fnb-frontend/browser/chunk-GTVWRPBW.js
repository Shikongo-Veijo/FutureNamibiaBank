import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-MSETSC66.js";
import {
  AccountService
} from "./chunk-53PK2IHO.js";
import {
  AuthService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4RVPYBMO.js";

// src/app/components/transactions/transactions.component.ts
function TransactionsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.transferError);
  }
}
function TransactionsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.transferSuccess);
  }
}
function TransactionsComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r2 = ctx.$implicit;
    \u0275\u0275property("value", acc_r2.accountNumber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", acc_r2.accountNumber, " (N$", \u0275\u0275pipeBind2(2, 3, acc_r2.balance, "1.2-2"), ") ");
  }
}
function TransactionsComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 34);
  }
}
function TransactionsComponent_span_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function TransactionsComponent_option_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r3 = ctx.$implicit;
    \u0275\u0275property("value", acc_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", acc_r3.accountType, " \xB7 ", acc_r3.accountNumber, " ");
  }
}
function TransactionsComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 6);
    \u0275\u0275text(3, "south");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 37);
    \u0275\u0275text(6, "Total Credits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 39)(11, "span", 6);
    \u0275\u0275text(12, "north");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "p", 37);
    \u0275\u0275text(15, "Total Debits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 38);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 40)(20, "span", 6);
    \u0275\u0275text(21, "receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "p", 37);
    \u0275\u0275text(24, "Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 38);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("N$", \u0275\u0275pipeBind2(9, 3, ctx_r0.totalCredits, "1.2-2"), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("N$", \u0275\u0275pipeBind2(18, 6, ctx_r0.totalDebits, "1.2-2"), "");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.transactions.length);
  }
}
function TransactionsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading transactions...");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 6);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No transactions found for this account");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 6);
    \u0275\u0275text(2, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Select an account to view transactions");
    \u0275\u0275elementEnd()();
  }
}
function TransactionsComponent_div_61_div_16_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r4.fromAccountNumber);
  }
}
function TransactionsComponent_div_61_div_16_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "External");
    \u0275\u0275elementEnd();
  }
}
function TransactionsComponent_div_61_div_16_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tx_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r4.toAccountNumber);
  }
}
function TransactionsComponent_div_61_div_16_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1, "External");
    \u0275\u0275elementEnd();
  }
}
function TransactionsComponent_div_61_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49)(2, "div", 50)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 51);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 52);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 53);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 54);
    \u0275\u0275template(12, TransactionsComponent_div_61_div_16_span_12_Template, 2, 1, "span", 55)(13, TransactionsComponent_div_61_div_16_span_13_Template, 2, 0, "span", 56);
    \u0275\u0275elementStart(14, "span", 57);
    \u0275\u0275text(15, "east");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, TransactionsComponent_div_61_div_16_span_16_Template, 2, 1, "span", 58)(17, TransactionsComponent_div_61_div_16_span_17_Template, 2, 0, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 59);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275element(21, "br");
    \u0275\u0275elementStart(22, "small");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 60);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 61)(29, "span", 62);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tx_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "tx-" + tx_r4.transactionType.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getIcon(tx_r4.transactionType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r4.transactionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r4.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r4.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", tx_r4.fromAccountNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tx_r4.fromAccountNumber);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", tx_r4.toAccountNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !tx_r4.toAccountNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 19, tx_r4.transactionDate, "dd MMM yyyy"), "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 22, tx_r4.transactionDate, "HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("credit", tx_r4.credit)("debit", !tx_r4.credit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", tx_r4.credit ? "+" : "-", "N$", \u0275\u0275pipeBind2(27, 25, tx_r4.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "badge-" + ctx_r0.getStatusClass(tx_r4.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r4.status);
  }
}
function TransactionsComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 45)(2, "span");
    \u0275\u0275text(3, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "From / To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 46);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 46);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, TransactionsComponent_div_61_div_16_Template, 31, 28, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.transactions);
  }
}
var TransactionsComponent = class _TransactionsComponent {
  constructor(authService, accountService, fb) {
    this.authService = authService;
    this.accountService = accountService;
    this.fb = fb;
    this.accounts = [];
    this.transactions = [];
    this.selectedAccountId = "";
    this.loadingTransactions = false;
    this.transferring = false;
    this.transferError = "";
    this.transferSuccess = "";
    this.user = this.authService.getCurrentUser();
    this.transferForm = this.fb.group({
      sourceAccountNumber: ["", Validators.required],
      destinationAccountNumber: ["", Validators.required],
      amount: ["", [Validators.required, Validators.min(0.01)]],
      description: [""]
    });
  }
  ngOnInit() {
    if (this.user)
      this.loadAccounts();
  }
  loadAccounts() {
    this.accountService.getAccountsByUser(this.user.userId).subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        if (accounts.length > 0 && accounts[0].id) {
          this.selectedAccountId = accounts[0].id;
          this.loadTransactions(accounts[0].id);
        }
      }
    });
  }
  onAccountChange() {
    if (!this.selectedAccountId) {
      this.transactions = [];
      return;
    }
    this.loadTransactions(+this.selectedAccountId);
  }
  loadTransactions(accountId) {
    this.loadingTransactions = true;
    this.accountService.getTransactions(accountId).subscribe({
      next: (txns) => {
        this.transactions = txns;
        this.loadingTransactions = false;
      },
      error: () => {
        this.loadingTransactions = false;
      }
    });
  }
  onTransfer() {
    if (this.transferForm.invalid)
      return;
    this.transferring = true;
    this.transferError = "";
    this.transferSuccess = "";
    this.accountService.transfer(this.transferForm.value).subscribe({
      next: () => {
        this.transferSuccess = "Transfer successful!";
        this.transferring = false;
        this.transferForm.reset();
        this.loadAccounts();
      },
      error: (err) => {
        this.transferError = err.error?.message || "Transfer failed. Please try again.";
        this.transferring = false;
      }
    });
  }
  get totalCredits() {
    return this.transactions.filter((t) => t.credit).reduce((s, t) => s + t.amount, 0);
  }
  get totalDebits() {
    return this.transactions.filter((t) => !t.credit).reduce((s, t) => s + t.amount, 0);
  }
  getIcon(type) {
    const icons = {
      TRANSFER: "swap_horiz",
      DEPOSIT: "add_circle",
      WITHDRAWAL: "remove_circle",
      PAYMENT: "payment"
    };
    return icons[type] || "receipt";
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
    this.\u0275fac = function TransactionsComponent_Factory(t) {
      return new (t || _TransactionsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransactionsComponent, selectors: [["fnb-transactions"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 15, consts: [[1, "page"], [1, "page-header"], [1, "text-muted"], [1, "page-body"], [1, "transfer-panel"], [1, "panel-header"], [1, "material-icons"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], ["formControlName", "sourceAccountNumber", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "transfer-arrow"], ["type", "text", "formControlName", "destinationAccountNumber", "placeholder", "FNB0000000000", 1, "form-control"], [1, "amount-input"], [1, "currency-prefix"], ["type", "number", "formControlName", "amount", "placeholder", "0.00", "min", "0.01", "step", "0.01", 1, "form-control"], ["type", "text", "formControlName", "description", "placeholder", "Payment reference...", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "w-full", "btn-lg", 3, "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [1, "history-panel"], [1, "account-selector-inline"], [1, "form-control-sm", 3, "ngModelChange", "change", "ngModel"], ["class", "summary-row", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "transaction-table", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [3, "value"], [1, "spinner"], [1, "summary-row"], [1, "summary-card", "credit-card"], [1, "s-label"], [1, "s-value"], [1, "summary-card", "debit-card"], [1, "summary-card", "count-card"], [1, "loading-state"], [1, "spinner-lg"], [1, "empty-state"], [1, "transaction-table"], [1, "table-header"], [1, "text-right"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "table-row"], [1, "tx-type-cell"], [1, "tx-icon", 3, "ngClass"], [1, "tx-label"], [1, "ref-cell"], [1, "desc-cell"], [1, "route-cell"], ["class", "acc-chip from", 4, "ngIf"], ["class", "acc-chip none", 4, "ngIf"], [1, "material-icons", "arrow-icon"], ["class", "acc-chip to", 4, "ngIf"], [1, "date-cell"], [1, "amount-cell"], [1, "status-cell"], [1, "badge", 3, "ngClass"], [1, "acc-chip", "from"], [1, "acc-chip", "none"], [1, "acc-chip", "to"]], template: function TransactionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Transfer money and view transaction history");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "span", 6);
        \u0275\u0275text(11, "swap_horiz");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h2");
        \u0275\u0275text(13, "New Transfer");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, TransactionsComponent_div_14_Template, 2, 1, "div", 7)(15, TransactionsComponent_div_15_Template, 2, 1, "div", 8);
        \u0275\u0275elementStart(16, "form", 9);
        \u0275\u0275listener("ngSubmit", function TransactionsComponent_Template_form_ngSubmit_16_listener() {
          return ctx.onTransfer();
        });
        \u0275\u0275elementStart(17, "div", 10)(18, "label", 11);
        \u0275\u0275text(19, "From Account");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "select", 12)(21, "option", 13);
        \u0275\u0275text(22, "-- Select source account --");
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, TransactionsComponent_option_23_Template, 3, 6, "option", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 15)(25, "span", 6);
        \u0275\u0275text(26, "arrow_downward");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 10)(28, "label", 11);
        \u0275\u0275text(29, "To Account Number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 10)(32, "label", 11);
        \u0275\u0275text(33, "Amount (NAD)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 17)(35, "span", 18);
        \u0275\u0275text(36, "N$");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 10)(39, "label", 11);
        \u0275\u0275text(40, "Description (Optional)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 21);
        \u0275\u0275template(43, TransactionsComponent_span_43_Template, 1, 0, "span", 22)(44, TransactionsComponent_span_44_Template, 2, 0, "span", 23);
        \u0275\u0275text(45);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 24)(47, "div", 5)(48, "span", 6);
        \u0275\u0275text(49, "receipt_long");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "h2");
        \u0275\u0275text(51, "Transaction History");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 25)(53, "select", 26);
        \u0275\u0275twoWayListener("ngModelChange", function TransactionsComponent_Template_select_ngModelChange_53_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedAccountId, $event) || (ctx.selectedAccountId = $event);
          return $event;
        });
        \u0275\u0275listener("change", function TransactionsComponent_Template_select_change_53_listener() {
          return ctx.onAccountChange();
        });
        \u0275\u0275elementStart(54, "option", 13);
        \u0275\u0275text(55, "All Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275template(56, TransactionsComponent_option_56_Template, 2, 3, "option", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(57, TransactionsComponent_div_57_Template, 27, 9, "div", 27)(58, TransactionsComponent_div_58_Template, 4, 0, "div", 28)(59, TransactionsComponent_div_59_Template, 5, 0, "div", 29)(60, TransactionsComponent_div_60_Template, 5, 0, "div", 29)(61, TransactionsComponent_div_61_Template, 17, 1, "div", 30);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngIf", ctx.transferError);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.transferSuccess);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.transferForm);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngForOf", ctx.accounts);
        \u0275\u0275advance(19);
        \u0275\u0275property("disabled", ctx.transferring || ctx.transferForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.transferring);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.transferring);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.transferring ? "Processing..." : "Send Money", " ");
        \u0275\u0275advance(8);
        \u0275\u0275twoWayProperty("ngModel", ctx.selectedAccountId);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.accounts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.transactions.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loadingTransactions);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingTransactions && ctx.transactions.length === 0 && ctx.selectedAccountId);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingTransactions && !ctx.selectedAccountId && ctx.transactions.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingTransactions && ctx.transactions.length > 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 32px;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 4px;\n}\n.page-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 360px 1fr;\n  gap: 24px;\n  align-items: start;\n}\n.transfer-panel[_ngcontent-%COMP%], .history-panel[_ngcontent-%COMP%] {\n  background: var(--fnb-white);\n  border-radius: var(--fnb-radius-lg);\n  padding: 24px;\n  box-shadow: var(--fnb-shadow);\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--fnb-gray-100);\n  flex-wrap: wrap;\n}\n.panel-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n  font-size: 22px;\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex: 1;\n}\n.account-selector-inline[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.form-control-sm[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid var(--fnb-gray-200);\n  border-radius: var(--fnb-radius);\n  font-size: 13px;\n  outline: none;\n  background: var(--fnb-gray-50);\n  color: var(--fnb-gray-700);\n  min-width: 230px;\n}\n.transfer-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 4px 0;\n  color: var(--fnb-primary);\n}\n.amount-input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.currency-prefix[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-weight: 600;\n  color: var(--fnb-gray-500);\n  font-size: 14px;\n  z-index: 1;\n}\n.amount-input[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 32px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px;\n  border-radius: var(--fnb-radius);\n  font-size: 13px;\n}\n.summary-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.credit-card[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  color: #16a34a;\n}\n.debit-card[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  color: #dc2626;\n}\n.count-card[_ngcontent-%COMP%] {\n  background: var(--fnb-primary-pale);\n  color: var(--fnb-primary);\n}\n.s-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: .75;\n  margin-bottom: 2px;\n}\n.s-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n}\n.loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  padding: 48px;\n  color: var(--fnb-gray-400);\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--fnb-gray-200);\n  border-top-color: var(--fnb-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.transaction-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.table-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 140px 1fr 200px 90px 120px 100px;\n  padding: 8px 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  color: var(--fnb-gray-400);\n  border-bottom: 1px solid var(--fnb-gray-100);\n}\n.table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 140px 1fr 200px 90px 120px 100px;\n  padding: 13px 12px;\n  border-bottom: 1px solid var(--fnb-gray-50);\n  align-items: center;\n  font-size: 13px;\n  transition: var(--fnb-transition);\n}\n.table-row[_ngcontent-%COMP%]:hover {\n  background: var(--fnb-gray-50);\n}\n.tx-type-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.tx-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.tx-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.tx-transfer[_ngcontent-%COMP%] {\n  background: var(--fnb-primary-pale);\n  color: var(--fnb-primary);\n}\n.tx-deposit[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .12);\n  color: #16a34a;\n}\n.tx-withdrawal[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .12);\n  color: #dc2626;\n}\n.tx-payment[_ngcontent-%COMP%] {\n  background: var(--fnb-secondary-pale);\n  color: var(--fnb-secondary-dark);\n}\n.tx-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n}\n.ref-cell[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n  color: var(--fnb-gray-500);\n  word-break: break-all;\n}\n.desc-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-600);\n}\n.route-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-wrap: wrap;\n}\n.acc-chip[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 10px;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.acc-chip.from[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .08);\n  color: #dc2626;\n}\n.acc-chip.to[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .08);\n  color: #16a34a;\n}\n.acc-chip.none[_ngcontent-%COMP%] {\n  background: var(--fnb-gray-100);\n  color: var(--fnb-gray-400);\n}\n.arrow-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--fnb-gray-400);\n}\n.date-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-500);\n  line-height: 1.4;\n}\n.date-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  text-align: right;\n}\n.amount-cell.credit[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.amount-cell.debit[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.status-cell[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .12);\n  color: #16a34a;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, .12);\n  color: #b45309;\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .12);\n  color: #dc2626;\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: var(--fnb-secondary-pale);\n  color: var(--fnb-secondary-dark);\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 900px) {\n  .page-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .page[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .table-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .table-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    padding: 16px 12px;\n    border: 1px solid var(--fnb-gray-100);\n    border-radius: 10px;\n    margin-bottom: 8px;\n  }\n}\n/*# sourceMappingURL=transactions.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransactionsComponent, { className: "TransactionsComponent" });
})();
export {
  TransactionsComponent
};
//# sourceMappingURL=chunk-GTVWRPBW.js.map
