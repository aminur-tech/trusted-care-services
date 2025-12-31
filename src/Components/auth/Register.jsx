"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Social from "./Social";
import { postUser } from "@/actions/server/auth";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();


  const onSubmit = async (data) => {
    try {
      const res = await postUser(data);
       console.log("POST USER RESPONSE:", res); 

      if (res?.success) {
        await Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Please login to continue.",
          confirmButtonText: "Go to Login",
        });

        router.push("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: res?.message || "Something went wrong",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Server error. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Create Account</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* NID */}
            <input
              type="text"
              placeholder="NID Number"
              className="input input-bordered w-full"
              {...register("nid", { required: "NID is required" })}
            />
            {errors.nid && <p className="text-error text-sm">{errors.nid.message}</p>}

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-error text-sm">{errors.name.message}</p>}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-error text-sm">{errors.email.message}</p>}

            {/* Contact */}
            <input
              type="tel"
              placeholder="Contact Number"
              className="input input-bordered w-full"
              {...register("contact", { required: "Contact is required" })}
            />
            {errors.contact && <p className="text-error text-sm">{errors.contact.message}</p>}

            {/* Password with Eye Toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full pr-10"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  validate: {
                    hasUpper: (v) =>
                      /[A-Z]/.test(v) || "Must include 1 uppercase letter",
                    hasLower: (v) =>
                      /[a-z]/.test(v) || "Must include 1 lowercase letter",
                  },
                })}
              />

              {/* Eye Icon */}
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

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <div className="divider">OR</div>

          {/* Social Login */}
          <Social />
          <p className="text-center text-sm mt-3">
            Already have an account?{" "}
            <a href="/login" className="link link-primary font-semibold">
              Login
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;
