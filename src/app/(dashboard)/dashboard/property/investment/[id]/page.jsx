"use client";

import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { RxDownload } from "react-icons/rx";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const InvestmentForPropertyDetails = () => {
  // will fetch data from the database based on property id
  let { id } = useParams();

  //   amenities
  const amenitiesList = ["Parking", "Gym Access", "CCTV", "Balcony"];

  // strategy list
  const strategyList = [
    {
      id: 1,
      title: "Early Withdrawal Policy",
      description: "15% penalty if withdrawn before lock-in ends",
    },
    {
      id: 2,
      title: "Investment Return Policy",
      description:
        "The app automatically distributes monthly returns to the investor's account. Investor can withdraw monthly earnings or reinvest.",
    },
    {
      id: 3,
      title: "Smart Investment Opportunities",
      description:
        "Discover high-potential assets tailored to your financial goals. Track performance, diversify risk, and grow your portfolio confidently.",
    },
    {
      id: 4,
      title: "Investor Insights",
      description:
        "Access real-time data, personalized reports, and expert analysis to make informed decisions.",
    },
    {
      id: 5,
      title: "Flexible Leasing Options",
      description:
        "Simplify asset management with customizable lease plans. View terms, manage contracts, and stay ahead with automated reminders.",
    },
  ];

  // Faq list
  const faqList = [
    {
      id: 1,
      title: "How to reset my password?",
      description:
        "If you've forgotten your password, you can easily reset it by clicking the 'Forgot Password' link on the login page. Follow the instructions to receive a password reset email.",
    },
    {
      id: 2,
      title: "How to update my email address?",
      description:
        "To update your email address, go to your account settings and click on 'Edit Profile'. From there, you can change your email address. Please verify the new email before saving the changes.",
    },
    {
      id: 3,
      title: "What should I do if I encounter a bug?",
      description:
        "If you encounter a bug or issue, please contact our support team via the 'Contact Us' page. Provide a detailed description of the issue along with any relevant screenshots or error messages.",
    },
    {
      id: 4,
      title: "How can I delete my account?",
      description:
        "To delete your account, please contact our support team. Be sure to mention your request for account deletion and confirm your identity for security purposes.",
    },
    {
      id: 5,
      title: "How can I change my subscription plan?",
      description:
        "You can change your subscription plan at any time by going to the 'Billing' section in your account settings. Select the new plan you want, and follow the on-screen instructions to make the switch.",
    },
    {
      id: 6,
      title: "Where can I find my purchase history?",
      description:
        "Your purchase history can be found under the 'Orders' section in your account. You can view past transactions and download invoices from that page.",
    },
    {
      id: 7,
      title: "What are the payment methods available?",
      description:
        "We accept various payment methods including credit cards, PayPal, and Google Pay. You can manage your payment methods in the 'Payment' section of your account settings.",
    },
    {
      id: 8,
      title: "How to report an issue with my order?",
      description:
        "If you're facing an issue with your order, please visit the 'Order History' section and click on 'Report Issue' next to the relevant order. Provide detailed information about the problem, and our team will assist you.",
    },
  ];

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
            <BreadcrumbLink
              href="/dashboard/property"
              className="text-t-primary"
            >
              Investment For Property
            </BreadcrumbLink>
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

          {/* Message Us */}
          <Link
            href="#"
            className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px] flex items-center justify-between"
          >
            <h2 className="text-t-primary">Message Us</h2>
            <img
              src="/assets/images/icons/chat-ic.svg"
              alt="Chat Icon"
              width={30}
              height={30}
            />
          </Link>

          {/* Investment Type */}
          <div>
            <span className="block mb-2 font-medium text-base">
              Investment Type
            </span>
            <input
              type="text"
              className="w-full border border-[#c2c2c2] focus:border-primary focus:outline-none rounded-sm px-3 py-3 text-base h-[50px]"
              value="Active"
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
        </div>
      </div>

      {/* Investment Details */}
      <div className="bg-white p-6 rounded-lg shadow my-3">
        <h2 className="text-t-primary text-[24px] font-semibold mb-5">
          Investment Details
        </h2>

        {/* Investment value increase ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Card */}
          <div className="bg-white rounded-lg p-5 shadow flex-1 flex flex-col gap-3 border border-[#F2F2F2]">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-base text-t-primary">
                Investment Value Increase Ratio
              </span>
              <div className="flex justify-between text-[#8C8C8C] text-[15px] font-medium">
                <span>($130,000.00)</span>
                <span>$150,000.00</span>
              </div>
              {/* Progress Bar */}
              <div className="relative w-full h-2 bg-[#FCF1E6] rounded-full my-1">
                <div
                  className="absolute left-0 top-0 h-2 bg-primary rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <div className="flex flex-wrap gap-y-2 items-center justify-between ">
                <span className="text-t-secondary text-sm">80% Funded</span>
                <div className="flex items-center gap-1 rounded-full border border-[#C2C2C2] px-2 py-1">
                  {/* Avatars */}
                  <div className="flex -space-x-2">
                    <img
                      src="/assets/images/user-01.jpg"
                      alt="user1"
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <img
                      src="/assets/images/user-02.jpg"
                      alt="user2"
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                    <img
                      src="/assets/images/user-03.jpg"
                      alt="user3"
                      className="w-7 h-7 rounded-full border-2 border-white"
                    />
                  </div>
                  <span className="text-[#8C8C8C] text-[14px] font-medium">
                    120 Investors
                  </span>
                </div>
              </div>
            </div>
            {/* Alert */}
            <div className="flex items-center bg-[#FFF4E5] text-primary rounded-sm px-4 py-2 text-base font-medium gap-2">
              <img
                src="/assets/images/icons/clock-ic.svg"
                alt="timer"
                className="w-5 h-5"
              />
              60K was invested in the past 24 hours
            </div>
            {/* ROI and Lock-in */}
            <div className="border border-[#F2F2F2] rounded-sm p-4 space-y-2 mt-2">
              <div className="flex flex-wrap gap-y-2 items-center justify-between">
                <span className="text-t-secondary text-sm">Annual ROI</span>
                <span className="font-medium text-base text-t-primary">
                  6% <span className="text-sm font-normal">(Paid Monthly)</span>
                </span>
              </div>
              <div className="flex flex-wrap gap-y-2 items-center justify-between">
                <span className="text-t-secondary text-sm">Lock-In Period</span>
                <span className="font-medium text-base text-t-primary">
                  12 Months
                </span>
              </div>
            </div>
          </div>
          {/* Right Card */}
          <div>
            <div className="bg-white rounded-lg p-5 shadow flex-1 flex flex-col items-center justify-center border border-[#F2F2F2]">
              <span className="text-t-secondary text-sm mb-3 text-center">
                Investment value in 1 year increases
              </span>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl font-semibold text-t-primary">
                  $5,334.93
                </span>
                <span className="bg-[#CDFDC6] text-[#04A755] text-sm font-semibold px-2 py-1 rounded-sm border-1 border-[#04A755]">
                  6%
                </span>
              </div>
              <span className="text-t-secondary text-sm mt-2">
                Annual income{" "}
                <span className="text-t-primary font-medium">$334.93</span>
              </span>
            </div>
          </div>
        </div>

        {/* Investment Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
          {/* left */}
          <div>
            <h2 className="text-lg font-semibold text-t-primary mb-5">
              Investment Strategy
            </h2>
            <div className="space-y-4">
              {/* strategy card */}
              {strategyList.map((strategy) => (
                <div
                  key={strategy.id}
                  className="bg-white rounded-lg p-5 flex flex-col border border-[#F2F2F2]"
                >
                  <h2 className="font-medium text-base">{strategy.title}</h2>
                  <p className="text-sm text-t-secondary mt-1">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div>
            <h2 className="text-lg font-semibold text-t-primary mb-5">FAQ</h2>
            <div className="space-y-2">
              {/* faq card */}
              {faqList.map((faq, index) => (
                <Accordion
                  key={index}
                  type="single"
                  collapsible
                  className=" bg-white rounded-lg py-1 px-5 flex flex-col border border-[#F2F2F2] cursor-pointer"
                >
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger className="font-medium text-base hover:no-underline  cursor-pointer">
                      {faq.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-t-secondary mt-1">
                      {faq.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="bg-white p-6 rounded-lg shadow my-3">
        <h2 className="text-t-primary text-[24px] font-semibold mb-5">
          Documents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <div className="flex items-center justify-between bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 gap-1 cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/icons/pdf-ic.svg"
                alt="pdf"
                className="w-6 h-6"
              />
              <span className="text-sm">Lease Agreement</span>
            </div>
            <RxDownload />
          </div>

          <div className="flex items-center justify-between bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 gap-1 cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/icons/pdf-ic.svg"
                alt="pdf"
                className="w-6 h-6"
              />
              <span className="text-sm">Lease Agreement</span>
            </div>
            <RxDownload />
          </div>

          <div className="flex items-center justify-between bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 gap-1 cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/icons/pdf-ic.svg"
                alt="pdf"
                className="w-6 h-6"
              />
              <span className="text-sm">Lease Agreement</span>
            </div>
            <RxDownload />
          </div>

          <div className="flex items-center justify-between bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 gap-1 cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/icons/pdf-ic.svg"
                alt="pdf"
                className="w-6 h-6"
              />
              <span className="text-sm">Lease Agreement</span>
            </div>
            <RxDownload />
          </div>

          <div className="flex   items-center justify-between bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 gap-1 cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/icons/pdf-ic.svg"
                alt="pdf"
                className="w-6 h-6"
              />
              <span className="text-sm">Lease Agreement</span>
            </div>
            <RxDownload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentForPropertyDetails;
