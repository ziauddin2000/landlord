"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Link from "next/link";
import RightBanner from "../_components/RightBanner";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white  py-10">
        <div className="w-full max-w-xl px-8">
          <h2 className="text-[32px] font-semibold text-center mb-2 tracking-[-0.5px]">
            Sign up
          </h2>

          <p className="text-[16px] text-center text-gray1 mb-6">
            Enter your information to access your Admin panel
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-4">
              {/* name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="authInp"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="error-msg">{errors.name.message}</p>
                )}
              </div>

              {/* email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="authInp"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-msg">{errors.email.message}</p>
                )}
              </div>

              {/* phone number */}
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="authInp"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="error-msg">{errors.phone.message}</p>
                )}
              </div>

              {/* password */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="authInp"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="cursor-pointer absolute top-1/2 right-3 -translate-1/2 text-gray-400 text-[20px]"
                  >
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>

                {errors.password && (
                  <p className="error-msg">{errors.password.message}</p>
                )}
              </div>

              {/* confirm password */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword1 ? "text" : "password"}
                    name="confirm_pass"
                    placeholder="Confirm password"
                    className="authInp"
                    {...register("confirm_pass", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword1((prev) => !prev)}
                    className="cursor-pointer absolute top-1/2 right-3 -translate-1/2 text-gray-400 text-[20px]"
                  >
                    {showPassword1 ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>

                {errors.confirm_pass && (
                  <p className="error-msg">{errors.confirm_pass.message}</p>
                )}
              </div>
            </div>

            {/*  Terms */}

            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="custom-checkbox2 h-[18px] min-w-[18px] sm:h-[22px] sm:min-w-[22px] appearance-none rounded border border-gray-300 bg-white checked:bg-primary checked:border-primary checked:text-white flex items-center justify-center focus:outline-none"
                  name="terms"
                  {...register("terms", {
                    required: "Agree with our terms and condition",
                  })}
                />

                <p className="text-sm  text-gray-600 font-[500] select-none">
                  I agree to the{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </label>

              {errors.terms && (
                <p className="error-msg">{errors.terms.message}</p>
              )}
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-[.9] text-white font-[500] py-2 rounded-md h-[56px] cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-[16px] text-[#404040] mt-6">
            Already have an account?{" "}
            <Link href="/" className="text-primary font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <RightBanner></RightBanner>
    </div>
  );
};

export default SignUp;
