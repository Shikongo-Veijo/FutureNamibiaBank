import {
  HttpClient,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-4RVPYBMO.js";

// src/app/services/account.service.ts
var AccountService = class _AccountService {
  constructor(http) {
    this.http = http;
  }
  getAccountsByUser(userId) {
    return this.http.get(`${environment.apiUrl}/accounts/user/${userId}`);
  }
  getAccount(accountNumber) {
    return this.http.get(`${environment.apiUrl}/accounts/${accountNumber}`);
  }
  createAccount(userId, request) {
    return this.http.post(`${environment.apiUrl}/accounts/create/${userId}`, request);
  }
  transfer(request) {
    return this.http.post(`${environment.apiUrl}/accounts/transfer`, request);
  }
  getTransactions(accountId) {
    return this.http.get(`${environment.apiUrl}/accounts/${accountId}/transactions`);
  }
  /** IPN P2P Payment – POST /api/p2p-payment */
  p2pPayment(request) {
    return this.http.post(`${environment.apiUrl}/p2p-payment`, request);
  }
  /** All PAYMENT transactions for a user – GET /api/accounts/user/{userId}/payments */
  getPaymentsByUser(userId) {
    return this.http.get(`${environment.apiUrl}/accounts/user/${userId}/payments`);
  }
  static {
    this.\u0275fac = function AccountService_Factory(t) {
      return new (t || _AccountService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AccountService, factory: _AccountService.\u0275fac, providedIn: "root" });
  }
};

export {
  AccountService
};
//# sourceMappingURL=chunk-53PK2IHO.js.map
