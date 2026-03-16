package com.fnb.bank.service;

import com.fnb.bank.dto.P2PPaymentRequest;
import com.fnb.bank.dto.P2PPaymentResponse;
import com.fnb.bank.model.Account;
import com.fnb.bank.model.Transaction;
import com.fnb.bank.repository.AccountRepository;
import com.fnb.bank.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class P2PPaymentService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;

    @Transactional
    public P2PPaymentResponse processPayment(P2PPaymentRequest request) {

        // ── 1. Validate required fields (ERR001) ──────────────────────
        if (isBlank(request.getClientReference()) ||
                isBlank(request.getSenderAccountNumber()) ||
                isBlank(request.getReceiverAccountNumber()) ||
                request.getAmount() == null ||
                isBlank(request.getCurrency()) ||
                isBlank(request.getReference())) {
            return failed("ERR001", "Missing required field");
        }

        // ── 2. Validate account number format – alphanumeric, min 10 chars (ERR002) ──
        if (!request.getSenderAccountNumber().matches("[A-Za-z0-9]+") ||
                request.getSenderAccountNumber().length() < 10) {
            return failed("ERR002", "Invalid sender account number format (e.g. FNB4569299567)");
        }
        if (!request.getReceiverAccountNumber().matches("[A-Za-z0-9]+") ||
                request.getReceiverAccountNumber().length() < 10) {
            return failed("ERR002", "Invalid receiver account number format (e.g. FNB4569299567)");
        }

        // ── 3. Validate currency (ERR003) ─────────────────────────────
        if (!"NAD".equalsIgnoreCase(request.getCurrency())) {
            return failed("ERR003", "Invalid currency. Only NAD is supported");
        }

        // ── 4. Validate amount (ERR004) ───────────────────────────────
        if (request.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
            return failed("ERR004", "Invalid amount. Amount must be greater than 0");
        }

        // ── 5. Validate reference length ──────────────────────────────
        if (request.getReference().trim().isEmpty()) {
            return failed("ERR001", "Payment reference must not be empty");
        }
        if (request.getReference().length() > 50) {
            return failed("ERR001", "Payment reference must not exceed 50 characters");
        }

        // ── 6. Validate clientReference uniqueness ────────────────────
        if (transactionRepository.existsByReferenceNumber(request.getClientReference())) {
            return failed("ERR001", "Client reference must be unique per transaction");
        }

        // ── 7. Look up accounts ───────────────────────────────────────
        Optional<Account> senderOpt = accountRepository.findByAccountNumber(request.getSenderAccountNumber());
        if (senderOpt.isEmpty()) {
            return failed("ERR002", "Sender account not found");
        }

        Optional<Account> receiverOpt = accountRepository.findByAccountNumber(request.getReceiverAccountNumber());
        if (receiverOpt.isEmpty()) {
            return failed("ERR002", "Receiver account not found");
        }

        Account sender   = senderOpt.get();
        Account receiver = receiverOpt.get();

        // ── 8. Check sufficient funds (ERR005) ────────────────────────
        if (sender.getBalance().compareTo(request.getAmount()) < 0) {
            return failed("ERR005", "Insufficient funds");
        }

        // ── 9. Process the transfer ───────────────────────────────────
        try {
            sender.setBalance(sender.getBalance().subtract(request.getAmount()));
            receiver.setBalance(receiver.getBalance().add(request.getAmount()));
            accountRepository.save(sender);
            accountRepository.save(receiver);

            // Build transaction ID in spec format: TXN + yyyyMMddHHmmss + 4-digit seq
            String txnId = "TXN" + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"))
                    + String.format("%04d", (int) (Math.random() * 10000));

            Transaction transaction = new Transaction();
            transaction.setReferenceNumber(request.getClientReference());
            transaction.setTransactionType(Transaction.TransactionType.PAYMENT);
            transaction.setStatus(Transaction.TransactionStatus.COMPLETED);
            transaction.setAmount(request.getAmount());
            transaction.setCurrency("NAD");
            transaction.setDescription(request.getReference());
            transaction.setSourceAccount(sender);
            transaction.setDestinationAccount(receiver);
            transaction.setTransactionDate(LocalDateTime.now());

            transactionRepository.save(transaction);

            return P2PPaymentResponse.builder()
                    .status("SUCCESS")
                    .errorCode(null)
                    .transactionId(txnId)
                    .message("Payment processed successfully")
                    .build();

        } catch (Exception e) {
            return failed("ERR006", "Internal processing error");
        }
    }

    // ── helpers ───────────────────────────────────────────────────────
    private boolean isBlank(String s) {
        return s == null || s.trim().isEmpty();
    }

    private P2PPaymentResponse failed(String errorCode, String message) {
        return P2PPaymentResponse.builder()
                .status("FAILED")
                .errorCode(errorCode)
                .transactionId(null)
                .message(message)
                .build();
    }
}
