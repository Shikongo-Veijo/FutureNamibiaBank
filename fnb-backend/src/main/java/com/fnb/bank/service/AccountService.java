package com.fnb.bank.service;

import com.fnb.bank.dto.OpenAccountRequest;
import com.fnb.bank.dto.TransactionDTO;
import com.fnb.bank.dto.TransferRequest;
import com.fnb.bank.model.Account;
import com.fnb.bank.model.Transaction;
import com.fnb.bank.model.User;
import com.fnb.bank.repository.AccountRepository;
import com.fnb.bank.repository.TransactionRepository;
import com.fnb.bank.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final AccountRepository accountRepository;
    private final TransactionRepository transactionRepository;
    private final UserRepository userRepository;

    public List<Account> getAccountsByUserId(Long userId) {
        return accountRepository.findByUserId(userId);
    }

    public Account getAccountByNumber(String accountNumber) {
        return accountRepository.findByAccountNumber(accountNumber)
                .orElseThrow(() -> new IllegalArgumentException("Account not found: " + accountNumber));
    }

    /**
     * Opens a new bank account for a user, updating the user's KYC profile
     * with any supplied fields from the OpenAccountRequest.
     */
    @Transactional
    public Account createAccount(Long userId, OpenAccountRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        // ── Update KYC profile fields if provided ──────────────────
        if (request.getFirstName()   != null && !request.getFirstName().isBlank())
            user.setFirstName(request.getFirstName());
        if (request.getLastName()    != null && !request.getLastName().isBlank())
            user.setLastName(request.getLastName());
        if (request.getDateOfBirth() != null)
            user.setDateOfBirth(request.getDateOfBirth());
        if (request.getGender()      != null && !request.getGender().isBlank())
            user.setGender(request.getGender());
        if (request.getNationality() != null && !request.getNationality().isBlank())
            user.setNationality(request.getNationality());
        if (request.getIdNumber()    != null && !request.getIdNumber().isBlank())
            user.setIdNumber(request.getIdNumber());
        if (request.getEmail()       != null && !request.getEmail().isBlank())
            user.setEmail(request.getEmail());
        if (request.getPhoneNumber() != null && !request.getPhoneNumber().isBlank())
            user.setPhoneNumber(request.getPhoneNumber());
        if (request.getAddress()     != null && !request.getAddress().isBlank())
            user.setAddress(request.getAddress());

        // Generate customer number if not already set
        if (user.getCustNum() == null || user.getCustNum().isBlank()) {
            user.setCustNum(generateCustomerNumber());
        }

        userRepository.save(user);

        // ── Create the account ──────────────────────────────────────
        Account account = new Account();
        account.setUser(user);
        account.setAccountType(request.getAccountType());
        account.setAccountNumber(generateAccountNumber());
        account.setBalance(BigDecimal.ZERO);
        account.setCurrency("NAD");

        return accountRepository.save(account);
    }

    @Transactional
    public Transaction transfer(TransferRequest request) {
        Account source      = getAccountByNumber(request.getSourceAccountNumber());
        Account destination = getAccountByNumber(request.getDestinationAccountNumber());

        if (source.getBalance().compareTo(request.getAmount()) < 0) {
            throw new IllegalStateException("Insufficient funds");
        }

        source.setBalance(source.getBalance().subtract(request.getAmount()));
        destination.setBalance(destination.getBalance().add(request.getAmount()));

        accountRepository.save(source);
        accountRepository.save(destination);

        Transaction transaction = new Transaction();
        transaction.setReferenceNumber("TXN-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase());
        transaction.setTransactionType(Transaction.TransactionType.TRANSFER);
        transaction.setStatus(Transaction.TransactionStatus.COMPLETED);
        transaction.setAmount(request.getAmount());
        transaction.setDescription(request.getDescription());
        transaction.setSourceAccount(source);
        transaction.setDestinationAccount(destination);
        transaction.setTransactionDate(LocalDateTime.now());

        return transactionRepository.save(transaction);
    }

    /** Returns all PAYMENT transactions for a user as clean DTOs. */
    public List<TransactionDTO> getPaymentsByUser(Long userId) {
        return transactionRepository.findPaymentsByUserId(userId)
                .stream()
                .map(t -> TransactionDTO.builder()
                        .id(t.getId())
                        .referenceNumber(t.getReferenceNumber())
                        .transactionType(t.getTransactionType().name())
                        .status(t.getStatus().name())
                        .amount(t.getAmount())
                        .currency(t.getCurrency())
                        .description(t.getDescription())
                        .transactionDate(t.getTransactionDate())
                        .fromAccountNumber(t.getSourceAccount() != null
                                ? t.getSourceAccount().getAccountNumber() : null)
                        .toAccountNumber(t.getDestinationAccount() != null
                                ? t.getDestinationAccount().getAccountNumber() : null)
                        .credit(t.getSourceAccount() == null
                                || !t.getSourceAccount().getUser().getId().equals(userId))
                        .build())
                .toList();
    }

    /** Returns transactions for an account as clean DTOs (no circular refs). */
    public List<TransactionDTO> getTransactionsByAccount(Long accountId) {
        return transactionRepository.findByAccountId(accountId)
                .stream()
                .map(t -> {
                    boolean isCredit = t.getDestinationAccount() != null
                            && accountId.equals(t.getDestinationAccount().getId());
                    return TransactionDTO.builder()
                            .id(t.getId())
                            .referenceNumber(t.getReferenceNumber())
                            .transactionType(t.getTransactionType().name())
                            .status(t.getStatus().name())
                            .amount(t.getAmount())
                            .currency(t.getCurrency())
                            .description(t.getDescription())
                            .transactionDate(t.getTransactionDate())
                            .fromAccountNumber(t.getSourceAccount() != null
                                    ? t.getSourceAccount().getAccountNumber() : null)
                            .toAccountNumber(t.getDestinationAccount() != null
                                    ? t.getDestinationAccount().getAccountNumber() : null)
                            .credit(isCredit)
                            .build();
                })
                .toList();
    }

    // ── Generators ───────────────────────────────────────────────────────────

    private String generateAccountNumber() {
        String number;
        do {
            number = String.format("%013d", (long) (Math.random() * 10_000_000_000_000L));
        } while (accountRepository.existsByAccountNumber(number));
        return number;
    }

    private String generateCustomerNumber() {
        String date = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        return "CUST-" + date + "-" + String.format("%04d", (int) (Math.random() * 9000) + 1000);
    }
}
