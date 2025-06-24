"use client";

import { useForm } from "react-hook-form";
import RightBanner from "../_components/RightBanner";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
            Forgot Password
          </h2>

          <p className="text-[16px] text-center text-gray1 mb-6">
            Enter your email or phone number to get OTP
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-4">
              {/* email */}
              <div>
                <input
                  type="email"
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
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-[.9] text-white font-semibold py-2 rounded-md h-[56px] cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <RightBanner></RightBanner>
    </div>
  );
};

export default ForgotPassword;
