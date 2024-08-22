import React, { useState } from "react";
import EmailLoginForm from "./EmailLoginForm";

const LoginMethodMenu: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState("email");

  const renderComponent = () => {
    switch (selectedMenu) {
      case "email":
        return <EmailLoginForm />;
      case "qr":
        return <div>QR코드 로그인 컴포넌트</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full border-b border-gray-300 mb-4">
        <div className="text-lg flex justify-center space-x-8 -mb-px">
          <button
            className={`${
              selectedMenu === "email"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-600"
            } pb-2`}
            onClick={() => setSelectedMenu("email")}
          >
            이메일 로그인
          </button>
          <button
            className={`${
              selectedMenu === "qr"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-600"
            } pb-2`}
            onClick={() => setSelectedMenu("qr")}
          >
            QR코드 로그인
          </button>
        </div>
      </div>
      <div className="w-full max-w-md">{renderComponent()}</div>
    </div>
  );
};

export default LoginMethodMenu;
