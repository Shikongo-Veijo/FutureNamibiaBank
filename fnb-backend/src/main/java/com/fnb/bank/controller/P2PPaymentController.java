package com.fnb.bank.controller;

import com.fnb.bank.dto.P2PPaymentRequest;
import com.fnb.bank.dto.P2PPaymentResponse;
import com.fnb.bank.service.P2PPaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class P2PPaymentController {

    private final P2PPaymentService p2pPaymentService;

    /**
     * POST /api/p2p-payment
     * IPN Developer Integration Challenge – P2P Payment endpoint.
     */
    @PostMapping("/p2p-payment")
    public ResponseEntity<P2PPaymentResponse> processPayment(@RequestBody P2PPaymentRequest request) {

        P2PPaymentResponse response = p2pPaymentService.processPayment(request);

        HttpStatus httpStatus = switch (response.getErrorCode() == null ? "NONE" : response.getErrorCode()) {
            case "ERR005" -> HttpStatus.PAYMENT_REQUIRED;          // 402
            case "ERR006" -> HttpStatus.INTERNAL_SERVER_ERROR;     // 500
            case "ERR001", "ERR002", "ERR003", "ERR004" -> HttpStatus.BAD_REQUEST; // 400
            default -> HttpStatus.OK;                              // 200
        };

        return ResponseEntity.status(httpStatus).body(response);
    }
}
