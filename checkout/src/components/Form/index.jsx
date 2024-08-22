import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

// Esquema de validación para el login
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// Esquema de validación para el registro
const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
});

const LoginForm = ({ signUp = false }) => {
  const schema = signUp ? signUpSchema : loginSchema;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-5 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex flex-col gap-4">
        {signUp && (
          <>
            <div className="w-full">
              <input
                {...register("firstName")}
                type="text"
                placeholder="First Name"
                className="py-2.5 px-3 w-full"
              />
              {errors.firstName && (
                <div className="text-red-500">{errors.firstName.message}</div>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("lastName")}
                type="text"
                placeholder="Last Name"
                className="py-2.5 px-3  w-full"
              />
              {errors.lastName && (
                <div className="text-red-500">{errors.lastName.message}</div>
              )}
            </div>
          </>
        )}
        <div className="w-full">
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="py-2.5 px-3  w-full"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="w-full">
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="py-2.5 px-3  w-full"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-[#1F1511] text-[#f7f3ed] py-4 p-8 w-full rounded-sm"
      >
        {isSubmitting ? "Loading..." : signUp ? "Create an Account" : "Login"}
      </button>
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}
      {signUp ? (
        <p>
          Already an account? <Link to={"/login"}>Login</Link>
        </p>
      ) : (
        <p>
          Don't have an account? <Link to={"/register"}>Sign Up</Link>
        </p>
      )}
    </form>
  );
};

export default LoginForm;
