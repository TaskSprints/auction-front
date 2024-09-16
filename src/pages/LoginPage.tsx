import React from "react";
import LoginMethodMenu from "../features/login/LoginMethodMenu";
import SimpleHeader from "../widgets/Header/SimpleHeader";

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
