"use client";

import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const AccountSettings = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "/assets/images/user-01.jpg"
  );
  const [uploadError, setUploadError] = useState("");

  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadError("");

    if (!file) return;

    // Validate file type
    if (!file.type.match(/image\/(jpeg|jpg|png)/)) {
      setUploadError("Please select a valid JPG or PNG image");
      return;
    }

    // Validate file size (2MB = 2 * 1024 * 1024 bytes)
    if (file.size > 2 * 1024 * 1024) {
      setUploadError("File size must be under 2 MB");
      return;
    }

    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfileImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="py-8 px-6 bg-white shadow rounded-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Profile Photo Section */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={profileImage}
            alt="profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/jpeg,image/jpg,image/png"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={handleUploadClick}
              className="border px-4 py-2 rounded-sm text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Upload Photo
            </button>
            <p className="text-sm text-t-secondary mt-2">JPG, PNG under 2 MB</p>
            {uploadError && (
              <p className="text-red-500 text-sm mt-1">{uploadError}</p>
            )}
          </div>
        </div>

        {/* Change Name & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-base font-[600]">
              Change Name & Contact info.
            </label>
            <p className="text-sm text-t-secondary mt-1">
              Modify your information
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Johan Alex"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 h-[48px] rounded-md focus:outline-none border border-[#E0E0E0] focus:border-primary"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <input
              type="email"
              placeholder="john@livinvestors.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-4 py-2 h-[48px] rounded-md focus:outline-none border border-[#E0E0E0] focus:border-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              type="text"
              placeholder="+88 012 345 678"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full px-4 py-2 h-[48px] rounded-md focus:outline-none border border-[#E0E0E0] focus:border-primary"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <hr className="my-6" />

        {/* Change Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-base font-[600]">Change Password</label>
            <p className="text-sm text-t-secondary mt-1">
              Set a new password to keep your account secure.
            </p>
          </div>
          <div className="space-y-4">
            {/* Old Password */}
            <div className="relative">
              <input
                type={showOldPassword ? "text" : "password"}
                placeholder="Old Password"
                {...register("oldPassword", {
                  required: "Current password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full px-4 py-2 h-[48px] rounded-md focus:outline-none border border-[#E0E0E0] focus:border-primary"
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-t-secondary"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            {errors.oldPassword && (
              <p className="text-red-500 text-sm">
                {errors.oldPassword.message}
              </p>
            )}

            {/* New Password */}
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                className="w-full px-4 py-2 h-[48px] rounded-md focus:outline-none border border-[#E0E0E0] focus:border-primary"
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-t-secondary"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                  validate: (val) =>
                    val === watch("newPassword") || "Passwords do not match",
                })}
                className="w-full px-4 py-2 h-[48px] rounded-md focus:outline-none border border-[#E0E0E0] focus:border-primary"
              />
              <span
                className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-t-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">
          <button
            type="submit"
            className="bg-primary hover:bg-[#c77700] text-white px-6 py-2 rounded-md cursor-pointer"
          >
            Update
          </button>
          <button
            type="button"
            className="border px-6 py-2 rounded-md text-black"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettings;
