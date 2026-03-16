export interface Account {
  id?: number;
  accountNumber: string;
  accountType: 'SAVINGS' | 'CURRENT' | 'BUSINESS' | 'FIXED_DEPOSIT';
  balance: number;
  currency: string;
  active: boolean;
  createdAt?: string;
}

export interface Transaction {
  id?: number;
  referenceNumber: string;
  transactionType: 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER' | 'PAYMENT';
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REVERSED';
  amount: number;
  currency: string;
  description?: string;
  transactionDate: string;
  fromAccountNumber?: string;
  toAccountNumber?: string;
  credit: boolean;
}

export interface TransferRequest {
  sourceAccountNumber: string;
  destinationAccountNumber: string;
  amount: number;
  description?: string;
}

export interface OpenAccountRequest {
  accountType: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  idNumber: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface P2PPaymentRequest {
  clientReference: string;
  senderAccountNumber: string;
  receiverAccountNumber: string;
  amount: number;
  currency: string;
  reference: string;
}

export interface P2PPaymentResponse {
  status: 'SUCCESS' | 'FAILED';
  errorCode: string | null;
  transactionId: string | null;
  message: string;
}
