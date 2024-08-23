import React from "react";
import LoginMethodMenu from "../components/login/LoginMethodMenu";
import SimpleHeader from "../components/common/Header/SimpleHeader";

const LoginPage: React.FC = () => {
  return (
    <div>
      <SimpleHeader />
      <LoginMethodMenu />
    </div>
  );
};

export default LoginPage;
