import { api } from "@/libs/api";

export const userApi = {
  getAllUsers: () => api.get("/api/v1/user"),
};
