import { httpClient } from "shared/api/httpClient";
import type {
  PhoneAuthRequest,
  AuthResponse,
  LoginRequest,
} from "features/login/model";

export const authApi = {
  getAllUsers: () => httpClient.get("/api/v1/user"),

  getUser: (email: string) =>
    httpClient.get<LoginRequest>(`/api/v1/user/${email}`),

  sendVerification: (data: Pick<PhoneAuthRequest, "phoneNumber">) =>
    httpClient.post("/api/v1/auth/phone/verification", data),

  verifyPhone: (data: PhoneAuthRequest) =>
    httpClient.post<AuthResponse>("/api/v1/auth/phone/verify", data),
};
