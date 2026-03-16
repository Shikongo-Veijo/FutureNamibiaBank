package com.fnb.bank.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fnb.bank.model.Account;
import lombok.Data;

import java.time.LocalDate;

/**
 * Request DTO for opening a new bank account.
 * Collects all mandatory customer KYC fields as per FNB requirements.
 */
@Data
public class OpenAccountRequest {

    // ── Account fields ────────────────────────────────────────
    private Account.AccountType accountType;

    // ── Customer / KYC fields ─────────────────────────────────
    /** Client first name */
    private String firstName;

    /** Client surname */
    private String lastName;

    /** Date of birth for identity verification (yyyy-MM-dd) */
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;

    /** Male or Female */
    private String gender;

    /** Client nationality */
    private String nationality;

    /** National ID or passport number */
    private String idNumber;

    /** Client email address */
    private String email;

    /** Mobile number */
    private String phoneNumber;

    /** Street address */
    private String address;
}
