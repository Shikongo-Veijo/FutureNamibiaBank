
# Future Namibia Bank (FNB)
P2Ppayments
### *"Payments Made Better"*

A full-stack banking application built with **Spring Boot 3.2 (Java 17)** and **Angular 17**, featuring JWT authentication, multi-account management, fund transfers, and a P2P payment engine.

---

## Tech Stack

| Layer      | Technology                      |
|------------|---------------------------------|
| Backend    | Spring Boot 3.2.3 / Java 17     |
| Frontend   | Angular 17.3.0 / TypeScript 5.4 |
| Database   | MySQL 8                         |
| Auth       | JWT (Spring Security 6)         |
| Styling    | Custom CSS (CSS Variables)      |
| Build      | Maven 3.8+ / Angular CLI 17     |

### Brand Colors
- **Primary:** `#6aa84f` (FNB Green)
- **Secondary:** `#9fc5e8` (FNB Blue)

---

## Project Structure

```
FutureNamibiaBank/
├── README.md
├── fnb-backend/                          # Spring Boot REST API
│   ├── run.sh                            # Start script (sets JAVA_HOME automatically)
│   ├── pom.xml
│   └── src/main/
│       ├── java/com/fnb/bank/
│       │   ├── config/                   # SecurityConfig, JwtConfig, JwtAuthFilter
│       │   ├── controller/               # AuthController, AccountController, P2PPaymentController
│       │   ├── dto/                      # Request/Response DTOs (OpenAccountRequest,
│       │   │                             #   TransferRequest, TransactionDTO,
│       │   │                             #   P2PPaymentRequest, P2PPaymentResponse)
│       │   ├── model/                    # JPA entities: User, Account, Transaction
│       │   ├── repository/               # Spring Data JPA repositories
│       │   ├── service/                  # AccountService, P2PPaymentService, AuthService
│       │   └── FnbApplication.java
│       └── resources/
│           ├── application.properties
│           └── db/init.sql               # Database seed script
│
└── fnb-frontend/                         # Angular 17 SPA
    └── src/app/
        ├── components/
        │   ├── accounts/                 # Account management & KYC form
        │   ├── dashboard/                # Overview cards & quick actions
        │   ├── login/                    # Login page
        │   ├── navbar/                   # Top navigation bar
        │   ├── footer/                   # Footer
        │   ├── p2p-payment/              # P2P payment form + payment history
        │   └── transactions/             # Transfer form + transaction history table
        ├── guards/                       # AuthGuard (JWT route protection)
        ├── interceptors/                 # JwtInterceptor (attaches Bearer token)
        ├── models/                       # TypeScript interfaces (Account, Transaction, etc.)
        ├── services/                     # AccountService, AuthService
        ├── app.routes.ts
        └── app.config.ts
```

---

## Prerequisites

| Tool      | Version  | Notes                              |
|-----------|----------|------------------------------------|
| Java      | 17       | JDK 17 required                    |
| Maven     | 3.8+     | Or use the `run.sh` script         |
| Node.js   | 18+      |                                    |
| npm       | 9+       | Comes with Node.js                 |
| MySQL     | 8.x      | Local instance on port 3306        |

---

## Getting Started

### 1. Database Setup

Create the database and run the seed script:

```sql
CREATE DATABASE fnb_db;
```

```bash
mysql -u root -p fnb_db < fnb-backend/src/main/resources/db/init.sql
```

Or connect to MySQL and run:

```sql
USE fnb_db;
SOURCE fnb-backend/src/main/resources/db/init.sql;
```

Configure your credentials in `fnb-backend/src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fnb_db?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=your_password
```

---

### 2. Backend Setup

**Option A — using the run script (recommended):**
```bash
cd fnb-backend
chmod +x run.sh
./run.sh
```

**Option B — using Maven directly:**
```bash
cd fnb-backend
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
mvn spring-boot:run
```

> API runs at **http://localhost:8080**

---

