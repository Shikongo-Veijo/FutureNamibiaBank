import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'fnb-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-page">
      <div class="login-left">
        <div class="login-brand">
          <div class="big-logo">FNB</div>
          <h1>Future Namibia Bank</h1>
          <p class="slogan">"Payments Made Better"</p>
          <div class="features">
            <div class="feature-item">
              <span class="material-icons">security</span>
              <span>Bank-grade security</span>
            </div>
            <div class="feature-item">
              <span class="material-icons">speed</span>
              <span>Instant transfers</span>
            </div>
            <div class="feature-item">
              <span class="material-icons">support_agent</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      <div class="login-right">
        <div class="login-card">
          <div class="login-header">
            <h2>Welcome Back</h2>
            <p>Sign in to access your account</p>
          </div>

          <div *ngIf="errorMessage" class="alert alert-danger">
            {{ errorMessage }}
          </div>

          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input
                type="email"
                class="form-control"
                [class.error]="submitted && f['email'].errors"
                formControlName="email"
                placeholder="you@example.com"
              />
              <span class="field-error" *ngIf="submitted && f['email'].errors">
                Please enter a valid email
              </span>
            </div>

            <div class="form-group">
              <label class="form-label">
                Password
                <a href="#" class="forgot-link">Forgot password?</a>
              </label>
              <div class="input-password">
                <input
                  [type]="showPassword ? 'text' : 'password'"
                  class="form-control"
                  [class.error]="submitted && f['password'].errors"
                  formControlName="password"
                  placeholder="Enter your password"
                />
                <button type="button" class="toggle-password" (click)="showPassword = !showPassword">
                  <span class="material-icons">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                </button>
              </div>
              <span class="field-error" *ngIf="submitted && f['password'].errors">
                Password is required
              </span>
            </div>

            <button type="submit" class="btn btn-primary btn-lg w-full" [disabled]="loading">
              <span class="spinner" *ngIf="loading"></span>
              {{ loading ? 'Signing in...' : 'Sign In' }}
            </button>
          </form>

          <div class="login-footer">
            <p>Don't have an account? <a href="#">Contact your branch</a></p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: 100vh;
      display: flex;
    }

    .login-left {
      flex: 1;
      background: linear-gradient(135deg, var(--fnb-primary-dark) 0%, var(--fnb-primary) 60%, var(--fnb-primary-light) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px;
    }

    .login-brand {
      color: white;
      max-width: 400px;
    }

    .big-logo {
      font-size: 48px;
      font-weight: 900;
      background: rgba(255,255,255,0.2);
      width: 100px;
      height: 100px;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      letter-spacing: 2px;
    }

    .login-brand h1 {
      font-size: 32px;
      font-weight: 700;
      color: white;
      margin-bottom: 8px;
    }

    .slogan {
      font-size: 18px;
      color: rgba(255,255,255,0.8);
      font-style: italic;
      margin-bottom: 48px;
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 14px;
      font-size: 16px;
      color: rgba(255,255,255,0.9);
    }

    .feature-item .material-icons {
      font-size: 24px;
      background: rgba(255,255,255,0.2);
      padding: 8px;
      border-radius: 10px;
    }

    .login-right {
      width: 480px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px 40px;
      background: var(--fnb-white);
    }

    .login-card {
      width: 100%;
      max-width: 380px;
    }

    .login-header {
      margin-bottom: 32px;
    }

    .login-header h2 {
      font-size: 28px;
      margin-bottom: 6px;
    }

    .login-header p {
      color: var(--fnb-gray-500);
    }

    .form-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .forgot-link {
      font-size: 12px;
      color: var(--fnb-primary);
    }

    .input-password {
      position: relative;
    }

    .input-password .form-control {
      padding-right: 44px;
    }

    .toggle-password {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: var(--fnb-gray-400);
      display: flex;
      padding: 0;
    }

    .toggle-password:hover {
      color: var(--fnb-gray-600);
    }

    .field-error {
      font-size: 12px;
      color: var(--fnb-danger);
      margin-top: 4px;
      display: block;
    }

    .login-footer {
      margin-top: 24px;
      text-align: center;
      color: var(--fnb-gray-500);
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .login-left { display: none; }
      .login-right { width: 100%; padding: 32px 24px; }
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  showPassword = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMessage = '';

    if (this.loginForm.invalid) return;

    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (err) => {
        this.errorMessage = err.error?.message || 'Invalid email or password';
        this.loading = false;
      }
    });
  }
}
