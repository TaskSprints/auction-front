import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { registerApi } from "../api/registerApi";
import type { RegisterRequest } from "./register.types";

export const useRegister = () => {
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: (data: RegisterRequest) => registerApi.register(data),
    onSuccess: (response) => {
      toast.success("✅ 회원가입이 완료되었습니다!");
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/login");
    },
    onError: () => {
      toast.error(
        // error.response?.data?.message ||
        "⚠️ 이미 가입되어 있는 회원정보 입니다.",
      );
    },
  });

  return {
    register: registerMutation.mutate,
    isLoading: registerMutation.isPending,
  };
};
