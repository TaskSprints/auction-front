import React from "react";
import RegisterForm from "../features/register/RegisterForm";
import SimpleHeader from "../widgets/Header/SimpleHeader";
const RegisterPage: React.FC = () => {
    return (
        <div>
            <div className="mb-10 my-10">
                <SimpleHeader />
            </div>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
