"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import RightBanner from "../_components/RightBanner";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

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
            Reset Your Password
          </h2>

          <p className="text-[16px] text-center text-gray1 mb-6">
            Please enter your password
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-4">
              {/* current password */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="current_pass"
                    placeholder="Current password"
                    className="authInp"
                    {...register("current_pass", {
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

                {errors.current_pass && (
                  <p className="error-msg">{errors.current_pass.message}</p>
                )}
              </div>

              {/* new password */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword1 ? "text" : "password"}
                    name="new_pass"
                    placeholder="New password"
                    className="authInp"
                    {...register("new_pass", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
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

                {errors.new_pass && (
                  <p className="error-msg">{errors.new_pass.message}</p>
                )}
              </div>

              {/* confirm password */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword2 ? "text" : "password"}
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
                        value === watch("new_pass") || "Passwords do not match",
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword2((prev) => !prev)}
                    className="cursor-pointer absolute top-1/2 right-3 -translate-1/2 text-gray-400 text-[20px]"
                  >
                    {showPassword2 ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>

                {errors.confirm_pass && (
                  <p className="error-msg">{errors.confirm_pass.message}</p>
                )}
              </div>
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-[.9] text-white font-semibold py-2 rounded-md h-[56px] cursor-pointer"
            >
              Reset
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <RightBanner></RightBanner>
    </div>
  );
};

export default ResetPassword;
