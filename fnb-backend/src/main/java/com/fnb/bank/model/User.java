package com.fnb.bank.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** Unique banking customer number – e.g. CUST-20260315-0001 */
    @Column(unique = true)
    private String custNum;

    @NotBlank
    @Column(nullable = false)
    private String firstName;

    @NotBlank
    @Column(nullable = false)
    private String lastName;

    /** Date of birth – used for identity verification */
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;

    /** Male / Female */
    private String gender;

    private String nationality;

    /** National ID or passport number */
    @Column(unique = true)
    private String idNumber;

    @Email
    @NotBlank
    @Column(nullable = false, unique = true)
    private String email;

    @JsonIgnore
    @NotBlank
    @Column(nullable = false)
    private String password;

    @Column(unique = true)
    private String phoneNumber;

    private String address;

    @Column(nullable = false)
    private String role = "CUSTOMER";

    @Column(nullable = false)
    private boolean active = true;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Account> accounts;
}
