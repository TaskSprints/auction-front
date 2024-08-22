import React from "react";
import RegisterForm from "../component/RegisterForm";
const RegisterPage: React.FC = () => {
  return (
    <div>
      <div className="my-12 mb-10 text-center mb-6 ">
        <h1 className="text-5xl font-bold text-gray-900">Auction</h1>
      </div>
      <div className="text-lg flex justify-center space-x-8 -mb-px">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
