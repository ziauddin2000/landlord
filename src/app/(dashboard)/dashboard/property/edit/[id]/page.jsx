"use client";

import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { FiUpload, FiPlus, FiMinus, FiX } from "react-icons/fi";

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
import { useParams } from "next/navigation";

const initialImages = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/32489809/pexels-photo-32489809.jpeg", // Replace with your image URLs
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
  },
];

// Initial video array
const initialVideos = [
  {
    id: 1,
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    name: "Sample Video",
    isNew: false,
  },
];

const EditProperty = () => {
  // will fetch data from the database based on property id
  let { id } = useParams();

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
  const [images, setImages] = useState(initialImages);
  const [videos, setVideos] = useState(initialVideos);

  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadingImages, setUploadingImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleAmenityChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  // Handle Loaded Gallery Image Remove
  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  // Handle Gallery Images Upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    // Create preview URLs for uploaded images
    const newImages = files.map((file, index) => ({
      id: Date.now() + index,
      file: file,
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      status: "uploading",
    }));

    setUploadingImages((prev) => [...prev, ...newImages]);

    // Simulate upload process
    newImages.forEach((image, index) => {
      setTimeout(() => {
        setUploadingImages((prev) =>
          prev.map((img) =>
            img.id === image.id ? { ...img, status: "success" } : img
          )
        );

        // Move to uploaded images after successful upload
        setTimeout(() => {
          setUploadedImages((prev) => [
            ...prev,
            { ...image, status: "success" },
          ]);
          setUploadingImages((prev) =>
            prev.filter((img) => img.id !== image.id)
          );
        }, 1000);
      }, 2000 + index * 500);
    });
  };

  const handleRemoveUploadedImage = (id) => {
    setUploadedImages((prev) => {
      const imageToRemove = prev.find((img) => img.id === id);
      if (imageToRemove && imageToRemove.url) {
        URL.revokeObjectURL(imageToRemove.url);
      }
      return prev.filter((img) => img.id !== id);
    });
  };

  const handleRemoveUploadingImage = (id) => {
    setUploadingImages((prev) => {
      const imageToRemove = prev.find((img) => img.id === id);
      if (imageToRemove && imageToRemove.url) {
        URL.revokeObjectURL(imageToRemove.url);
      }
      return prev.filter((img) => img.id !== id);
    });
  };

  const handleCancelAllUploads = () => {
    // Cancel all uploading images
    uploadingImages.forEach((image) => {
      if (image.url) {
        URL.revokeObjectURL(image.url);
      }
    });
    setUploadingImages([]);

    // Clear file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle Video Upload
  const handleVideoUpload = (event) => {
    const files = Array.from(event.target.files);
    const newVideos = files.map((file, idx) => ({
      id: Date.now() + idx,
      url: URL.createObjectURL(file),
      name: file.name,
      file: file,
      isNew: true,
    }));
    setVideos((prev) => [...prev, ...newVideos]);
  };

  const handleRemoveVideo = (id) => {
    setVideos((prev) => {
      const videoToRemove = prev.find((vid) => vid.id === id);
      if (videoToRemove && videoToRemove.isNew && videoToRemove.url) {
        URL.revokeObjectURL(videoToRemove.url);
      }
      return prev.filter((vid) => vid.id !== id);
    });
  };

  // submit
  const onSubmit = (data) => {
    const formData = {
      ...data,
      bedrooms,
      bathrooms,
      floors,
      propertyAge,
      selectedAmenities,
      selectedSize,
      images: [...images, ...uploadedImages],
      videos,
    };

    console.log("Complete form data:", formData);

    const submitData = new FormData();

    Object.keys(data).forEach((key) => {
      submitData.append(key, data[key]);
    });

    // Add state values
    submitData.append("bedrooms", bedrooms);
    submitData.append("bathrooms", bathrooms);
    submitData.append("floors", floors);
    submitData.append("propertyAge", propertyAge);
    submitData.append("selectedAmenities", JSON.stringify(selectedAmenities));
    submitData.append("selectedSize", selectedSize);

    // Add image files
    uploadedImages.forEach((image, index) => {
      if (image.file) {
        submitData.append(`images`, image.file);
      }
    });

    // Add video files
    videos.forEach((video, index) => {
      if (video.file) {
        submitData.append(`videos`, video.file);
      }
    });

    console.log("FormData for server:", submitData);

    // Now you can send submitData to your API
    // Example:
    // fetch('/api/properties/update', {
    //   method: 'POST',
    //   body: submitData
    // });
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
                  Manage Property
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-2">
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-4 py-2 rounded-sm text-base cursor-pointer"
            >
              Update
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
            {/* Image Gallery */}
            <div>
              <span className="block mb-2 font-medium text-base">
                Image Gallery
              </span>
              {/* Thumbnail */}
              {images.length > 0 && (
                <div className="relative w-full rounded-xl overflow-hidden mb-2">
                  <img
                    src={images[0].url}
                    alt="Main"
                    className="w-full h-64 object-cover"
                  />
                  <button
                    type="button"
                    className="cursor-pointer absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                    onClick={() => handleRemoveImage(images[0].id)}
                  >
                    <FiX size={20} />
                  </button>
                </div>
              )}
              {/* Gallery  */}
              <div className="flex gap-3">
                {images.slice(1).map((img) => (
                  <div
                    key={img.id}
                    className="relative w-24 h-20 rounded-lg overflow-hidden"
                  >
                    <img
                      src={img.url}
                      alt={`Gallery ${img.id}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="cursor-pointer absolute top-1 right-1 bg-white rounded-full p-1 shadow"
                      onClick={() => handleRemoveImage(img.id)}
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Image Upload */}
            <div className="space-y-4">
              <span className="block mb-2 font-medium text-base">
                Property Images
              </span>

              {/* Upload Area */}
              <div
                className="border-1 border-dashed border-primary rounded-lg py-8 p-4 flex flex-col items-center justify-center bg-[#fff9e6] text-center cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <FiUpload size={24} />
                <h5 className="text-sm mt-2 text-t-primary font-medium">
                  Upload Multiple Images
                </h5>
                <p className="text-sm mt-1 text-t-secondary">
                  Format: JPG, PNG (10mb max size per image)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Upload Progress Section */}
              {uploadingImages.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h6 className="font-medium text-sm text-t-primary">
                      Uploading Images ({uploadingImages.length})
                    </h6>
                    <button
                      type="button"
                      onClick={handleCancelAllUploads}
                      className="text-red-500 text-sm hover:text-red-700 transition-colors cursor-pointer"
                    >
                      Cancel All
                    </button>
                  </div>

                  <div className="space-y-2">
                    {uploadingImages.map((image) => (
                      <div
                        key={image.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <img
                            src={image.url}
                            alt={image.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                              {image.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(image.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {image.status === "uploading" && (
                            <div className="flex items-center space-x-2">
                              <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-xs text-gray-500">
                                Uploading...
                              </span>
                            </div>
                          )}
                          {image.status === "success" && (
                            <span className="text-xs text-green-500">
                              ✓ Uploaded
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => handleRemoveUploadingImage(image.id)}
                            className="text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                          >
                            <FiX size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Uploaded Images Preview */}
              {uploadedImages.length > 0 && (
                <div className="space-y-3">
                  <h6 className="font-medium text-sm text-t-primary">
                    Uploaded Images ({uploadedImages.length})
                  </h6>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {uploadedImages.map((image) => (
                      <div key={image.id} className="relative group">
                        <img
                          src={image.url}
                          alt={image.name}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveUploadedImage(image.id)}
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                        >
                          <FiX size={12} />
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg truncate">
                          {image.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {errors.propertyImage && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.propertyImage.message}
                </span>
              )}
            </div>

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
                  onChange={handleVideoUpload}
                  className="hidden"
                />
              </div>
              {errors.propertyVideo && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.propertyVideo.message}
                </span>
              )}
            </label>

            {/* Video Gallery */}
            {videos.length > 0 && (
              <div className="flex gap-3 mt-4 flex-wrap">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className="relative w-34 h-24 rounded-lg overflow-hidden bg-black flex items-center justify-center"
                  >
                    <video
                      src={video.url}
                      className="w-full h-full object-cover cursor-pointer"
                      controls
                    />
                    {/* Remove icon */}
                    <button
                      type="button"
                      className="cursor-pointer absolute top-1 right-1 bg-white rounded-full p-1 shadow"
                      onClick={() => handleRemoveVideo(video.id)}
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}

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
              <Controller
                name="propertyStatus"
                control={control}
                rules={{ required: "Select Property status" }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      className="w-full cursor-pointer border border-[#c2c2c2] rounded-sm px-3 py-3 text-base focus:outline-none focus:border-primary"
                      style={{ height: "50px" }}
                    >
                      <SelectValue placeholder="Property Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="For Rent">For Rent</SelectItem>
                      <SelectItem value="For Sale">For Sale</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
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

export default EditProperty;
