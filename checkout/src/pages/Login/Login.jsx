import React from "react";
import LoginForm from "../../components/Form";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1>Login</h1>
      <span>Enter your email and password to login:</span>
      <LoginForm />
      <span>Don't have an account? Sign up</span>
    </div>
  );
};

export default Login;
