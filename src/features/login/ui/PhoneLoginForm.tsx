import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "@/features/login/model";

interface PhoneLoginFormData {
  phoneNumber: string;
  verificationCode?: string;
}

export const PhoneLoginForm: React.FC = () => {
  const { sendVerification, verifyPhone } = useAuth();
  const [showVerification, setShowVerification] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PhoneLoginFormData>({
    defaultValues: {
      phoneNumber: "",
    },
  });

  const phoneNumber = watch("phoneNumber");

  const onSubmit = (data: PhoneLoginFormData) => {
    if (!showVerification) {
      sendVerification({ phoneNumber: data.phoneNumber });
      setShowVerification(true);
    } else {
      verifyPhone(data);
    }
  };

  const clearPhoneNumber = () => {
    setValue("phoneNumber", "");
  };

  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  return (
    <motion.div
      className="bg-white p-8 w-full max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <FaPhone />
          </span>
          <input
            {...register("phoneNumber", {
              required: "휴대폰 번호를 입력해주세요",
              pattern: {
                value: /^01[0-9]-?[0-9]{4}-?[0-9]{4}$/,
                message: "올바른 휴대폰 번호 형식이 아닙니다",
              },
            })}
            className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="휴대폰 번호"
          />
          {phoneNumber && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
              onClick={clearPhoneNumber}
            >
              <FaTimes />
            </button>
          )}
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        {showVerification && (
          <div className="mb-4 relative">
            <input
              {...register("verificationCode", {
                required: "인증번호를 입력해주세요",
              })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="인증번호 입력"
            />
          </div>
        )}

        <motion.button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showVerification ? "인증하기" : "인증번호 발송"}
        </motion.button>

        <div className="border-t border-gray-300 my-4" />

        <motion.button
          onClick={() => handleRegisterClick()}
          type="button"
          className="w-full bg-white text-red-600 border border-red-600 py-2 rounded-md hover:bg-red-600 hover:text-white transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          회원가입
        </motion.button>
      </form>
    </motion.div>
  );
};
