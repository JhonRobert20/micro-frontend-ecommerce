import React from "react";
import LoginForm from "../../components/Form";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto h-[calc(100vh-4rem)] gap-6 max-w-[27.5rem]">
      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="tracking-widest	">Login</h1>
        <span>Enter your email and password to login:</span>
      </div>
      <LoginForm signUp={true} />
    </div>
  );
};

export default Login;
