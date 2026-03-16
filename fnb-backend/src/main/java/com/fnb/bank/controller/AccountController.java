package com.fnb.bank.controller;

import com.fnb.bank.dto.OpenAccountRequest;
import com.fnb.bank.dto.TransactionDTO;
import com.fnb.bank.dto.TransferRequest;
import com.fnb.bank.model.Account;
import com.fnb.bank.model.Transaction;
import com.fnb.bank.service.AccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Account>> getAccountsByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(accountService.getAccountsByUserId(userId));
    }

    @GetMapping("/{accountNumber}")
    public ResponseEntity<Account> getAccount(@PathVariable String accountNumber) {
        return ResponseEntity.ok(accountService.getAccountByNumber(accountNumber));
    }

    /** Opens a new account with full KYC details. POST /api/accounts/create/{userId} */
    @PostMapping("/create/{userId}")
    public ResponseEntity<Account> createAccount(
            @PathVariable Long userId,
            @RequestBody OpenAccountRequest request) {
        return ResponseEntity.ok(accountService.createAccount(userId, request));
    }

    @PostMapping("/transfer")
    public ResponseEntity<Transaction> transfer(@Valid @RequestBody TransferRequest request) {
        return ResponseEntity.ok(accountService.transfer(request));
    }

    /** Returns clean TransactionDTOs — no circular references. */
    @GetMapping("/{accountId}/transactions")
    public ResponseEntity<List<TransactionDTO>> getTransactions(@PathVariable Long accountId) {
        return ResponseEntity.ok(accountService.getTransactionsByAccount(accountId));
    }

    /** GET /api/accounts/user/{userId}/payments — all PAYMENT transactions for a user */
    @GetMapping("/user/{userId}/payments")
    public ResponseEntity<List<TransactionDTO>> getPaymentsByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(accountService.getPaymentsByUser(userId));
    }
}
