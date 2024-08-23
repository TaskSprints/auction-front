import React from "react";
import RegisterForm from "../components/register/RegisterForm";
import SimpleHeader from "../components/common/Header/SimpleHeader";
const RegisterPage: React.FC = () => {
  return (
    <div>
      <SimpleHeader />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
