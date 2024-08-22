import React from "react";
import LoginMethodMenu from "../components/login/LoginMethodMenu";

const LoginPage: React.FC = () => {
  return (
    <div>
      <div className="my-12 mb-10 text-center mb-6 ">
        <h1 className="text-5xl font-bold text-gray-900">Auction</h1>
      </div>
      <LoginMethodMenu />
    </div>
  );
};

export default LoginPage;
