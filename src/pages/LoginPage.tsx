import React from "react";
import LoginMethodMenu from "../components/login/LoginMethodMenu";
import SimpleHeader from "../components/common/Header/SimpleHeader";

const LoginPage: React.FC = () => {
  return (
    <div>
      <div className="mb-10 my-10">
        <SimpleHeader />
      </div>
      <LoginMethodMenu />
    </div>
  );
};

export default LoginPage;
