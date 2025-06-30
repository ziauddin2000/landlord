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
import Image from "next/image";

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

const PropertyDetails = () => {
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
      {/* Breadcrumb */}
      <Breadcrumb className="*:text-[16px] py-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/property">Property</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="text-t-primary">
              Property Details
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Property Details */}
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
                </div>
              ))}
            </div>
          </div>

          {/* Property Virtual Video Upload */}
          <label className="block">
            <span className="block mb-2 font-medium text-base">
              Property Virtual Video
            </span>
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
                </div>
              ))}
            </div>
          )}

          {/* Property Facilities */}
          <div>
            <span className="block mb-2 font-medium text-base">
              Property Facilities
            </span>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 px-2 py-1 border border-[#C2C2C2] rounded-sm">
                <Image
                  src="/assets/images/icons/bed-ic.svg"
                  alt="Bed Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">2 Beds</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 border border-[#C2C2C2] rounded-sm">
                <Image
                  src="/assets/images/icons/buthtub-ic.svg"
                  alt="Bath Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">2 Baths</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 border border-[#C2C2C2] rounded-sm">
                <Image
                  src="/assets/images/icons/guest-house-ic.svg"
                  alt="Property Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">1 Year</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 border border-[#C2C2C2] rounded-sm">
                <Image
                  src="/assets/images/icons/floor-ic.svg"
                  alt="Floor Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">12 Floors</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1 border border-[#C2C2C2] rounded-sm">
                <Image
                  src="/assets/images/icons/sqr-ic.svg"
                  alt="Sqr Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">950 sqft</span>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <span className="block mb-2 font-medium text-base">Amenities</span>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/car-parking-ic.svg"
                  alt="Parking Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/gym-ic.svg"
                  alt="Gym Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">Gym Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/balcony-ic.svg"
                  alt="Balcony Icon"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-medium">Balcony</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {/* Rented By */}
          <div className="bg-[#FFF8E6] rounded-2xl p-5 w-full relative">
            <span className="block mb-2 text-t-secondary font-medium text-base">
              Rented by
            </span>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
              <div>
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-2xl sm:text-3xl font-semibold text-t-primary">
                  Johan Mitchell
                </div>
                <div className="flex flex-wrap items-center gap-y-2 xl:gap-4 mt-2 text-t-secondary">
                  <span className="flex items-center gap-1 text-base">
                    <img
                      src="/assets/images/icons/call-orange-ic.svg"
                      alt="Phone"
                      className="w-5 h-5"
                    />
                    +1 555-123-7890
                  </span>
                  <span className="flex items-center gap-1 text-base">
                    <img
                      src="/assets/images/icons/mail-orange-ic.svg"
                      alt="Mail"
                      className="w-5 h-5"
                    />
                    johan@email.com
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute right-5 top-5 sm:top-1/2 sm:-translate-y-1/2 md:top-5 md:-translate-y-0 xl:top-1/2 xl:-translate-y-1/2">
              <button className="bg-[#DE9000] rounded-xl p-3 flex items-center justify-center hover:bg-[#c87f00] transition">
                <img
                  src="/assets/images/icons/message-ic.svg"
                  alt="Chat"
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
          {/* Property Name */}
          <div>
            <span className="block mb-2 font-medium text-base">
              Property Name
            </span>
            <input
              type="text"
              className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
              value="Oakwood Avenue"
              readOnly
            />
          </div>

          {/* Price */}
          <div className="flex gap-2">
            <div className="flex-1">
              <span className="block mb-2 font-medium text-base">Price</span>
              <input
                type="text"
                className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
                value="$1200"
                readOnly
              />
            </div>
            <div>
              <span className="block mb-2 font-medium text-base">Currency</span>
              <input
                type="text"
                className="w-[80px] border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
                value="USD"
                readOnly
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <span className="block mb-2 font-medium text-base">Location</span>
            <input
              type="text"
              className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
              value="Maple Grove 42 Elm St, Austin, TX"
              readOnly
            />
          </div>

          {/* Property Status */}
          <div>
            <span className="block mb-2 font-medium text-base">
              Property Status
            </span>
            <input
              type="text"
              className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
              value="For Rent"
              readOnly
            />
          </div>

          {/* Description */}
          <div>
            <span className="block mb-2 font-medium text-base">
              Description
            </span>
            <textarea
              className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[100px]"
              rows={3}
              value="Description"
              readOnly
            />
          </div>

          {/* Info Boxes */}
          <div>
            <span className="block mb-2 font-medium text-base">
              Automatic Lease Agreement Generation
            </span>
            <textarea
              className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[100px]"
              value="Automatic Lease Agreement Generation"
              readOnly
            />
          </div>
          <div>
            <span className="block mb-2 font-medium text-base">
              No Credit Impact
            </span>
            <textarea
              className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[100px]"
              value="No Credit Impact"
              readOnly
            />
          </div>
          <div>
            <span className="block mb-2 font-medium text-base">
              Cancellation policy
            </span>
            <textarea
              className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[100px]"
              value="Cancellation Policy"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
