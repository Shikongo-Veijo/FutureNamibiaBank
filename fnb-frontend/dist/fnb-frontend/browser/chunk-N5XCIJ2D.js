import {
  Router
} from "./chunk-SPEQUCMQ.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-MSETSC66.js";
import {
  AuthService,
  CommonModule,
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
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4RVPYBMO.js";

// src/app/components/login/login.component.ts
function LoginComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function LoginComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, " Please enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.submitted = false;
    this.showPassword = false;
    this.errorMessage = "";
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/dashboard"]);
    }
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.errorMessage = "";
    if (this.loginForm.invalid)
      return;
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(["/dashboard"]),
      error: (err) => {
        this.errorMessage = err.error?.message || "Invalid email or password";
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["fnb-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 13, consts: [[1, "login-page"], [1, "login-left"], [1, "login-brand"], [1, "big-logo"], [1, "slogan"], [1, "features"], [1, "feature-item"], [1, "material-icons"], [1, "login-right"], [1, "login-card"], [1, "login-header"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "form-label"], ["type", "email", "formControlName", "email", "placeholder", "you@example.com", 1, "form-control"], ["class", "field-error", 4, "ngIf"], ["href", "#", 1, "forgot-link"], [1, "input-password"], ["formControlName", "password", "placeholder", "Enter your password", 1, "form-control", 3, "type"], ["type", "button", 1, "toggle-password", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "w-full", 3, "disabled"], ["class", "spinner", 4, "ngIf"], [1, "login-footer"], ["href", "#"], [1, "alert", "alert-danger"], [1, "field-error"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "FNB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Future Namibia Bank");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 4);
        \u0275\u0275text(8, '"Payments Made Better"');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "span", 7);
        \u0275\u0275text(12, "security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14, "Bank-grade security");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 6)(16, "span", 7);
        \u0275\u0275text(17, "speed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19, "Instant transfers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 6)(21, "span", 7);
        \u0275\u0275text(22, "support_agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span");
        \u0275\u0275text(24, "24/7 support");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(25, "div", 8)(26, "div", 9)(27, "div", 10)(28, "h2");
        \u0275\u0275text(29, "Welcome Back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, "Sign in to access your account");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(32, LoginComponent_div_32_Template, 2, 1, "div", 11);
        \u0275\u0275elementStart(33, "form", 12);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_33_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(34, "div", 13)(35, "label", 14);
        \u0275\u0275text(36, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "input", 15);
        \u0275\u0275template(38, LoginComponent_span_38_Template, 2, 0, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 13)(40, "label", 14);
        \u0275\u0275text(41, " Password ");
        \u0275\u0275elementStart(42, "a", 17);
        \u0275\u0275text(43, "Forgot password?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 18);
        \u0275\u0275element(45, "input", 19);
        \u0275\u0275elementStart(46, "button", 20);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_46_listener() {
          return ctx.showPassword = !ctx.showPassword;
        });
        \u0275\u0275elementStart(47, "span", 7);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(49, LoginComponent_span_49_Template, 2, 0, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 21);
        \u0275\u0275template(51, LoginComponent_span_51_Template, 1, 0, "span", 22);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 23)(54, "p");
        \u0275\u0275text(55, "Don't have an account? ");
        \u0275\u0275elementStart(56, "a", 24);
        \u0275\u0275text(57, "Contact your branch");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(32);
        \u0275\u0275property("ngIf", ctx.errorMessage);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("error", ctx.submitted && ctx.f["email"].errors);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && ctx.f["email"].errors);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("error", ctx.submitted && ctx.f["password"].errors);
        \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showPassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.submitted && ctx.f["password"].errors);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.loading ? "Signing in..." : "Sign In", " ");
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n}\n.login-left[_ngcontent-%COMP%] {\n  flex: 1;\n  background:\n    linear-gradient(\n      135deg,\n      var(--fnb-primary-dark) 0%,\n      var(--fnb-primary) 60%,\n      var(--fnb-primary-light) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px;\n}\n.login-brand[_ngcontent-%COMP%] {\n  color: white;\n  max-width: 400px;\n}\n.big-logo[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 900;\n  background: rgba(255, 255, 255, 0.2);\n  width: 100px;\n  height: 100px;\n  border-radius: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  letter-spacing: 2px;\n}\n.login-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 8px;\n}\n.slogan[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.8);\n  font-style: italic;\n  margin-bottom: 48px;\n}\n.features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.9);\n}\n.feature-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 24px;\n  background: rgba(255, 255, 255, 0.2);\n  padding: 8px;\n  border-radius: 10px;\n}\n.login-right[_ngcontent-%COMP%] {\n  width: 480px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 48px 40px;\n  background: var(--fnb-white);\n}\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n}\n.login-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 6px;\n}\n.login-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--fnb-gray-500);\n}\n.form-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-primary);\n}\n.input-password[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-password[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-right: 44px;\n}\n.toggle-password[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--fnb-gray-400);\n  display: flex;\n  padding: 0;\n}\n.toggle-password[_ngcontent-%COMP%]:hover {\n  color: var(--fnb-gray-600);\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--fnb-danger);\n  margin-top: 4px;\n  display: block;\n}\n.login-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n  color: var(--fnb-gray-500);\n  font-size: 14px;\n}\n@media (max-width: 768px) {\n  .login-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-right[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 32px 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent" });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-N5XCIJ2D.js.map
