"use client";

import React, { useState } from "react";
import Analytics from "./_components/Analytics";
import InvestmentProfile from "./_components/InvestmentProfile";
import PropertyList from "./_components/PropertyList";
import RentPayment from "./_components/RentPayment";
import { CiGift } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
const DashboardHome = () => {
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5] min-h-screen relative">
      {/* Popup */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-60 flex items-center justify-center bg-[#7676768F] bg-opacity-50 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeModal}
        >
          <div
            className="bg-white px-5 py-8 sm:p-8 rounded-lg max-w-2xl w-[90%] shadow transform transition-all relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="flex items-start sm:items-center gap-2">
              <CiGift className="text-[30px]" />
              <span className="text-[18px] font-[700] text-t-primary">
                You're currently on a Premium Trial
              </span>
            </h2>

            <button
              onClick={closeModal}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 cursor-pointer"
            >
              <RxCross2 className="text-[25px] text-t-secondary" />
            </button>

            <p className="mt-3 text-t-secondary text-[16px] font-[400]">
              Your trial ends in 14 days. Upgrade now to avoid losing access to
              premium features like investment tools and full maintenance
              control.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                onClick={closeModal}
                className="py-4 px-4 text-center bg-transparent border border-[#C2C2C2] hover:bg-neutral-50 rounded-md text-[16px] font-medium text-t-secondary cursor-pointer"
              >
                View Subscription Plans
              </Link>
              <Link
                href="#"
                onClick={closeModal}
                className="py-4 px-4 text-center bg-primary hover:bg-[#c77700] hover:text-white rounded-md text-[16px] font-medium text-white  cursor-pointer min-w-[150px]"
              >
                Start Trial
              </Link>
            </div>
          </div>
        </div>
      )}

      <Analytics></Analytics>
      <InvestmentProfile></InvestmentProfile>
      <PropertyList></PropertyList>
      <RentPayment></RentPayment>
    </div>
  );
};

export default DashboardHome;