### 3. Frontend Setup

```bash
cd fnb-frontend
npm install
npm start
```

> App runs at **http://localhost:4200**

---

## Default Admin Credentials

```
Email:    admin@fnb.na
Password: admin@fnb.na
```

> Change the admin password immediately after first login in production.

---

## API Endpoints

All endpoints except `/api/auth/**` require a **Bearer JWT token** in the `Authorization` header.

### Authentication — Public

| Method | Endpoint             | Description        | Auth Required |
|--------|----------------------|--------------------|---------------|
| POST   | `/api/auth/login`    | Login, returns JWT | No            |
| POST   | `/api/auth/register` | Register new user  | No            |

**Login request body:**
```json
{
  "email": "admin@fnb.na",
  "password": "admin@fnb.na"
}
```

**Login response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "userId": 1,
  "email": "admin@fnb.na"
}
```

---

### Accounts

| Method | Endpoint                              | Description                      |
|--------|---------------------------------------|----------------------------------|
| GET    | `/api/accounts/user/{userId}`         | Get all accounts for a user      |
| GET    | `/api/accounts/{accountNumber}`       | Get a single account by number   |
| POST   | `/api/accounts/create/{userId}`       | Open a new account (with KYC)    |
| POST   | `/api/accounts/transfer`              | Transfer funds between accounts  |
| GET    | `/api/accounts/{accountId}/transactions` | Get transaction history       |
| GET    | `/api/accounts/user/{userId}/payments`   | Get all PAYMENT transactions   |

---

### P2P Payment — IPN Integration

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| POST   | `/api/p2p-payment`  | Send a peer-to-peer payment          |

**Request body:**
```json
{
  "clientReference": "REF-20260316-5432",
  "senderAccountNumber": "FNB3596817777",
  "receiverAccountNumber": "FNB4569299567",
  "amount": 500.00,
  "currency": "NAD",
  "reference": "Rent payment March"
}
```

**Success response (HTTP 200):**
```json
{
  "status": "SUCCESS",
  "errorCode": null,
  "transactionId": "TXN202603161045321234",
  "message": "Payment processed successfully"
}
```

**Error response example (HTTP 400):**
```json
{
  "status": "FAILED",
  "errorCode": "ERR002",
  "transactionId": null,
  "message": "Receiver account not found"
}
```

**P2P Error Codes:**

| Code   | HTTP | Meaning                                          |
|--------|------|--------------------------------------------------|
| ERR001 | 400  | Missing or invalid required field               |
| ERR002 | 400  | Invalid account number format or account not found |
| ERR003 | 400  | Invalid currency (only NAD supported)           |
| ERR004 | 400  | Invalid amount (must be > 0)                    |
| ERR005 | 402  | Insufficient funds                              |
| ERR006 | 500  | Internal processing error                       |

**P2P Validation Rules:**
- `clientReference` must be unique per transaction
- Account numbers are alphanumeric, minimum 10 characters (e.g. `FNB4569299567`)
- `currency` must be `NAD`
- `amount` must be greater than `0`
- `reference` is required, max 50 characters

---

## Testing with Postman

### Step 1 — Login to get a token

`POST http://localhost:8080/api/auth/login`

Add a **Tests** script to save the token automatically:
```javascript
const res = pm.response.json();
pm.environment.set("jwt_token", res.token);
```

### Step 2 — Use the token on all other requests

In the **Authorization** tab → **Bearer Token** → `{{jwt_token}}`

---

## Application Properties Reference

```properties
# Server
server.port=8080

# JWT
fnb.jwt.secret=FNBSecretKey2024PaymentsMadeBetterNamibia!SecureKey256Bits
fnb.jwt.expiration=86400000        # 24 hours in milliseconds

# CORS (Angular dev server)
fnb.cors.allowed-origins=http://localhost:4200

# Actuator health check
management.endpoints.web.exposure.include=health,info
```

Health check: `GET http://localhost:8080/actuator/health`
