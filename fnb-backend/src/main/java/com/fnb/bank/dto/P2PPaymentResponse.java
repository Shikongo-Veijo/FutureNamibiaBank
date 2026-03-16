package com.fnb.bank.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class P2PPaymentResponse {

    private String status;
    private String errorCode;
    private String transactionId;
    private String message;
}
