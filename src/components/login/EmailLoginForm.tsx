import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const EmailLoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const clearEmail = () => {
    setEmail("");
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <motion.div
      className="bg-white p-8 w-full max-w-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="mb-4 relative">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="username"
          ></label>
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <FaEnvelope />
          </span>
          <input
            id="username"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="아이디(이메일)"
          />
          {email && (
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
              onClick={clearEmail}
            >
              <FaTimes />
            </span>
          )}
        </div>

        <div className="mb-6 relative">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="password"
          ></label>
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <FaLock />
          </span>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="비밀번호"
          />
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="flex justify-between text-sm text-gray-500">
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="form-checkbox h-4 w-4 text-red-600"
              />
              <span className="ml-2 text-gray-700">자동 로그인</span>
            </label>
          </div>

          <a href="#" className="text-red-600 hover:text-red-600">
            아이디ㆍ비밀번호 찾기 {">"}
          </a>
        </div>

        <motion.button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          로그인
        </motion.button>

        <div className="border-t border-gray-300 my-4"></div>

        <motion.button
          type="button"
          className="w-full bg-white text-red-600 border border-red-600 py-2 rounded-md hover:bg-red-600 hover:text-white transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          회원가입
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EmailLoginForm;
