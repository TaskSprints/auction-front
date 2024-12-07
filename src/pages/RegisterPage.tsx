import React from "react";
import { SimpleHeader } from "widgets/Header/SimpleHeader";
import { RegisterForm } from "features/register/ui/RegisterForm";

export const RegisterPage: React.FC = () => {
  return (
    <div>
      <div className="mb-10 my-10">
        <SimpleHeader />
      </div>
      <RegisterForm />
    </div>
  );
};
