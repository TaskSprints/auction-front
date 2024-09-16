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
import TermsAgreementForm from "./TermsAgreementForm";
const RegisterForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkedPassword, setCheckedPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [termRequiredCheck, setTermRequiredCheck] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const clearEmail = () => {
        setEmail("");
    };

    return (
        <div className="text-lg flex justify-center space-x-8 -mb-px">
            <motion.div
                className="bg-white p-8 w-full max-w-lg mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <b className="text-sm text-extrabold">
                        회원정보를 입력해주세요
                    </b>
                    {/* Email Input */}
                    <div className="mt-4 mb-4 relative">
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="email"
                        ></label>
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <FaEnvelope />
                        </span>
                        <input
                            id="email"
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
                    {/* Password Input */}
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
                    {/* Confirm Password Input */}
                    <div className="mb-6 relative">
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="confirm-password"
                        ></label>
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <FaLock />
                        </span>
                        <input
                            id="confirm-password"
                            type={showPassword ? "text" : "password"}
                            value={checkedPassword}
                            onChange={(e) => setCheckedPassword(e.target.value)}
                            className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="비밀번호 확인"
                        />
                        <span
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    {/* Name Input */}
                    <div className="mb-4 relative">
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="name"
                        ></label>
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <FaUser />
                        </span>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="이름"
                        />
                    </div>
                    {/* Phone Input */}
                    <div className="mb-4 relative">
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="phone"
                        ></label>
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                            <FaPhone />
                        </span>
                        <input
                            id="phone"
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                            placeholder="휴대폰 번호"
                        />
                    </div>
                    <div className="border-t border-gray-300 mt-8"></div>
                    <TermsAgreementForm
                        termRequiredCheck={termRequiredCheck}
                        setTermRequiredCheck={setTermRequiredCheck}
                    />
                    <motion.button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition mt-5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        동의하고 가입하기
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default RegisterForm;
