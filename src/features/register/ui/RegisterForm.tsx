import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaTimes,
  FaUser,
  FaPhone,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useRegister } from "@/features/register/model";
import { Toaster, toast } from "react-hot-toast";
import { TermsAgreementForm } from "./TermsAgreementForm";
import { RegisterRequest } from "../model/register.types";

export const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termRequiredCheck, setTermRequiredCheck] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(""); // 비밀번호 확인용 상태 추가

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<RegisterRequest>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      name: "",
      nickname: "",
    },
  });

  const password = watch("password");
  const email = watch("email");
  const { register: registerUser } = useRegister();

  const onSubmit = (data: RegisterRequest) => {
    if (password !== confirmPassword) {
      toast("⚠️ 비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!termRequiredCheck) {
      toast("⚠️ 필수 약관(만 14세 이상, 이용약관)에 동의해주세요.");
      return;
    }

    if (!isValid) {
      toast.error("⚠️ 입력하신 정보를 다시 확인해주세요.");
      return;
    }

    registerUser(data);
  };

  return (
    <div className="text-lg flex justify-center space-x-8 -mb-px">
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
        className="bg-white p-8 w-full max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <b className="text-sm text-extrabold">회원정보를 입력해주세요</b>

          {/* Email Input */}
          <div className="mt-4 mb-4 relative min-h-[70px]">
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
                onClick={() => setValue("email", "")}
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

          {/* Password Input */}
          <div className="mb-4 relative min-h-[70px]">
            <span className="absolute top-3 left-0 pl-3 flex items-center text-gray-400">
              <FaLock />
            </span>
            <input
              {...register("password", {
                required: "비밀번호를 입력해주세요",
                minLength: {
                  value: 8,
                  message: "비밀번호는 8자 이상이어야 합니다",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: "비밀번호는 영문과 숫자를 포함해야 합니다",
                },
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

          {/* Confirm Password Input */}
          <div className="mb-4 relative min-h-[70px]">
            <span className="absolute top-3 left-0 pl-3 flex items-center text-gray-400">
              <FaLock />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="비밀번호 확인"
            />
            <button
              type="button"
              className="absolute top-3 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {password !== confirmPassword && confirmPassword !== "" && (
              <p className="text-red-500 text-sm mt-1">
                비밀번호가 일치하지 않습니다
              </p>
            )}
          </div>

          {/* Name Input */}
          <div className="mb-4 relative min-h-[70px]">
            <span className="absolute top-3 left-0 pl-3 flex items-center text-gray-400">
              <FaUser />
            </span>
            <input
              {...register("name", {
                required: "이름을 입력해주세요",
                minLength: {
                  value: 2,
                  message: "이름은 2자 이상이어야 합니다",
                },
              })}
              className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="이름"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Nickname Input */}
          <div className="mb-4 relative min-h-[70px]">
            <span className="absolute top-3 left-0 pl-3 flex items-center text-gray-400">
              <FaUser />
            </span>
            <input
              {...register("nickname", {
                required: "닉네임을 입력해주세요",
                minLength: {
                  value: 2,
                  message: "닉네임은 2자 이상이어야 합니다",
                },
              })}
              className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="닉네임"
            />
            {errors.nickname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.nickname.message}
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div className="mb-4 relative min-h-[70px]">
            <span className="absolute top-3 left-0 pl-3 flex items-center text-gray-400">
              <FaPhone />
            </span>
            <input
              // {...register("phone", {
              //   required: "휴대폰 번호를 입력해주세요",
              //   pattern: {
              //     value: /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/,
              //     message: "올바른 휴대폰 번호 형식이 아닙니다",
              //   },
              // })}
              className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="휴대폰 번호"
            />
            {/* {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )} */}
          </div>

          <div className="border-t border-gray-300 mt-8" />
          <TermsAgreementForm
            isRequiredTermsAgreed={termRequiredCheck}
            setIsRequiredTermsAgreed={setTermRequiredCheck}
          />

          <motion.button
            type="submit"
            className="w-full py-2 rounded-md transition mt-5 bg-red-600 hover:bg-red-700 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? "가입 중..." : "동의하고 가입하기"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};
