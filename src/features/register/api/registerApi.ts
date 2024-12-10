import { httpClient } from "shared/api/httpClient";
import type { AuthResponse } from "features/login/model";
import type { RegisterRequest } from "../model/register.types";

export const registerApi = {
  register: (data: RegisterRequest) =>
    httpClient.post<AuthResponse>("/api/v1/user", data),
};
