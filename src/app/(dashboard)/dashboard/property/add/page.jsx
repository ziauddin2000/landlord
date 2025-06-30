"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FiUpload, FiPlus, FiMinus } from "react-icons/fi";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const AddProperty = () => {
  //   amenities
  const amenitiesList = ["Parking", "Gym Access", "CCTV", "Balcony"];

  //   property size
  const [selectedSize, setSelectedSize] = useState(null);
  const propertySizeList = ["950 sqft", "1350 sqft", "1550 sqft", "1600 sqft"];
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [floors, setFloors] = useState(1);
  const [propertyAge, setPropertyAge] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  //   submit
  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5] min-h-screen">
      {/* form */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* breadcrumb and submit button */}
        <div className="flex flex-wrap justify-between">
          {/* Breadcrumb */}
          <Breadcrumb className="*:text-[16px] py-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/property">
                  Property List
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-t-primary">
                  Add Property
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-4 py-2 rounded-sm text-base cursor-pointer"
            >
              Saved
            </button>
            <Link href="/dashboard/property">
              <button
                type="button"
                className="bg-white border border-[#c2c2c2] text-t-secondary px-4 py-2 rounded-sm text-base cursor-pointer"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>

        {/* form content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow my-3">
          {/* Left Side */}
          <div className="space-y-4">
            {/* Property Image Upload */}
            <label className="block">
              <span className="block mb-2 font-medium text-base">
                Property Image
              </span>
              <div className="border-1 border-dashed border-primary rounded-lg py-8 p-4 flex flex-col items-center justify-center bg-[#fff9e6] text-center cursor-pointer">
                <FiUpload size={24} />
                <h5 className="text-sm mt-2 text-t-primary font-medium">
                  Upload Image
                </h5>
                <p className="text-sm mt-1 text-t-secondary">
                  Format: JPG, PNG (10mb max size)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  {...register("propertyImage", {
                    required: "Property image is required",
                  })}
                  className="hidden"
                />
              </div>
              {errors.propertyImage && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.propertyImage.message}
                </span>
              )}
            </label>

            {/* Property Virtual Video Upload */}
            <label className="block">
              <span className="block mb-2 font-medium text-base">
                Property Virtual Video
              </span>
              <div className="border-1 border-dashed border-primary rounded-lg py-8 p-4 flex flex-col items-center justify-center bg-[#fff9e6] text-center cursor-pointer">
                <FiUpload size={24} />
                <h5 className="text-sm mt-2 text-t-primary font-medium">
                  Upload Video
                </h5>
                <p className="text-sm mt-1 text-t-secondary">
                  Format: MP4, AVI, MOV, WMV (40mb max size)
                </p>
                <input
                  type="file"
                  accept="video/*"
                  {...register("propertyVideo", {
                    required: "Property video is required",
                  })}
                  className="hidden"
                />
              </div>
              {errors.propertyVideo && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.propertyVideo.message}
                </span>
              )}
            </label>

            {/* Property Size */}
            <div>
              <span className="block mb-2 font-medium text-base">
                Property Size
              </span>
              <div className="flex flex-wrap gap-2">
                {propertySizeList.map((size, idx) => (
                  <label key={idx} className="relative">
                    <input
                      type="radio"
                      name="propertySize"
                      value={size}
                      onChange={() => handleSizeChange(size)}
                      checked={selectedSize === size}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <button
                      type="button"
                      className={`px-3 py-2 border bg-transparent text-sm rounded cursor-pointer font-medium
              ${
                selectedSize === size
                  ? "text-primary border border-primary"
                  : "border text-t-secondary  border-[#C2C2C2]"
              }`}
                    >
                      {size}
                    </button>
                  </label>
                ))}
                <button
                  type="button"
                  className="flex items-center px-3 py-1 border border-gray-300 rounded bg-neutral-100 text-t-secondary cursor-pointer text-sm font-medium"
                >
                  Add <FiPlus size={16} />
                </button>
              </div>
            </div>

            {/* bedrooms and bathrooms */}
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <span className="block mb-2 font-medium text-base">
                  Bed Room
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                    className="w-[40px] h-[30px] flex items-center justify-center border border-[#C2C2C2] text-t-secondary text-sm rounded bg-transparent hover:bg-neutral-100 cursor-pointer"
                  >
                    <FiMinus />
                  </button>
                  <input
                    type="text"
                    name="bedrooms"
                    id="bedrooms"
                    className="w-[40px] h-[30px] flex items-center justify-center text-center text-primary text-sm border border-primary rounded cursor-pointer focus:outline-none select-none"
                    value={bedrooms}
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => setBedrooms(bedrooms + 1)}
                    className="w-[40px] h-[30px]  flex items-center justify-center border border-[#C2C2C2] text-t-secondary text-sm rounded bg-transparent hover:bg-neutral-100 cursor-pointer"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div>
                <span className="block mb-2 font-medium text-base">
                  Bath Room
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                    className="w-[40px] h-[30px]  flex items-center justify-center border border-[#C2C2C2] text-t-secondary text-sm rounded bg-transparent hover:bg-neutral-100 cursor-pointer"
                  >
                    <FiMinus />
                  </button>
                  <input
                    type="text"
                    name="bathrooms"
                    id="bathrooms"
                    className="w-[40px] h-[30px] flex items-center justify-center text-center text-primary text-sm border border-primary rounded cursor-pointer focus:outline-none select-none"
                    value={bathrooms}
                    readOnly
                  />
                  <button
                    type="button"
                    onClick={() => setBathrooms(bathrooms + 1)}
                    className="w-[40px] h-[30px]  flex items-center justify-center border border-[#C2C2C2] text-t-secondary text-sm rounded bg-transparent hover:bg-neutral-100 cursor-pointer"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>

            {/* Floors and Property Age */}
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <span className="block mb-2 font-medium text-base">Floors</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFloors(Math.max(1, floors - 1))}
                    className="w-[40px] h-[30px]  flex items-center justify-center border border-[#C2C2C2] text-t-secondary text-sm rounded bg-transparent hover:bg-neutral-100 cursor-pointer"
                  >
                    <FiMinus />
                  </button>
                  <input
                    type="text"
                    name="floors"
                    id="floors"
                    className="w-[40px] h-[30px] flex items-center justify-center text-center text-primary text-sm border border-primary rounded cursor-pointer focus:outline-none select-none"
                    value={floors}
                    readOnly
                  />

                  <button
                    type="button"
                    onClick={() => setFloors(floors + 1)}
                    className="w-[40px] h-[30px]  flex items-center justify-center border border-[#C2C2C2] text-t-secondary text-sm rounded bg-transparent hover:bg-neutral-100 cursor-pointer"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
              <div>
                <span className="block mb-2 font-medium text-base">
                  Property Age
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPropertyAge(Math.max(1, propertyAge - 1))}
                    className="w-[40px] h-[30px]  flex items-center justify-center border border-[#C2C2C2] text-t-secondary text-sm rounded bg-transparent hover:bg-neutral-100 cursor-pointer"
                  >
                    <FiMinus />
                  </button>
                  <input
                    type="text"
                    name="propertyAge"
                    id="propertyAge"
                    className="w-[40px] h-[30px] flex items-center justify-center text-center text-primary text-sm border border-primary rounded cursor-pointer focus:outline-none select-none"
                    value={propertyAge}
                    readOnly
                  />

                  <button
                    type="button"
                    onClick={() => setPropertyAge(propertyAge + 1)}
                    className="w-[40px] h-[30px]  flex items-center justify-center border border-[#C2C2C2] text-t-secondary text-sm rounded bg-transparent hover:bg-neutral-100 cursor-pointer"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <span className="block mb-2 font-medium text-base">
                Amenities
              </span>
              <div className="flex items-center flex-wrap gap-4">
                {amenitiesList.map((amenity) => (
                  <label
                    key={amenity}
                    className="flex items-center gap-2 cursor-pointer text-base font-normal"
                  >
                    <input
                      type="checkbox"
                      onChange={() => handleAmenityChange(amenity)}
                      className="custom-checkbox h-[20px] w-[20px] appearance-none rounded border border-gray-300 bg-white checked:bg-primary checked:border-primary checked:text-white flex items-center justify-center focus:outline-none text-xs"
                    />
                    {amenity}
                  </label>
                ))}
                <button
                  type="button"
                  className="flex items-center px-3 py-1 border border-gray-300 rounded bg-neutral-100 text-t-secondary cursor-pointer text-sm font-medium"
                >
                  Add <FiPlus size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {/* Property Name */}
            <div>
              <label className="block mb-2 font-medium text-base">
                Property Name
              </label>
              <input
                type="text"
                {...register("propertyName", {
                  required: "Property name is required",
                })}
                className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
                placeholder="Oakwood Avenue"
              />
              {errors.propertyName && (
                <span className="error-msg">{errors.propertyName.message}</span>
              )}
            </div>

            {/* Price */}
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-base">
                  Price
                </label>
                <input
                  type="number"
                  {...register("price", {
                    required: "Price is required",
                    min: 1,
                  })}
                  className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
                  placeholder="$1200"
                />
                {errors.price && (
                  <span className="error-msg">{errors.price.message}</span>
                )}
              </div>
              <div>
                <label className="block mb-2 font-medium text-base">
                  Currency
                </label>
                <Select defaultValue="USD">
                  <SelectTrigger
                    className="cursor-pointer border border-[#c2c2c2] rounded-sm px-3 py-3 text-base focus:outline-none focus:border-primary"
                    style={{ height: "50px" }}
                  >
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem selected value="USD">
                      USD
                    </SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="INR">INR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 font-medium text-base">
                Location
              </label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
                placeholder="Maple Grove 42 Elm St, Austin, TX"
              />
              {errors.location && (
                <span className="error-msg">{errors.location.message}</span>
              )}
            </div>

            {/* Property Status */}
            <div>
              <label className="block mb-2 font-medium text-base">
                Property Status
              </label>
              <Select>
                <SelectTrigger
                  className="w-full cursor-pointer border border-[#c2c2c2] rounded-sm px-3 py-3 text-base focus:outline-none focus:border-primary"
                  style={{ height: "50px" }}
                  {...register("propertyStatus", {
                    required: "Select Property status",
                  })}
                >
                  <SelectValue placeholder="Property Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="For Rent">For Rent</SelectItem>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                </SelectContent>
              </Select>
              {errors.propertyStatus && (
                <span className="error-msg">
                  {errors.propertyStatus.message}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 font-medium text-base">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[100px]"
                rows={3}
                placeholder="Description"
              />
              {errors.description && (
                <span className="error-msg">{errors.description.message}</span>
              )}
            </div>

            {/* Info Boxes */}
            <div>
              <label className="block mb-2 font-medium text-base">
                Automatic Lease Agreement Generation
              </label>
              <textarea
                className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[100px]"
                {...register("automaticLeaseAgreementGeneration", {
                  required: "Automatic Lease Agreement Generation is required",
                })}
              />
              {errors.automaticLeaseAgreementGeneration && (
                <span className="error-msg">
                  {errors.automaticLeaseAgreementGeneration.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-base">
                No Credit Impact
              </label>
              <textarea
                className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[100px]"
                {...register("noCreditImpact", {
                  required: "No Credit Impact is required",
                })}
              />
              {errors.noCreditImpact && (
                <span className="error-msg">
                  {errors.noCreditImpact.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-2 font-medium text-base">
                Cancellation policy
              </label>
              <textarea
                className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[100px]"
                {...register("cancellationPolicy", {
                  required: "Cancellation Policy is required",
                })}
              />
              {errors.cancellationPolicy && (
                <span className="error-msg">
                  {errors.cancellationPolicy.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
