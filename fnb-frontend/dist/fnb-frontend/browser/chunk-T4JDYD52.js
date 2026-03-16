import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
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
  __spreadProps,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4RVPYBMO.js";

// src/app/components/p2p-payment/p2p-payment.component.ts
function P2PPaymentComponent_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const acc_r3 = ctx.$implicit;
    \u0275\u0275property("value", acc_r3.accountNumber);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", acc_r3.accountNumber, " (", acc_r3.accountType, ") \u2013 N$ ", \u0275\u0275pipeBind2(2, 4, acc_r3.balance, "1.2-2"), " ");
  }
}
function P2PPaymentComponent_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.senderErr);
  }
}
function P2PPaymentComponent_small_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.receiverErr);
  }
}
function P2PPaymentComponent_small_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.amountErr);
  }
}
function P2PPaymentComponent_small_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.referenceErr);
  }
}
function P2PPaymentComponent_span_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function P2PPaymentComponent_span_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 49);
  }
}
function P2PPaymentComponent_div_92_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275text(2, "Transaction ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.result.transactionId);
  }
}
function P2PPaymentComponent_div_92_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "span", 55);
    \u0275\u0275text(2, "Error Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.result.errorCode);
  }
}
function P2PPaymentComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 53)(7, "div", 54)(8, "span", 55);
    \u0275\u0275text(9, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 56)(11, "span", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(13, P2PPaymentComponent_div_92_div_13_Template, 5, 1, "div", 58);
    \u0275\u0275elementStart(14, "div", 54)(15, "span", 55);
    \u0275\u0275text(16, "Client Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 59);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, P2PPaymentComponent_div_92_div_19_Template, 5, 1, "div", 58);
    \u0275\u0275elementStart(20, "div", 54)(21, "span", 55);
    \u0275\u0275text(22, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 56);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 60)(26, "button", 61);
    \u0275\u0275listener("click", function P2PPaymentComponent_div_92_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.newPayment());
    });
    \u0275\u0275elementStart(27, "span", 4);
    \u0275\u0275text(28, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " New Payment ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("success", ctx_r3.result.status === "SUCCESS")("failed", ctx_r3.result.status === "FAILED");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.result.status === "SUCCESS" ? "check_circle" : "cancel");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.result.status === "SUCCESS" ? "Payment Successful" : "Payment Failed");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("success", ctx_r3.result.status === "SUCCESS")("failed", ctx_r3.result.status === "FAILED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.result.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.result.transactionId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.lastClientRef);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.result.errorCode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.result.message);
  }
}
function P2PPaymentComponent_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 8)(2, "span", 4);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "How It Works");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul", 64)(7, "li")(8, "span", 4);
    \u0275\u0275text(9, "looks_one");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "strong");
    \u0275\u0275text(12, "Select your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14, "Choose the account to send money from.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "li")(16, "span", 4);
    \u0275\u0275text(17, "looks_two");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20, "Enter receiver details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p");
    \u0275\u0275text(22, "Provide the account number of the recipient.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "li")(24, "span", 4);
    \u0275\u0275text(25, "looks_3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "strong");
    \u0275\u0275text(28, "Set amount & reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Enter the NAD amount and a payment reference.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "li")(32, "span", 4);
    \u0275\u0275text(33, "looks_4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div")(35, "strong");
    \u0275\u0275text(36, "Review & send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "p");
    \u0275\u0275text(38, "Confirm details then click Send Payment.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 65)(40, "h3");
    \u0275\u0275text(41, "Validation Rules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "ul")(43, "li");
    \u0275\u0275text(44, "Account numbers must be numeric and at least 10 digits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "li");
    \u0275\u0275text(46, "Amount must be greater than 0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "li");
    \u0275\u0275text(48, "Currency is fixed to NAD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "li");
    \u0275\u0275text(50, "Payment reference is required (max 50 characters)");
    \u0275\u0275elementEnd()()()();
  }
}
function P2PPaymentComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 68);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r3.payments.length, " payments");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("N$", \u0275\u0275pipeBind2(5, 2, ctx_r3.totalSent, "1.2-2"), " sent");
  }
}
function P2PPaymentComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275element(2, "span")(3, "span")(4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Loading payment history\u2026");
    \u0275\u0275elementEnd()();
  }
}
function P2PPaymentComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "span", 4);
    \u0275\u0275text(2, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No payment history yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Payments you send or receive will appear here");
    \u0275\u0275elementEnd()();
  }
}
function P2PPaymentComponent_div_107_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "span", 78);
    \u0275\u0275text(3, "payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 79);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 80);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 81);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 82);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementStart(15, "small");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 83);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 84)(22, "span", 85);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r6.referenceNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.fromAccountNumber || "External");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.toAccountNumber || "External");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 14, p_r6.transactionDate, "dd MMM yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 17, p_r6.transactionDate, "HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("credit", p_r6.credit)("debit", !p_r6.credit);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", p_r6.credit ? "+" : "-", "N$", \u0275\u0275pipeBind2(20, 20, p_r6.amount, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", "badge-" + ctx_r3.statusClass(p_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6.status);
  }
}
function P2PPaymentComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "span");
    \u0275\u0275text(3, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Client Ref / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "Date & Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 74);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 74);
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, P2PPaymentComponent_div_107_div_16_Template, 24, 23, "div", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r3.payments);
  }
}
var P2PPaymentComponent = class _P2PPaymentComponent {
  constructor(accountService, authService) {
    this.accountService = accountService;
    this.authService = authService;
    this.accounts = [];
    this.loading = false;
    this.result = null;
    this.lastClientRef = "";
    this.payments = [];
    this.loadingPayments = false;
    this.senderErr = "";
    this.receiverErr = "";
    this.amountErr = "";
    this.referenceErr = "";
    this.form = {
      clientReference: "",
      senderAccountNumber: "",
      receiverAccountNumber: "",
      amount: 0,
      currency: "NAD",
      reference: ""
    };
  }
  ngOnInit() {
    this.generateClientReference();
    const user = this.authService.getCurrentUser();
    if (user?.userId) {
      this.userId = user.userId;
      this.accountService.getAccountsByUser(user.userId).subscribe({
        next: (accounts) => {
          this.accounts = accounts;
        }
      });
      this.loadPayments();
    }
  }
  loadPayments() {
    if (!this.userId)
      return;
    this.loadingPayments = true;
    this.accountService.getPaymentsByUser(this.userId).subscribe({
      next: (p) => {
        this.payments = p;
        this.loadingPayments = false;
      },
      error: () => {
        this.loadingPayments = false;
      }
    });
  }
  get totalSent() {
    return this.payments.filter((p) => !p.credit).reduce((s, p) => s + p.amount, 0);
  }
  generateClientReference() {
    const now = /* @__PURE__ */ new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const d = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
    this.form.clientReference = `REF-${d}-${String(Math.floor(Math.random() * 9e3) + 1e3)}`;
  }
  validate() {
    this.senderErr = this.receiverErr = this.amountErr = this.referenceErr = "";
    let valid = true;
    if (!this.form.senderAccountNumber) {
      this.senderErr = "Please select a sender account.";
      valid = false;
    }
    if (!this.form.receiverAccountNumber) {
      this.receiverErr = "Receiver account number is required.";
      valid = false;
    } else if (!/^\d+$/.test(this.form.receiverAccountNumber)) {
      this.receiverErr = "Account number must be numeric only.";
      valid = false;
    } else if (this.form.receiverAccountNumber.length < 10) {
      this.receiverErr = "Account number must be at least 10 digits.";
      valid = false;
    } else if (this.form.receiverAccountNumber === this.form.senderAccountNumber) {
      this.receiverErr = "Sender and receiver cannot be the same account.";
      valid = false;
    }
    if (!this.form.amount || this.form.amount <= 0) {
      this.amountErr = "Amount must be greater than 0.";
      valid = false;
    }
    if (!this.form.reference?.trim()) {
      this.referenceErr = "Payment reference is required.";
      valid = false;
    } else if (this.form.reference.length > 50) {
      this.referenceErr = "Reference must not exceed 50 characters.";
      valid = false;
    }
    return valid;
  }
  onSubmit(form) {
    if (!this.validate())
      return;
    this.loading = true;
    this.result = null;
    this.lastClientRef = this.form.clientReference;
    this.accountService.p2pPayment(__spreadProps(__spreadValues({}, this.form), { amount: Number(this.form.amount), currency: "NAD", reference: this.form.reference.trim() })).subscribe({
      next: (res) => {
        this.result = res;
        this.loading = false;
        if (res.status === "SUCCESS") {
          this.generateClientReference();
          this.loadPayments();
        }
      },
      error: (err) => {
        this.result = err.error ?? { status: "FAILED", errorCode: "ERR006", transactionId: null, message: "An unexpected error occurred." };
        this.loading = false;
      }
    });
  }
  resetForm() {
    this.form = { clientReference: "", senderAccountNumber: "", receiverAccountNumber: "", amount: 0, currency: "NAD", reference: "" };
    this.senderErr = this.receiverErr = this.amountErr = this.referenceErr = "";
    this.result = null;
    this.generateClientReference();
  }
  newPayment() {
    this.result = null;
    this.generateClientReference();
    this.form.receiverAccountNumber = "";
    this.form.amount = 0;
    this.form.reference = "";
  }
  statusClass(status) {
    return { COMPLETED: "success", PENDING: "warning", FAILED: "danger", REVERSED: "info" }[status] ?? "info";
  }
  static {
    this.\u0275fac = function P2PPaymentComponent_Factory(t) {
      return new (t || _P2PPaymentComponent)(\u0275\u0275directiveInject(AccountService), \u0275\u0275directiveInject(AuthService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _P2PPaymentComponent, selectors: [["fnb-p2p-payment"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 108, vars: 35, consts: [["paymentForm", "ngForm"], [1, "page-container"], [1, "page-header"], [1, "page-title"], [1, "material-icons"], [1, "page-subtitle"], [1, "content-grid"], [1, "card", "form-card"], [1, "card-header"], [1, "payment-form", 3, "ngSubmit"], [1, "form-group"], [1, "form-label"], [1, "badge-auto"], [1, "input-readonly"], ["for", "senderAccount", 1, "form-label"], [1, "required"], [1, "select-wrapper"], ["id", "senderAccount", "name", "senderAccount", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "error-text", 4, "ngIf"], ["for", "receiverAccount", 1, "form-label"], [1, "input-wrapper"], ["id", "receiverAccount", "name", "receiverAccount", "type", "text", "placeholder", "Enter account number", "maxlength", "20", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["for", "amount", 1, "form-label"], [1, "currency-prefix"], ["id", "amount", "name", "amount", "type", "number", "placeholder", "0.00", "min", "0.01", "step", "0.01", "required", "", 1, "form-input", "with-prefix", 3, "ngModelChange", "ngModel"], [1, "badge-fixed"], ["for", "reference", 1, "form-label"], ["id", "reference", "name", "reference", "type", "text", "placeholder", "e.g. Rent payment, Lunch money", "maxlength", "50", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "input-footer"], [1, "char-count"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "material-icons", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["class", "card result-card", 4, "ngIf"], ["class", "card info-card", 4, "ngIf"], [1, "card", "history-card"], [1, "history-header"], [1, "history-title"], ["class", "history-meta", 4, "ngIf"], ["title", "Refresh", 1, "btn-refresh", 3, "click", "disabled"], ["class", "history-loading", 4, "ngIf"], ["class", "history-empty", 4, "ngIf"], ["class", "history-table", 4, "ngIf"], [3, "value"], [1, "error-text"], [1, "spinner"], [1, "card", "result-card"], [1, "result-header"], [1, "material-icons", "result-icon"], [1, "result-body"], [1, "result-row"], [1, "result-label"], [1, "result-value"], [1, "status-badge"], ["class", "result-row", 4, "ngIf"], [1, "result-value", "mono"], [1, "result-footer"], [1, "btn", "btn-outline", 3, "click"], [1, "result-value", "error-code"], [1, "card", "info-card"], [1, "info-list"], [1, "validation-rules"], [1, "history-meta"], [1, "meta-chip", "total-chip"], [1, "meta-chip", "amount-chip"], [1, "history-loading"], [1, "dot-spinner"], [1, "history-empty"], [1, "history-table"], [1, "ht-header"], [1, "text-right"], ["class", "ht-row", 4, "ngFor", "ngForOf"], [1, "ht-row"], [1, "ht-ref"], [1, "material-icons", "pay-icon"], [1, "ht-desc"], [1, "ht-acc", "from-acc"], [1, "ht-acc", "to-acc"], [1, "ht-date"], [1, "ht-amount"], [1, "ht-status"], [1, "badge", 3, "ngClass"]], template: function P2PPaymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h1", 3)(3, "span", 4);
        \u0275\u0275text(4, "send");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, " P2P Payment ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7, "Send money directly to another account");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "span", 4);
        \u0275\u0275text(12, "payments");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "h2");
        \u0275\u0275text(14, "Payment Details");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "form", 9, 0);
        \u0275\u0275listener("ngSubmit", function P2PPaymentComponent_Template_form_ngSubmit_15_listener() {
          \u0275\u0275restoreView(_r1);
          const paymentForm_r2 = \u0275\u0275reference(16);
          return \u0275\u0275resetView(ctx.onSubmit(paymentForm_r2));
        });
        \u0275\u0275elementStart(17, "div", 10)(18, "label", 11);
        \u0275\u0275text(19, " Client Reference ");
        \u0275\u0275elementStart(20, "span", 12);
        \u0275\u0275text(21, "Auto-generated");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 13)(23, "span", 4);
        \u0275\u0275text(24, "tag");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span");
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 10)(28, "label", 14);
        \u0275\u0275text(29, "Sender Account ");
        \u0275\u0275elementStart(30, "span", 15);
        \u0275\u0275text(31, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 16)(33, "span", 4);
        \u0275\u0275text(34, "account_balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function P2PPaymentComponent_Template_select_ngModelChange_35_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.senderAccountNumber, $event) || (ctx.form.senderAccountNumber = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementStart(36, "option", 18);
        \u0275\u0275text(37, "-- Select your account --");
        \u0275\u0275elementEnd();
        \u0275\u0275template(38, P2PPaymentComponent_option_38_Template, 3, 7, "option", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(39, P2PPaymentComponent_small_39_Template, 2, 1, "small", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 10)(41, "label", 21);
        \u0275\u0275text(42, "Receiver Account ");
        \u0275\u0275elementStart(43, "span", 15);
        \u0275\u0275text(44, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 22)(46, "span", 4);
        \u0275\u0275text(47, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "input", 23);
        \u0275\u0275twoWayListener("ngModelChange", function P2PPaymentComponent_Template_input_ngModelChange_48_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.receiverAccountNumber, $event) || (ctx.form.receiverAccountNumber = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(49, P2PPaymentComponent_small_49_Template, 2, 1, "small", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 10)(51, "label", 24);
        \u0275\u0275text(52, "Amount ");
        \u0275\u0275elementStart(53, "span", 15);
        \u0275\u0275text(54, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "div", 22)(56, "span", 25);
        \u0275\u0275text(57, "N$");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "input", 26);
        \u0275\u0275twoWayListener("ngModelChange", function P2PPaymentComponent_Template_input_ngModelChange_58_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.amount, $event) || (ctx.form.amount = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(59, P2PPaymentComponent_small_59_Template, 2, 1, "small", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 10)(61, "label", 11);
        \u0275\u0275text(62, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 13)(64, "span", 4);
        \u0275\u0275text(65, "currency_exchange");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "span");
        \u0275\u0275text(67, "NAD \u2013 Namibian Dollar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "span", 27);
        \u0275\u0275text(69, "Fixed");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 10)(71, "label", 28);
        \u0275\u0275text(72, "Payment Reference ");
        \u0275\u0275elementStart(73, "span", 15);
        \u0275\u0275text(74, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 22)(76, "span", 4);
        \u0275\u0275text(77, "description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "input", 29);
        \u0275\u0275twoWayListener("ngModelChange", function P2PPaymentComponent_Template_input_ngModelChange_78_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.form.reference, $event) || (ctx.form.reference = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 30);
        \u0275\u0275template(80, P2PPaymentComponent_small_80_Template, 2, 1, "small", 20);
        \u0275\u0275elementStart(81, "small", 31);
        \u0275\u0275text(82);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(83, "div", 32)(84, "button", 33);
        \u0275\u0275listener("click", function P2PPaymentComponent_Template_button_click_84_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.resetForm());
        });
        \u0275\u0275elementStart(85, "span", 4);
        \u0275\u0275text(86, "refresh");
        \u0275\u0275elementEnd();
        \u0275\u0275text(87, " Reset ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "button", 34);
        \u0275\u0275template(89, P2PPaymentComponent_span_89_Template, 2, 0, "span", 35)(90, P2PPaymentComponent_span_90_Template, 1, 0, "span", 36);
        \u0275\u0275text(91);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(92, P2PPaymentComponent_div_92_Template, 30, 15, "div", 37)(93, P2PPaymentComponent_div_93_Template, 51, 0, "div", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 39)(95, "div", 40)(96, "div", 41)(97, "span", 4);
        \u0275\u0275text(98, "history");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "h2");
        \u0275\u0275text(100, "Payment History");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(101, P2PPaymentComponent_div_101_Template, 6, 5, "div", 42);
        \u0275\u0275elementStart(102, "button", 43);
        \u0275\u0275listener("click", function P2PPaymentComponent_Template_button_click_102_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.loadPayments());
        });
        \u0275\u0275elementStart(103, "span", 4);
        \u0275\u0275text(104, "refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(105, P2PPaymentComponent_div_105_Template, 7, 0, "div", 44)(106, P2PPaymentComponent_div_106_Template, 7, 0, "div", 45)(107, P2PPaymentComponent_div_107_Template, 17, 1, "div", 46);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.form.clientReference);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("invalid", ctx.senderErr);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.senderAccountNumber);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.accounts);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.senderErr);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("invalid", ctx.receiverErr);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.receiverAccountNumber);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.receiverErr);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("invalid", ctx.amountErr);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.amount);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.amountErr);
        \u0275\u0275advance(19);
        \u0275\u0275classProp("invalid", ctx.referenceErr);
        \u0275\u0275twoWayProperty("ngModel", ctx.form.reference);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.referenceErr);
        \u0275\u0275advance();
        \u0275\u0275classProp("warn", ctx.form.reference.length > 40);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("", ctx.form.reference.length, "/50");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Processing\u2026" : "Send Payment", " ");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.result);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.result);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.payments.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loadingPayments);
        \u0275\u0275advance();
        \u0275\u0275classProp("spinning", ctx.loadingPayments);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.loadingPayments);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingPayments && ctx.payments.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loadingPayments && ctx.payments.length > 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, MinValidator, NgModel, NgForm], styles: ["\n\n.page-container[_ngcontent-%COMP%] {\n  padding: 88px 24px 40px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 24px;\n  font-weight: 700;\n  color: var(--fnb-gray-800);\n  margin: 0 0 4px;\n}\n.page-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n  font-size: 28px;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: var(--fnb-gray-500);\n  margin: 0;\n  font-size: 14px;\n}\n.content-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n@media (max-width: 900px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background: var(--fnb-white);\n  border-radius: 12px;\n  box-shadow: var(--fnb-shadow-sm);\n  border: 1px solid var(--fnb-gray-200);\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid var(--fnb-gray-100);\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--fnb-gray-800);\n}\n.card-header[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n}\n.payment-form[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--fnb-gray-700);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.required[_ngcontent-%COMP%] {\n  color: var(--fnb-danger);\n}\n.badge-auto[_ngcontent-%COMP%], .badge-fixed[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  padding: 2px 7px;\n  border-radius: 20px;\n  background: var(--fnb-secondary);\n  color: var(--fnb-gray-600);\n}\n.input-wrapper[_ngcontent-%COMP%], .input-readonly[_ngcontent-%COMP%], .select-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border: 1.5px solid var(--fnb-gray-200);\n  border-radius: 8px;\n  padding: 0 12px;\n  background: var(--fnb-white);\n  transition: border-color 0.2s;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within, .select-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--fnb-primary);\n}\n.input-readonly[_ngcontent-%COMP%] {\n  background: var(--fnb-gray-50, #f9fafb);\n  border-style: dashed;\n}\n.input-wrapper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .input-readonly[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .select-wrapper[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-gray-400);\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.currency-prefix[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--fnb-primary);\n  flex-shrink: 0;\n}\n.form-input[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 14px;\n  color: var(--fnb-gray-800);\n  background: transparent;\n  padding: 11px 0;\n  font-family: inherit;\n}\n.form-select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.input-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.error-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-danger);\n}\n.char-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-400);\n}\n.char-count.warn[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 4px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--fnb-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.1);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--fnb-gray-100);\n  color: var(--fnb-gray-700);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--fnb-gray-200);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--fnb-primary);\n  border: 1.5px solid var(--fnb-primary);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--fnb-primary-pale);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.result-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 32px 24px 20px;\n}\n.result-header.success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f0fdf4,\n      #dcfce7);\n}\n.result-header.failed[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef2f2,\n      #fee2e2);\n}\n.result-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n.result-header.success[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.result-header.failed[_ngcontent-%COMP%]   .result-icon[_ngcontent-%COMP%] {\n  color: var(--fnb-danger);\n}\n.result-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n}\n.result-header.success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.result-header.failed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--fnb-danger);\n}\n.result-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.result-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 12px;\n  padding-bottom: 14px;\n  border-bottom: 1px solid var(--fnb-gray-100);\n}\n.result-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.result-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fnb-gray-500);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.result-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fnb-gray-800);\n  font-weight: 600;\n  text-align: right;\n  word-break: break-all;\n}\n.result-value.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  letter-spacing: 0.5px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.status-badge.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.status-badge.failed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.error-code[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-family: monospace;\n  font-size: 13px;\n}\n.result-footer[_ngcontent-%COMP%] {\n  padding: 16px 24px 20px;\n  display: flex;\n  justify-content: center;\n}\n.info-card[_ngcontent-%COMP%]   .info-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 20px 24px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.info-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.info-list[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n  font-size: 22px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.info-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--fnb-gray-800);\n  display: block;\n  margin-bottom: 2px;\n}\n.info-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fnb-gray-500);\n  margin: 0;\n}\n.validation-rules[_ngcontent-%COMP%] {\n  margin: 0 24px 24px;\n  background: var(--fnb-secondary);\n  border-radius: 8px;\n  padding: 14px 16px;\n}\n.validation-rules[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--fnb-primary);\n}\n.validation-rules[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.validation-rules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-600);\n}\n.history-card[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--fnb-gray-100);\n  flex-wrap: wrap;\n}\n.history-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n}\n.history-title[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n}\n.history-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--fnb-gray-800);\n}\n.history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 20px;\n}\n.total-chip[_ngcontent-%COMP%] {\n  background: var(--fnb-primary-pale);\n  color: var(--fnb-primary);\n}\n.amount-chip[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .08);\n  color: #dc2626;\n}\n.btn-refresh[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n  border-radius: 8px;\n  color: var(--fnb-gray-400);\n  display: flex;\n  align-items: center;\n  transition: all 0.2s;\n}\n.btn-refresh[_ngcontent-%COMP%]:hover {\n  background: var(--fnb-gray-100);\n  color: var(--fnb-primary);\n}\n.btn-refresh[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: not-allowed;\n}\n.spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.history-loading[_ngcontent-%COMP%], .history-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 48px;\n  color: var(--fnb-gray-400);\n}\n.history-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.history-empty[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.dot-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.dot-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--fnb-primary);\n  animation: _ngcontent-%COMP%_dot-bounce 1.2s ease-in-out infinite;\n}\n.dot-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: .2s;\n}\n.dot-spinner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: .4s;\n}\n@keyframes _ngcontent-%COMP%_dot-bounce {\n  0%, 80%, 100% {\n    transform: scale(0.6);\n    opacity: .4;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.history-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.ht-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 140px 140px 110px 120px 100px;\n  padding: 8px 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  color: var(--fnb-gray-400);\n  border-bottom: 1px solid var(--fnb-gray-100);\n}\n.ht-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr 140px 140px 110px 120px 100px;\n  padding: 13px 20px;\n  border-bottom: 1px solid var(--fnb-gray-50);\n  align-items: center;\n  font-size: 13px;\n  transition: background 0.15s;\n}\n.ht-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.ht-row[_ngcontent-%COMP%]:hover {\n  background: var(--fnb-gray-50);\n}\n.ht-ref[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-family: monospace;\n  font-size: 11px;\n  color: var(--fnb-gray-600);\n}\n.pay-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--fnb-primary);\n  flex-shrink: 0;\n}\n.ht-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-600);\n}\n.ht-acc[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 11px;\n  padding: 3px 7px;\n  border-radius: 4px;\n  display: inline-block;\n}\n.from-acc[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .07);\n  color: #dc2626;\n}\n.to-acc[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .07);\n  color: #16a34a;\n}\n.ht-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-500);\n  line-height: 1.5;\n}\n.ht-date[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  display: block;\n}\n.ht-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  text-align: right;\n}\n.ht-amount.credit[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.ht-amount.debit[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.ht-status[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, .12);\n  color: #16a34a;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: rgba(234, 179, 8, .12);\n  color: #b45309;\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, .12);\n  color: #dc2626;\n}\n.badge-info[_ngcontent-%COMP%] {\n  background: var(--fnb-secondary-pale);\n  color: var(--fnb-secondary-dark);\n}\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 768px) {\n  .ht-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .ht-row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    padding: 14px 16px;\n    border: 1px solid var(--fnb-gray-100);\n    border-radius: 10px;\n    margin: 8px 16px;\n  }\n}\n/*# sourceMappingURL=p2p-payment.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(P2PPaymentComponent, { className: "P2PPaymentComponent" });
})();
export {
  P2PPaymentComponent
};
//# sourceMappingURL=chunk-T4JDYD52.js.map
