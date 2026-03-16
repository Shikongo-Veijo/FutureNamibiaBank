package com.fnb.bank.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class P2PPaymentRequest {

    private String clientReference;
    private String senderAccountNumber;
    private String receiverAccountNumber;
    private BigDecimal amount;
    private String currency;
    private String reference;
}
