"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import SummaryCard from "../_components/SummaryCard";
import InvestmentReturn from "../_components/InvestmentReturn";
import InvestmentChart from "../_components/InvestmentChart";
import { RxDownload } from "react-icons/rx";
import InvestedProperty from "../_components/InvestedProperty";
import InvestmentPerformanceModal from "../_components/InvestmentPerformanceModal";

const InvestorDetails = () => {
  // Add state for filter
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  // chart data
  const chartData = [
    { name: "Jan", price: 500 },
    { name: "Feb", price: 600 },
    { name: "Mar", price: 700 },
    { name: "April", price: 500 },
    { name: "May", price: 890 },
  ];

  // summary data
  const summaryData = [
    {
      icon: "/assets/images/icons/coin-ic.svg",
      name: "Total Investment",
      value: "$45,000.0",
    },
    {
      icon: "/assets/images/icons/building-ic.svg",
      name: "Total Earnings",
      value: "$1,450",
    },
    {
      icon: "/assets/images/icons/coin-ic.svg",
      name: "Invest Count",
      value: "$3",
    },
  ];

  // Investment Return Data
  const investmentReturnData = [
    {
      total: "$128,00.00",
      return: "+$50 (0.5%)",
    },
  ];

  // Documents Data
  const documentsData = [
    { name: "Business License", size: "12 MB" },
    { name: "Insurance Certificate", size: "12 MB" },
    { name: "Identity Verification", size: "12 MB" },
  ];

  // Invested Property Data
  const investedPropertyData = [
    {
      id: 1,
      image: "/assets/images/property-01.jpg",
      name: "Murphy House",
      startDate: "Jan 01, 2025",
      status: "Passive",
      isInvested: true,
      totalFunded: "$5,000",
      fundedLimit: "$15,00,000.00",
      investmentAmount: "$5,000",
      autoRenew: true,
      investors: 125,
      funded: 100,
      investorsImage: [
        "/assets/images/user-01.jpg",
        "/assets/images/user-02.jpg",
        "/assets/images/user-03.jpg",
      ],
    },
    {
      id: 2,
      image: "/assets/images/property-01.jpg",
      name: "Murphy House",
      startDate: "Jan 01, 2025",
      status: "Passive",
      isInvested: false,
      totalFunded: "$5,000",
      fundedLimit: "$15,00,000.00",
      investmentAmount: "$5,000",
      autoRenew: true,
      investors: 0,
      funded: 0,
    },
    {
      id: 3,
      image: "/assets/images/property-01.jpg",
      name: "Murphy House",
      startDate: "Jan 01, 2025",
      status: "Active",
      isInvested: false,
      totalFunded: "$5,000",
      fundedLimit: "$15,00,000.00",
      investmentAmount: "$5,000",
      autoRenew: true,
      investors: 0,
      funded: 0,
    },
  ];

  // Filter properties based on selected status
  const filteredProperties = investedPropertyData.filter((property) => {
    if (statusFilter === "All") return true;
    return property.status === statusFilter;
  });

  return (
    <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5] min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb className="*:text-[16px] py-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Analytics</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#" className="text-t-primary">
              Portfolio Details
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Investor Portfolio */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6 bg-[#f9f9f9] py-3">
        {/* Left Main Portfolio Section */}
        <div className=" bg-white rounded-xl p-6 shadow-sm">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[20px] sm:text-[24px] font-[600] text-t-primary">
              Portfolio
            </h3>
            <Link
              href="#"
              className="border text-primary border-primary text-[16px] px-4 py-1.5 rounded-md hover:bg-primary hover:text-white cursor-pointer"
            >
              View Details
            </Link>
          </div>

          <hr className="bg-[#E5E5E5] mt-3 mb-5 h-[1px]" />

          {/* Main Content */}
          <div className="flex flex-col xl:grid xl:grid-cols-12 gap-4">
            {/* Investment Return Section */}
            <InvestmentReturn
              investmentReturnData={investmentReturnData}
            ></InvestmentReturn>

            {/* Summary Card */}
            <div className="flex flex-col sm:flex-row xl:flex-col gap-4 md:justify-between xl:justify-center col-span-1 sm:col-span-7">
              {summaryData.map((item, index) => {
                return <SummaryCard key={index} item={item}></SummaryCard>;
              })}
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white shadow-sm rounded-xl p-5 flex flex-col gap-4">
          <h3 className="text-[20px] sm:text-[24px] font-[600] text-t-primary">
            Investment Statistic
          </h3>

          <hr className="bg-[#E5E5E5] mt-3 mb-5 h-[1px]" />

          <div className="flex flex-col gap-4 md:justify-between xl:justify-center">
            <InvestmentChart chartData={chartData}></InvestmentChart>
          </div>
        </div>
      </div>

      {/* Investment History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 py-3">
        {/* Investor History */}
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white rounded-xl px-4 sm:px-6 py-6 sm:py-8 lg:py-10 shadow-sm">
            {/* Active Investment */}
            <div className="mb-6 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Invest Type
                </span>
                <span className="bg-[#E6F0FF] text-[#0065FF] font-[500] px-2 py-1 rounded text-[12px] sm:text-[14px]">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Invest Count
                </span>
                <span className="text-t-secondary font-[500] text-[14px] sm:text-[16px]">
                  1
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Investment Value
                </span>
                <span className="text-t-secondary font-[500] text-[14px] sm:text-[16px]">
                  $75,000.00
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Profit
                </span>
                <span className="text-t-secondary font-[500] text-[14px] sm:text-[16px]">
                  20%
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Hold Period
                </span>
                <span className="text-t-secondary font-[500] text-[12px] sm:text-[14px] lg:text-[16px] text-right">
                  Until Property is Sold
                </span>
              </div>
            </div>
            <hr className="my-6 sm:my-8 border-[#E5E5E5]" />
            {/* Passive Investment */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Invest Type
                </span>
                <span className="bg-[#FCF1E6] text-[#DD8800] font-[500] px-2 py-1 rounded text-[12px] sm:text-[14px]">
                  Passive
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Invest Count
                </span>
                <span className="text-t-secondary font-[500] text-[14px] sm:text-[16px]">
                  2
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Investment Value
                </span>
                <span className="text-t-secondary font-[500] text-[14px] sm:text-[16px]">
                  $10,000.00
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-[600] text-t-secondary text-[14px] sm:text-[16px]">
                  Profit value
                </span>
                <span className="text-t-secondary font-[500] text-[12px] sm:text-[14px] lg:text-[16px] text-right">
                  $50/month (2 x $25)
                </span>
              </div>
            </div>
          </div>

          {/* Investor Documents */}
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[600] text-t-primary mb-4 sm:mb-6">
              Documents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-4">
              {/* Document Card */}
              {documentsData.map((doc, idx) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between hover:bg-[#F5F5F5] border border-[#F0F0F0] rounded-lg px-3 sm:px-4 py-3 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <img
                      src="/assets/images/icons/pdf-ic.svg"
                      alt="file"
                      className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="font-[500] text-[14px] sm:text-[16px] text-t-primary truncate">
                        {doc.name}
                      </div>
                      <div className="text-[12px] sm:text-[14px] text-[#A1A1A1] font-[400]">
                        {doc.size}
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer flex-shrink-0 ml-2">
                    <RxDownload className="text-[20px] sm:text-[24px] text-gray-600 hover:text-primary transition-colors" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Invested Property */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm investedProperty max-h-[750px] overflow-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-[600] text-t-primary">
              Invested Property
            </h3>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="bg-muted border-none focus-visible:ring-0 focus-visible:border-ring rounded-md w-full sm:max-w-[180px] h-10">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Passive">Passive</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {filteredProperties.map((item, index) => (
              <InvestedProperty
                key={item.id}
                item={item}
                onViewDetails={setSelectedPropertyId}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedPropertyId && (
        <InvestmentPerformanceModal
          propertyId={selectedPropertyId}
          onClose={() => setSelectedPropertyId(null)}
        />
      )}
    </div>
  );
};

export default InvestorDetails;
