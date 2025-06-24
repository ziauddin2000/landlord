"use client";

import React, { useRef, useState } from "react";
import RightBanner from "../_components/RightBanner";

const LoginOtp = () => {
  //  OTP Input
  const inputRefs = useRef([]);
  const [otpValues, setOtpValues] = useState(["", "", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // Only digits
    if (value) {
      const newOtp = [...otpValues];
      newOtp[index] = value;
      setOtpValues(newOtp);
      if (index < 4) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otpValues];
      if (!newOtp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
      newOtp[index] = "";
      setOtpValues(newOtp);
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white  py-10">
        <div className="w-full max-w-xl px-8">
          <h2 className="text-[32px] font-semibold text-center mb-2 tracking-[-0.5px]">
            Enter OTP
          </h2>

          <p className="text-[16px] text-center text-gray1 mb-6">
            Please enter your OTP code
          </p>

          <form className="space-y-10">
            <div className="otpEra grid grid-cols-5 gap-2 items-center justify-center">
              {/* OTP Code */}
              {otpValues.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  ref={(el) => (inputRefs.current[i] = el)}
                  className={`otpInp ${
                    val ? "border-primary" : "border-[#C2C2C2]"
                  }`}
                />
              ))}
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-[.9] text-white font-semibold py-2 rounded-md h-[56px] cursor-pointer"
            >
              Submit
            </button>
          </form>

          <p className="text-center text-[16px] text-[#404040] mt-6">
            Haven't you got the OTP yet?
            <a href="#" className="text-primary font-medium hover:underline">
              {" "}
              Resend Code
            </a>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <RightBanner></RightBanner>
    </div>
  );
};

export default LoginOtp;
