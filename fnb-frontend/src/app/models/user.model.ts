export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role?: string;
  active?: boolean;
  createdAt?: string;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}
