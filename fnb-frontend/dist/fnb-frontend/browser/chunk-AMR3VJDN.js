import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-MSETSC66.js";
import {
  AccountService
} from "./chunk-53PK2IHO.js";
import {
  AuthService,
  CommonModule,
  DecimalPipe,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4RVPYBMO.js";

// src/app/components/accounts/accounts.component.ts
function AccountsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9, "Account Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16)(13, "span", 17);
    \u0275\u0275text(14, "Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 19);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 16)(18, "span", 17);
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 20);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 21)(23, "span", 22);
    \u0275\u0275text(24, "Available Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 23);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const account_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("type-" + account_r1.accountType.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", account_r1.accountType, " ACCOUNT");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getAccountIcon(account_r1.accountType));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(account_r1.accountNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(account_r1.currency);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(account_r1.active ? "badge-success" : "badge-danger");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", account_r1.active ? "Active" : "Inactive", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("N$ ", \u0275\u0275pipeBind2(27, 10, account_r1.balance, "1.2-2"), "");
  }
}
function AccountsComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 4);
    \u0275\u0275text(2, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No Accounts Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Open your first account to get started");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 3);
    \u0275\u0275listener("click", function AccountsComponent_div_12_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openModal());
    });
    \u0275\u0275text(8, "Open Account");
    \u0275\u0275elementEnd()();
  }
}
function AccountsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, AccountsComponent_div_12_div_1_Template, 28, 13, "div", 11)(2, AccountsComponent_div_12_div_2_Template, 9, 0, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.accounts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.accounts.length === 0);
  }
}
function AccountsComponent_div_13_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 4);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.modalError);
  }
}
function AccountsComponent_div_13_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45)(1, "span", 4);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.modalSuccess);
  }
}
function AccountsComponent_div_13_div_32_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.firstName);
  }
}
function AccountsComponent_div_13_div_32_small_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.lastName);
  }
}
function AccountsComponent_div_13_div_32_small_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.dateOfBirth);
  }
}
function AccountsComponent_div_13_div_32_small_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.gender);
  }
}
function AccountsComponent_div_13_div_32_small_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.email);
  }
}
function AccountsComponent_div_13_div_32_small_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.phoneNumber);
  }
}
function AccountsComponent_div_13_div_32_small_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.nationality);
  }
}
function AccountsComponent_div_13_div_32_small_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.address);
  }
}
function AccountsComponent_div_13_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "p", 47);
    \u0275\u0275text(2, "Please provide your personal details as they appear on your identity document.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48)(4, "div", 49)(5, "label", 50);
    \u0275\u0275text(6, "First Name ");
    \u0275\u0275elementStart(7, "span", 51);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 52)(10, "span", 4);
    \u0275\u0275text(11, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_32_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.firstName, $event) || (ctx_r1.form.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, AccountsComponent_div_13_div_32_small_13_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 49)(15, "label", 50);
    \u0275\u0275text(16, "Last Name ");
    \u0275\u0275elementStart(17, "span", 51);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 52)(20, "span", 4);
    \u0275\u0275text(21, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_32_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.lastName, $event) || (ctx_r1.form.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, AccountsComponent_div_13_div_32_small_23_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 48)(25, "div", 49)(26, "label", 50);
    \u0275\u0275text(27, "Date of Birth ");
    \u0275\u0275elementStart(28, "span", 51);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 52)(31, "span", 4);
    \u0275\u0275text(32, "cake");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_32_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateOfBirth, $event) || (ctx_r1.form.dateOfBirth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, AccountsComponent_div_13_div_32_small_34_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 49)(36, "label", 50);
    \u0275\u0275text(37, "Gender ");
    \u0275\u0275elementStart(38, "span", 51);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 52)(41, "span", 4);
    \u0275\u0275text(42, "wc");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_32_Template_select_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.gender, $event) || (ctx_r1.form.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(44, "option", 58);
    \u0275\u0275text(45, "-- Select --");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 59);
    \u0275\u0275text(47, "Male");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 60);
    \u0275\u0275text(49, "Female");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(50, AccountsComponent_div_13_div_32_small_50_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 49)(52, "label", 50);
    \u0275\u0275text(53, "Email Address ");
    \u0275\u0275elementStart(54, "span", 51);
    \u0275\u0275text(55, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 52)(57, "span", 4);
    \u0275\u0275text(58, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_32_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(60, AccountsComponent_div_13_div_32_small_60_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 48)(62, "div", 49)(63, "label", 50);
    \u0275\u0275text(64, "Mobile Number ");
    \u0275\u0275elementStart(65, "span", 51);
    \u0275\u0275text(66, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 52)(68, "span", 4);
    \u0275\u0275text(69, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_32_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phoneNumber, $event) || (ctx_r1.form.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(71, AccountsComponent_div_13_div_32_small_71_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 49)(73, "label", 50);
    \u0275\u0275text(74, "Nationality ");
    \u0275\u0275elementStart(75, "span", 51);
    \u0275\u0275text(76, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 52)(78, "span", 4);
    \u0275\u0275text(79, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_32_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nationality, $event) || (ctx_r1.form.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(81, AccountsComponent_div_13_div_32_small_81_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div", 49)(83, "label", 50);
    \u0275\u0275text(84, "Street Address ");
    \u0275\u0275elementStart(85, "span", 51);
    \u0275\u0275text(86, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 52)(88, "span", 4);
    \u0275\u0275text(89, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_32_Template_input_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.address, $event) || (ctx_r1.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(91, AccountsComponent_div_13_div_32_small_91_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.firstName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.firstName);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.lastName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.lastName);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.dateOfBirth);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateOfBirth);
    \u0275\u0275property("max", ctx_r1.maxDob);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.dateOfBirth);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.gender);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.gender);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.errs.gender);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.email);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.email);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.phoneNumber);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.phoneNumber);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.nationality);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nationality);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.nationality);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.address);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.address);
  }
}
function AccountsComponent_div_13_div_33_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.idNumber);
  }
}
function AccountsComponent_div_13_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "p", 47);
    \u0275\u0275text(2, "Provide your national ID or passport number for KYC verification.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49)(4, "label", 50);
    \u0275\u0275text(5, "National ID / Passport Number ");
    \u0275\u0275elementStart(6, "span", 51);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 52)(9, "span", 4);
    \u0275\u0275text(10, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function AccountsComponent_div_13_div_33_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.idNumber, $event) || (ctx_r1.form.idNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, AccountsComponent_div_13_div_33_small_12_Template, 2, 1, "small", 54);
    \u0275\u0275elementStart(13, "small", 67);
    \u0275\u0275text(14, "Enter your Namibian ID (11 digits) or passport number.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 68)(16, "h4")(17, "span", 4);
    \u0275\u0275text(18, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "Personal Details Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 69)(21, "span");
    \u0275\u0275text(22, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 69)(26, "span");
    \u0275\u0275text(27, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 69)(31, "span");
    \u0275\u0275text(32, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 69)(36, "span");
    \u0275\u0275text(37, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 69)(41, "span");
    \u0275\u0275text(42, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 69)(46, "span");
    \u0275\u0275text(47, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 69)(51, "span");
    \u0275\u0275text(52, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("wrap-invalid", ctx_r1.errs.idNumber);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.idNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.idNumber);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate2("", ctx_r1.form.firstName, " ", ctx_r1.form.lastName, "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.form.dateOfBirth);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.form.gender);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.form.nationality);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.form.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.form.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.form.address);
  }
}
function AccountsComponent_div_13_div_34_div_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_div_13_div_34_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function AccountsComponent_div_13_div_34_div_4_Template_div_click_0_listener() {
      const t_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.form.accountType = t_r8.value);
    });
    \u0275\u0275elementStart(1, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AccountsComponent_div_13_div_34_div_4_span_8_Template, 2, 0, "span", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.form.accountType === t_r8.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r8.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.accountType === t_r8.value);
  }
}
function AccountsComponent_div_13_div_34_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 65);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errs.accountType);
  }
}
function AccountsComponent_div_13_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "p", 47);
    \u0275\u0275text(2, "Select the type of account you would like to open.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275template(4, AccountsComponent_div_13_div_34_div_4_Template, 9, 6, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AccountsComponent_div_13_div_34_small_5_Template, 2, 1, "small", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.accountTypes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errs.accountType);
  }
}
function AccountsComponent_div_13_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 77);
  }
}
function AccountsComponent_div_13_span_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_div_13_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function AccountsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275listener("click", function AccountsComponent_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275listener("click", function AccountsComponent_div_13_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28)(4, "span", 4);
    \u0275\u0275text(5, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7, "Open New Account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 29);
    \u0275\u0275listener("click", function AccountsComponent_div_13_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(9, "span", 4);
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 30)(12, "div", 31)(13, "span", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 33);
    \u0275\u0275text(16, "Personal Info");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 34);
    \u0275\u0275elementStart(18, "div", 31)(19, "span", 32);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 33);
    \u0275\u0275text(22, "Identity");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "div", 34);
    \u0275\u0275elementStart(24, "div", 31)(25, "span", 32);
    \u0275\u0275text(26, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 33);
    \u0275\u0275text(28, "Account Type");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 35);
    \u0275\u0275template(30, AccountsComponent_div_13_div_30_Template, 4, 1, "div", 36)(31, AccountsComponent_div_13_div_31_Template, 4, 1, "div", 37)(32, AccountsComponent_div_13_div_32_Template, 92, 33, "div", 38)(33, AccountsComponent_div_13_div_33_Template, 55, 12, "div", 38)(34, AccountsComponent_div_13_div_34_Template, 6, 2, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 39)(36, "button", 40);
    \u0275\u0275listener("click", function AccountsComponent_div_13_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.step > 1 ? ctx_r1.step = ctx_r1.step - 1 : ctx_r1.closeModal());
    });
    \u0275\u0275elementStart(37, "span", 4);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 41);
    \u0275\u0275listener("click", function AccountsComponent_div_13_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275template(41, AccountsComponent_div_13_span_41_Template, 1, 0, "span", 42)(42, AccountsComponent_div_13_span_42_Template, 2, 0, "span", 43)(43, AccountsComponent_div_13_span_43_Template, 2, 0, "span", 43);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275classProp("active", ctx_r1.step === 1)("done", ctx_r1.step > 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.step > 1 ? "\u2713" : "1");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.step === 2)("done", ctx_r1.step > 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.step > 2 ? "\u2713" : "2");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r1.step === 3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.modalError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.modalSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step === 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.step === 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.opening);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.step > 1 ? "arrow_back" : "close");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.step > 1 ? "Back" : "Cancel", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.opening);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.opening);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.opening && ctx_r1.step < 3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.opening && ctx_r1.step === 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.opening ? "Opening\u2026" : ctx_r1.step < 3 ? "Next" : "Open Account", " ");
  }
}
var AccountsComponent = class _AccountsComponent {
  constructor(authService, accountService) {
    this.authService = authService;
    this.accountService = accountService;
    this.accounts = [];
    this.loading = false;
    this.showOpenModal = false;
    this.opening = false;
    this.modalError = "";
    this.modalSuccess = "";
    this.step = 1;
    this.maxDob = new Date((/* @__PURE__ */ new Date()).setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 18)).toISOString().split("T")[0];
    this.accountTypes = [
      { value: "SAVINGS", label: "Savings Account", icon: "savings", description: "Earn interest on savings. Ideal for personal goals." },
      { value: "CURRENT", label: "Current Account", icon: "account_balance", description: "Flexible daily-use account with unlimited transactions." },
      { value: "BUSINESS", label: "Business Account", icon: "business", description: "Designed for business operations and payroll." },
      { value: "FIXED_DEPOSIT", label: "Fixed Deposit", icon: "lock", description: "Lock funds for a period and earn higher interest." }
    ];
    this.form = this.emptyForm();
    this.errs = {};
    this.user = this.authService.getCurrentUser();
  }
  ngOnInit() {
    this.loadAccounts();
  }
  loadAccounts() {
    if (!this.user)
      return;
    this.loading = true;
    this.accountService.getAccountsByUser(this.user.userId).subscribe({
      next: (a) => {
        this.accounts = a;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  openModal() {
    this.form = this.emptyForm();
    if (this.user) {
      this.form.firstName = this.user.firstName || "";
      this.form.lastName = this.user.lastName || "";
      this.form.email = this.user.email || "";
    }
    this.errs = {};
    this.step = 1;
    this.modalError = this.modalSuccess = "";
    this.showOpenModal = true;
  }
  nextStep() {
    if (!this.validateStep())
      return;
    if (this.step < 3) {
      this.step++;
      return;
    }
    this.submitForm();
  }
  validateStep() {
    this.errs = {};
    if (this.step === 1) {
      if (!this.form.firstName?.trim())
        this.errs.firstName = "First name is required.";
      if (!this.form.lastName?.trim())
        this.errs.lastName = "Last name is required.";
      if (!this.form.dateOfBirth)
        this.errs.dateOfBirth = "Date of birth is required.";
      if (!this.form.gender)
        this.errs.gender = "Gender is required.";
      if (!this.form.email?.trim())
        this.errs.email = "Email address is required.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email))
        this.errs.email = "Enter a valid email address.";
      if (!this.form.phoneNumber?.trim())
        this.errs.phoneNumber = "Mobile number is required.";
      if (!this.form.nationality?.trim())
        this.errs.nationality = "Nationality is required.";
      if (!this.form.address?.trim())
        this.errs.address = "Street address is required.";
    }
    if (this.step === 2) {
      if (!this.form.idNumber?.trim())
        this.errs.idNumber = "ID / Passport number is required.";
    }
    if (this.step === 3) {
      if (!this.form.accountType)
        this.errs.accountType = "Please select an account type.";
    }
    return Object.keys(this.errs).length === 0;
  }
  submitForm() {
    if (!this.user)
      return;
    this.opening = true;
    this.modalError = "";
    this.accountService.createAccount(this.user.userId, this.form).subscribe({
      next: (account) => {
        this.accounts.push(account);
        this.modalSuccess = `${account.accountType} account opened! Account No: ${account.accountNumber}`;
        this.opening = false;
        setTimeout(() => this.closeModal(), 3e3);
      },
      error: (err) => {
        this.modalError = err.error?.message || "Failed to open account. Please try again.";
        this.opening = false;
      }
    });
  }
  closeModal() {
    this.showOpenModal = false;
    this.errs = {};
    this.modalError = this.modalSuccess = "";
    this.step = 1;
  }
  emptyForm() {
    return {
      accountType: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      nationality: "",
      idNumber: "",
      email: "",
      phoneNumber: "",
      address: ""
    };
  }
  getAccountIcon(type) {
    return { SAVINGS: "savings", CURRENT: "account_balance", BUSINESS: "business", FIXED_DEPOSIT: "lock" }[type] || "account_balance";
  }
  static {
    this.\u0275fac = function AccountsComponent_Factory(t) {
      return new (t || _AccountsComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(AccountService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccountsComponent, selectors: [["fnb-accounts"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 3, consts: [[1, "page"], [1, "page-header"], [1, "text-muted"], [1, "btn", "btn-primary", 3, "click"], [1, "material-icons"], ["class", "loading-container", 4, "ngIf"], ["class", "accounts-grid", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "loading-container"], [1, "spinner-lg"], [1, "accounts-grid"], ["class", "account-card-full", 4, "ngFor", "ngForOf"], ["class", "empty-card", 4, "ngIf"], [1, "account-card-full"], [1, "card-header-strip"], [1, "card-body"], [1, "card-row"], [1, "card-label"], [1, "card-value", "monospace"], [1, "card-value"], [1, "badge"], [1, "balance-display"], [1, "balance-label"], [1, "balance-amount"], [1, "empty-card"], [1, "modal-overlay", 3, "click"], [1, "modal", 3, "click"], [1, "modal-header"], [1, "modal-title-group"], [1, "modal-close", 3, "click"], [1, "steps"], [1, "step"], [1, "step-num"], [1, "step-label"], [1, "step-line"], [1, "modal-body"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "step-content", 4, "ngIf"], [1, "modal-footer"], [1, "btn", "btn-outline", 3, "click", "disabled"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "step-content"], [1, "step-desc"], [1, "form-row"], [1, "form-group"], [1, "form-label"], [1, "req"], [1, "input-wrap"], ["type", "text", "placeholder", "e.g. John", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "err-msg", 4, "ngIf"], ["type", "text", "placeholder", "e.g. Doe", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel", "max"], [1, "form-control", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "Male"], ["value", "Female"], ["type", "email", "placeholder", "e.g. john@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+264 81 000 0000", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. Namibian", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. 12 Independence Ave, Windhoek", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "err-msg"], ["type", "text", "placeholder", "e.g. 00010100163 or N12345678", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-hint"], [1, "summary-box"], [1, "summary-row"], [1, "account-types"], ["class", "account-type-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "account-type-card", 3, "click"], [1, "material-icons", "type-icon"], [1, "type-text"], ["class", "material-icons check-icon", 4, "ngIf"], [1, "material-icons", "check-icon"], [1, "spinner"]], template: function AccountsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
        \u0275\u0275text(4, "My Accounts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 2);
        \u0275\u0275text(6, "Manage your bank accounts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "button", 3);
        \u0275\u0275listener("click", function AccountsComponent_Template_button_click_7_listener() {
          return ctx.openModal();
        });
        \u0275\u0275elementStart(8, "span", 4);
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Open New Account ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, AccountsComponent_div_11_Template, 2, 0, "div", 5)(12, AccountsComponent_div_12_Template, 3, 2, "div", 6)(13, AccountsComponent_div_13_Template, 45, 25, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showOpenModal);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  padding: 88px 24px 32px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 32px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0 0 4px;\n  font-weight: 700;\n  color: var(--fnb-gray-800);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--fnb-gray-500);\n  font-size: 14px;\n  margin: 0;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid var(--fnb-gray-200);\n  border-top-color: var(--fnb-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.accounts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n}\n.account-card-full[_ngcontent-%COMP%] {\n  background: var(--fnb-white);\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: var(--fnb-shadow);\n  transition: 0.2s;\n}\n.account-card-full[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--fnb-shadow-md);\n  transform: translateY(-2px);\n}\n.card-header-strip[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: white;\n}\n.type-savings[_ngcontent-%COMP%] {\n  background: var(--fnb-primary);\n}\n.type-current[_ngcontent-%COMP%] {\n  background: #3b82f6;\n}\n.type-business[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n}\n.type-fixed_deposit[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid var(--fnb-gray-100);\n}\n.card-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-500);\n}\n.card-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--fnb-gray-800);\n}\n.monospace[_ngcontent-%COMP%] {\n  font-family: monospace;\n  letter-spacing: 0.5px;\n}\n.balance-display[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 14px;\n  background: var(--fnb-primary-pale);\n  border-radius: 8px;\n}\n.balance-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-primary);\n  display: block;\n  margin-bottom: 4px;\n}\n.balance-amount[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--fnb-primary);\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.empty-card[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  padding: 60px;\n  background: var(--fnb-white);\n  border-radius: 12px;\n  box-shadow: var(--fnb-shadow);\n  color: var(--fnb-gray-400);\n  text-align: center;\n}\n.empty-card[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 56px;\n}\n.empty-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--fnb-gray-600);\n  margin: 0;\n}\n.empty-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  border: none;\n  transition: 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--fnb-primary);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.08);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--fnb-primary);\n  border: 1.5px solid var(--fnb-primary);\n}\n.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--fnb-primary-pale);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border: 2px solid rgba(255, 255, 255, .4);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  padding: 20px;\n}\n.modal[_ngcontent-%COMP%] {\n  background: var(--fnb-white);\n  border-radius: 14px;\n  width: 100%;\n  max-width: 580px;\n  max-height: 92vh;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, .2);\n  display: flex;\n  flex-direction: column;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 24px;\n  border-bottom: 1px solid var(--fnb-gray-100);\n  flex-shrink: 0;\n}\n.modal-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.modal-title-group[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n}\n.modal-title-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--fnb-gray-800);\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fnb-gray-400);\n  padding: 4px;\n  border-radius: 6px;\n  display: flex;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--fnb-gray-100);\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  flex: 1;\n  overflow-y: auto;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding: 14px 24px;\n  border-top: 1px solid var(--fnb-gray-100);\n  flex-shrink: 0;\n}\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 14px 24px;\n  background: var(--fnb-gray-50, #f9fafb);\n  border-bottom: 1px solid var(--fnb-gray-100);\n  flex-shrink: 0;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--fnb-gray-200);\n  color: var(--fnb-gray-500);\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: .2s;\n}\n.step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: var(--fnb-primary);\n  color: white;\n}\n.step.done[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: white;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: var(--fnb-gray-500);\n  font-weight: 500;\n  white-space: nowrap;\n}\n.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n  font-weight: 700;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: var(--fnb-gray-200);\n  margin: 0 8px;\n  margin-bottom: 14px;\n}\n.step-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.step-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fnb-gray-600);\n  margin: 0;\n  background: var(--fnb-secondary, #e8f4e8);\n  padding: 10px 14px;\n  border-radius: 8px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px;\n}\n@media (max-width: 500px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--fnb-gray-700);\n}\n.req[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1.5px solid var(--fnb-gray-200);\n  border-radius: 8px;\n  padding: 0 10px;\n  background: white;\n  transition: border-color .2s;\n}\n.input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--fnb-primary);\n}\n.wrap-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444 !important;\n}\n.input-wrap[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: var(--fnb-gray-400);\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  padding: 10px 0;\n  background: transparent;\n  color: var(--fnb-gray-800);\n  font-family: inherit;\n  width: 100%;\n}\nselect.form-control[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.err-msg[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #dc2626;\n}\n.form-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--fnb-gray-400);\n}\n.summary-box[_ngcontent-%COMP%] {\n  background: var(--fnb-gray-50, #f9fafb);\n  border: 1px solid var(--fnb-gray-200);\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.summary-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--fnb-primary);\n  margin: 0 0 10px;\n}\n.summary-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.summary-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 0;\n  border-bottom: 1px solid var(--fnb-gray-100);\n  font-size: 12px;\n}\n.summary-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: var(--fnb-gray-500);\n}\n.summary-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: var(--fnb-gray-800);\n  font-weight: 500;\n  text-align: right;\n  max-width: 58%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.account-types[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.account-type-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 14px;\n  border: 2px solid var(--fnb-gray-200);\n  border-radius: 10px;\n  cursor: pointer;\n  transition: .2s;\n}\n.account-type-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--fnb-primary);\n  background: var(--fnb-primary-pale);\n}\n.account-type-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--fnb-primary);\n  background: var(--fnb-primary-pale);\n}\n.type-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: var(--fnb-primary);\n  flex-shrink: 0;\n}\n.type-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.type-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--fnb-gray-800);\n  display: block;\n  margin-bottom: 2px;\n}\n.type-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-gray-500);\n  margin: 0;\n}\n.check-icon[_ngcontent-%COMP%] {\n  color: var(--fnb-primary);\n  font-size: 20px;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  margin-bottom: 16px;\n}\n.alert[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.alert-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n/*# sourceMappingURL=accounts.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccountsComponent, { className: "AccountsComponent" });
})();
export {
  AccountsComponent
};
//# sourceMappingURL=chunk-AMR3VJDN.js.map
