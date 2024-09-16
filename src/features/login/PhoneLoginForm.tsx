import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaTimes } from "react-icons/fa";

const PhoneLoginForm: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const clearPhoneNumber = () => {
        setPhoneNumber("");
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
                        htmlFor="phone"
                    ></label>
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <FaPhone />
                    </span>
                    <input
                        id="phone"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full pl-10 pr-10 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="휴대폰 번호"
                    />
                    {phoneNumber && (
                        <span
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                            onClick={clearPhoneNumber}
                        >
                            <FaTimes />
                        </span>
                    )}
                </div>

                <motion.button
                    type="submit"
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    인증번호 발송
                </motion.button>

                <div className="border-t border-gray-300 my-4"></div>

                <motion.button
                    onClick={() => (window.location.href = "/register")}
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

export default PhoneLoginForm;
