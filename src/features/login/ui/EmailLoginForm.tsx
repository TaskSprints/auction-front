import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "@/features/login/model";
import { Toaster, toast } from "react-hot-toast";

interface EmailLoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const EmailLoginForm: React.FC = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting, isValid },
  } = useForm<EmailLoginFormData>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange", // 실시간 유효성 검사
  });

  const email = watch("email");

  const onSubmit = (data: EmailLoginFormData) => {
    if (!data.email) {
      toast.error("⚠️ 이메일을 입력해주세요");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      toast.error("⚠️ 올바른 이메일 형식이 아닙니다");
      return;
    }
    if (!data.password) {
      toast.error("⚠️ 비밀번호를 입력해주세요");
      return;
    }

    if (!isValid) {
      toast.error("⚠️ 입력하신 정보를 다시 확인해주세요.");
      return;
    }

    login(data);
  };

  const clearEmail = () => {
    setValue("email", "");
  };

  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "14px",
            padding: "12px 16px",
            color: "#DC2626", // 빨간색
            fontWeight: "600", // 굵은 글씨
            backgroundColor: "#FEE2E2", // 연한 빨간색 배경
            border: "1px solid #DC2626",
          },
        }}
      />

      <motion.div
        className="bg-white p-8 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 relative min-h-[70px]">
            <span className="absolute top-3 left-0 pl-3 flex items-center text-gray-400">
              <FaEnvelope />
            </span>
            <input
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "올바른 이메일 형식이 아닙니다",
                },
              })}
              className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="아이디(이메일)"
            />
            {email && (
              <button
                type="button"
                className="absolute top-3 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                onClick={clearEmail}
              >
                <FaTimes />
              </button>
            )}
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6 relative min-h-[70px]">
            <span className="absolute top-3 left-0 pl-3 flex items-center text-gray-400">
              <FaLock />
            </span>
            <input
              {...register("password", {
                required: "비밀번호를 입력해주세요",
              })}
              type={showPassword ? "text" : "password"}
              className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="비밀번호"
            />
            <button
              type="button"
              className="absolute top-3 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register("rememberMe")}
                  className="form-checkbox h-4 w-4 text-red-600"
                />
                <span className="ml-2 text-gray-700">자동 로그인</span>
              </label>
            </div>

            <a href="/findUser" className="text-red-600 hover:text-red-600">
              아이디ㆍ비밀번호 찾기 {">"}
            </a>
          </div>

          <motion.button
            type="submit"
            className="w-full py-2 rounded-md transition bg-red-600 hover:bg-red-700 text-white"
          >
            {isSubmitting ? "로그인 중..." : "로그인"}
          </motion.button>

          <div className="border-t border-gray-300 my-4" />

          <motion.button
            onClick={() => {
              window.location.href = "/register";
            }}
            className="w-full bg-white text-red-600 border border-red-600 py-2 rounded-md hover:bg-red-600 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            회원가입
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};
