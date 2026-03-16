-- =============================================
-- Future Namibia Bank - Database Init Script
-- Payments Made Better
-- =============================================

CREATE DATABASE IF NOT EXISTS fnb_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE fnb_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    cust_num        VARCHAR(30)         UNIQUE,
    first_name      VARCHAR(100)        NOT NULL,
    last_name       VARCHAR(100)        NOT NULL,
    date_of_birth   DATE,
    gender          VARCHAR(10),
    nationality     VARCHAR(100),
    id_number       VARCHAR(50)         UNIQUE,
    email           VARCHAR(255)        NOT NULL UNIQUE,
    password        VARCHAR(255)        NOT NULL,
    phone_number    VARCHAR(20)         UNIQUE,
    address         VARCHAR(500),
    role            VARCHAR(50)         NOT NULL DEFAULT 'CUSTOMER',
    active          BOOLEAN             NOT NULL DEFAULT TRUE,
    created_at      DATETIME            NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Accounts table
CREATE TABLE IF NOT EXISTS accounts (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    account_number  VARCHAR(20)         NOT NULL UNIQUE,
    account_type    ENUM('SAVINGS','CURRENT','BUSINESS','FIXED_DEPOSIT') NOT NULL,
    balance         DECIMAL(15,2)       NOT NULL DEFAULT 0.00,
    currency        VARCHAR(3)          NOT NULL DEFAULT 'NAD',
    active          BOOLEAN             NOT NULL DEFAULT TRUE,
    created_at      DATETIME            NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id         BIGINT              NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
    id                      BIGINT AUTO_INCREMENT PRIMARY KEY,
    reference_number        VARCHAR(50)     NOT NULL UNIQUE,
    transaction_type        ENUM('DEPOSIT','WITHDRAWAL','TRANSFER','PAYMENT') NOT NULL,
    status                  ENUM('PENDING','COMPLETED','FAILED','REVERSED')   NOT NULL,
    amount                  DECIMAL(15,2)   NOT NULL,
    currency                VARCHAR(3)      NOT NULL DEFAULT 'NAD',
    description             VARCHAR(255),
    transaction_date        DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
    source_account_id       BIGINT,
    destination_account_id  BIGINT,
    FOREIGN KEY (source_account_id)      REFERENCES accounts(id),
    FOREIGN KEY (destination_account_id) REFERENCES accounts(id)
);

-- Indexes for performance
CREATE INDEX idx_accounts_user_id         ON accounts(user_id);
CREATE INDEX idx_accounts_account_number  ON accounts(account_number);
CREATE INDEX idx_transactions_source      ON transactions(source_account_id);
CREATE INDEX idx_transactions_destination ON transactions(destination_account_id);
CREATE INDEX idx_transactions_date        ON transactions(transaction_date);

-- Seed admin user (password: admin@fnb.na)
INSERT INTO users (first_name, last_name, email, password, phone_number, role)
VALUES ('Admin', 'FNB', 'admin@fnb.na',
        '$2b$10$4T5ar/TSTKmllXheJC3FaOuDPJ.75kj/7XteTdqsWul3NA3EED6Pi',
        '+264811000000', 'ADMIN')
ON DUPLICATE KEY UPDATE password = '$2b$10$4T5ar/TSTKmllXheJC3FaOuDPJ.75kj/7XteTdqsWul3NA3EED6Pi';
