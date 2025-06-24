"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import RightBanner from "../_components/RightBanner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BusinessInfo = () => {
  // uploaded file name
  const [fileName, setFileName] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // Form Validate & Submit
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
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
            Business Information
          </h2>

          <p className="text-[16px] text-center text-gray1 mb-10">
            Enter your information to access your Admin panel
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="space-y-4">
              {/* number of units */}
              <div>
                <label className="text-[16px] block mb-2 text-[#101010]">
                  Number of Units Managed
                </label>

                <Controller
                  name="unit"
                  control={control}
                  rules={{ required: "Select number of units" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className="authSelect cursor-pointer"
                        style={{ height: "56px" }}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="1-5">1-5</SelectItem>
                          <SelectItem value="5-10">5-10</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.unit && (
                  <p className="error-msg">{errors.unit.message}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="text-[16px] block mb-2 text-[#101010]">
                  Location
                </label>
                <div className="relative">
                  <HiOutlineLocationMarker className="absolute top-1/2 -translate-1/2 left-6 text-[16px]" />
                  <input
                    type="text"
                    name="location"
                    placeholder="New York, NY"
                    className="authInp"
                    style={{ paddingLeft: "40px" }}
                    {...register("location", {
                      required: "Location is required",
                    })}
                  />
                </div>

                {errors.location && (
                  <p className="error-msg">{errors.location.message}</p>
                )}
              </div>

              {/* Business ID */}
              <div>
                <label className="text-[16px] block mb-2 text-[#101010]">
                  Upload ID or business license
                </label>

                {/* Hidden actual input */}
                <input
                  type="file"
                  id="fileUpload"
                  className="hidden"
                  name="id"
                  {...register("file", {
                    required: "ID card or Licenses are required",
                  })}
                  onChange={handleFileChange}
                />

                {/* Custom styled label */}
                <label
                  htmlFor="fileUpload"
                  className={`cursor-pointer flex gap-2 items-center justify-center w-full h-[80px] border border-dashed rounded-md hover:border-primary transition-all ${
                    fileName ? "border-primary" : "border-[#C2C2C2]"
                  }`}
                >
                  <FiUpload className="text-[#666]" />
                  <span className="text-sm font-medium">Upload</span>
                </label>

                {/* Display uploaded file name */}
                {fileName && (
                  <p className="mt-2 text-sm text-gray-600 truncate">
                    <span className="font-medium text-black">{fileName}</span>
                  </p>
                )}

                {errors.file && (
                  <p className="error-msg">{errors.file.message}</p>
                )}
              </div>
            </div>

            {/* submit btn */}
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-[.9] text-white font-[500] py-2 rounded-md h-[56px] cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}

      <RightBanner></RightBanner>
    </div>
  );
};

export default BusinessInfo;
