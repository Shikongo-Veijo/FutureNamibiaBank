import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Account, Transaction, TransferRequest,
  OpenAccountRequest, P2PPaymentRequest, P2PPaymentResponse
} from '../models/account.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private http: HttpClient) {}

  getAccountsByUser(userId: number): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.apiUrl}/accounts/user/${userId}`);
  }

  getAccount(accountNumber: string): Observable<Account> {
    return this.http.get<Account>(`${environment.apiUrl}/accounts/${accountNumber}`);
  }

  createAccount(userId: number, request: OpenAccountRequest): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/accounts/create/${userId}`, request);
  }

  transfer(request: TransferRequest): Observable<Transaction> {
    return this.http.post<Transaction>(`${environment.apiUrl}/accounts/transfer`, request);
  }

  getTransactions(accountId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/accounts/${accountId}/transactions`);
  }

  /** IPN P2P Payment – POST /api/p2p-payment */
  p2pPayment(request: P2PPaymentRequest): Observable<P2PPaymentResponse> {
    return this.http.post<P2PPaymentResponse>(`${environment.apiUrl}/p2p-payment`, request);
  }

  /** All PAYMENT transactions for a user – GET /api/accounts/user/{userId}/payments */
  getPaymentsByUser(userId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${environment.apiUrl}/accounts/user/${userId}/payments`);
  }
}
