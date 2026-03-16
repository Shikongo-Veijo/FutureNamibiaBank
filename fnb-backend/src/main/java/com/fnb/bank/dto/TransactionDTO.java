package com.fnb.bank.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class TransactionDTO {
    private Long id;
    private String referenceNumber;
    private String transactionType;
    private String status;
    private BigDecimal amount;
    private String currency;
    private String description;
    private LocalDateTime transactionDate;
    private String fromAccountNumber;
    private String toAccountNumber;
    /** true  = money came INTO the queried account (credit)
     *  false = money went OUT of the queried account (debit) */
    private boolean credit;
}
