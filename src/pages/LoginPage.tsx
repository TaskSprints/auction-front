import React from "react";
import { SimpleHeader } from "widgets/Header/SimpleHeader";
import { LoginMethodMenu } from "features/login/ui/LoginMethodMenu";

export const LoginPage: React.FC = () => {
  return (
    <div>
      <div className="mb-10 my-10">
        <SimpleHeader />
      </div>
      <LoginMethodMenu />
    </div>
  );
};
