"use client";
import { useForm } from "react-hook-form";
import Social from "./Social";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // submit to backend here
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
            {errors.nid && (
              <p className="text-error text-sm">{errors.nid.message}</p>
            )}

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-error text-sm">{errors.name.message}</p>
            )}

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-error text-sm">{errors.email.message}</p>
            )}

            {/* Contact */}
            <input
              type="tel"
              placeholder="Contact Number"
              className="input input-bordered w-full"
              {...register("contact", { required: "Contact is required" })}
            />
            {errors.contact && (
              <p className="text-error text-sm">{errors.contact.message}</p>
            )}

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                validate: {
                  hasUpper: (v) =>
                    /[A-Z]/.test(v) ||
                    "Must include at least 1 uppercase letter",
                  hasLower: (v) =>
                    /[a-z]/.test(v) ||
                    "Must include at least 1 lowercase letter",
                },
              })}
            />
            {errors.password && (
              <p className="text-error text-sm">
                {errors.password.message}
              </p>
            )}

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </form>

          <div className="divider">OR</div>

          {/* Social Login */}
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Register;
