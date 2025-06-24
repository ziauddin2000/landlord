"use client";
import Image from "next/image";
import Link from "next/link";
import RightBanner from "../_components/RightBanner";
const Success = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white  py-10">
        <div className="w-full max-w-xl px-8">
          <Image
            src="/assets/images/success-ic.png"
            alt="Success"
            height={124}
            width={124}
            className="object-contain block mx-auto"
          ></Image>

          <h2 className="text-[32px] font-semibold text-center mb-2 tracking-[-0.5px]">
            Successful
          </h2>

          <p className="text-[16px] text-center text-gray1 mb-6">
            Congratulations! Your password has been successfully updated. Click
            Continue to log in
          </p>

          <form className="space-y-10">
            <div className="space-y-4"></div>

            {/* Redirect to Login */}
            <Link
              href="/"
              className="w-full bg-primary hover:opacity-[.9] text-white font-[500] py-2 rounded-md h-[56px] cursor-pointer text-center flex items-center justify-center"
            >
              Continue
            </Link>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <RightBanner></RightBanner>
    </div>
  );
};

export default Success;
