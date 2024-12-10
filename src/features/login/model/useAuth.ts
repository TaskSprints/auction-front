import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type {
  LoginRequest,
  PhoneAuthRequest,
} from "@/features/login/model/auth.types";
import { toast } from "react-hot-toast";

import { authApi } from "../api/authApi";

export const useAuth = () => {
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequest) => {
      const response = await authApi.getAllUsers();
      const user = response.data.data.find(
        (userOne: any) => userOne.email === data.email,
      );

      if (!user) {
        throw new Error("⚠️ 존재하지 않는 사용자입니다.");
      }
      // TODO: 비밀번호 받아오는 API 백엔드에서 구현 후 수정
      // if (user.password !== data.password) {
      //   throw new Error("⚠️ 비밀번호가 일치하지 않습니다.");
      // }

      return { data: { accessToken: "dummy-token", user } };
    },
    onSuccess: (response: { data: { accessToken: string; user: any } }) => {
      toast.success("✅ 로그인되었습니다!");
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const phoneVerificationMutation = useMutation({
    mutationFn: (data: Pick<PhoneAuthRequest, "phoneNumber">) =>
      authApi.sendVerification(data),
    onSuccess: () => {
      toast.success("인증번호가 발송되었습니다.");
    },
    onError: () => {
      toast.error("인증번호 발송에 실패했습니다.");
    },
  });

  const phoneVerifyMutation = useMutation({
    mutationFn: (data: PhoneAuthRequest) => authApi.verifyPhone(data),
    onSuccess: () => {
      toast.success("인증이 완료되었습니다.");
      navigate("/");
    },
    onError: () => {
      toast.error("인증에 실패했습니다.");
    },
  });

  return {
    login: loginMutation.mutate,
    sendVerification: phoneVerificationMutation.mutate,
    verifyPhone: phoneVerifyMutation.mutate,
    isLoading:
      loginMutation.isPending ||
      phoneVerificationMutation.isPending ||
      phoneVerifyMutation.isPending,
  };
};
