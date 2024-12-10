export interface LoginRequest {
  email: string;
  password: string;
  // rememberMe: boolean;
}

export interface PhoneAuthRequest {
  phoneNumber: string;
  verificationCode?: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  // 필요한 다른 응답 필드들...
}
