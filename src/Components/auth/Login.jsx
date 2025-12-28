"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Social from "./Social";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        // send login data to backend
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <div className="card w-full max-w-md bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">
                        Welcome Back to Care.io
                    </h2>


                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />
                        {errors.email && (
                            <p className="text-error text-sm">{errors.email.message}</p>
                        )}

                        {/* Password */}
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="input input-bordered w-full pr-10"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />

                            <span
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>

                        {errors.password && (
                            <p className="text-error text-sm">{errors.password.message}</p>
                        )}

                        {/* Forgot Password */}
                        <div className="text-right">
                            <a className="link link-hover text-sm">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Sign In
                        </button>
                    </form>

                    <div className="divider">OR</div>

                    {/* Social Login */}
                    <Social />

                    <p className="text-center text-sm mt-2">
                        Don’t have an account?{" "}
                        <a href="/register" className="link link-primary font-semibold">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
