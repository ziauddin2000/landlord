"use client";
import Link from "next/link";

import SummaryCard from "./SummaryCard";
import InvestmentReturn from "./InvestmentReturn";
import InvestmentChart from "./InvestmentChart";

const InvestmentProfile = () => {
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

  return (
    <>
      {/* Investor Profile */}
      <div className="py-3 grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-6">
        {/* Left: User Profile Card */}
        <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-col sm:flex-row items-start md:items-center gap-4">
              <img
                src="https://github.com/shadcn.png"
                alt="User"
                className="w-20 h-20 rounded-full object-cover border"
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[20px] sm:text-[24px] font-[600] text-t-primary whitespace-nowrap">
                    Monir Hosain
                  </h3>

                  <div className="flex items-center w-fit gap-1 bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-semibold">
                    <img
                      src="/assets/images/icons/crown-blue-ic.svg"
                      alt="crown"
                      className="w-4 h-4"
                    />
                    <span className="block text-sm">Premium</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-1 text-sm text-t-secondary items-start sm:items-center">
                  <span className="flex items-center gap-1">
                    <img
                      src="/assets/images/icons/call-orange-ic.svg"
                      alt="Phone"
                    />
                    +1 555–123–7890
                  </span>
                  <span className="flex items-center gap-1">
                    <img
                      src="/assets/images/icons/mail-orange-ic.svg"
                      alt="Mail"
                    />
                    johan@email.com
                  </span>
                </div>
              </div>
            </div>

            <button className="p-2 h-[40px] min-w-[40px] border border-[#E5E5E5] flex items-center justify-center hover:bg-gray-100 rounded-sm cursor-pointer">
              <img
                src="/assets/images/icons/dot-ic.svg"
                className="h-[20px]"
                alt="More"
              />
            </button>
          </div>

          <hr className="bg-[#E5E5E5] my-5" />

          {/* Details Table */}
          <div className="grid grid-cols-2 gap-y-3 text-[16px] text-t-secondary">
            <div className="font-[600]">User ID</div>
            <div className="text-right font-[500]">#L762349</div>

            <div className="font-[600]">Join Date</div>
            <div className="text-right font-[500]">May 2, 2025</div>

            <div className="font-[600]">Properties Listed</div>
            <div className="text-right font-[500]">4 Active</div>

            <div className="font-[600]">Plan</div>
            <div className="text-right text-primary font-[500]">
              Trial – 14 Days Left
            </div>

            <div className="font-[600]">Open Maintenance</div>
            <div className="text-right font-[500]">2 Ongoing</div>

            <div className="font-[600]">Total Rent Collected</div>
            <div className="text-right font-[500]">$20,000 This Month</div>
          </div>
        </div>

        {/* Right: Maintenance Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-[20px] sm:text-[24px] font-[600] text-t-secondary mb-4">
            Maintenance
          </h3>
          <div className="space-y-3 text-[16px] text-t-secondary">
            <div className="flex justify-between">
              <span>Pending</span>
              <span>42</span>
            </div>
            <div className="flex justify-between">
              <span>In Progress</span>
              <span>21</span>
            </div>
            <div className="flex justify-between">
              <span>Completed</span>
              <span>89</span>
            </div>
            <div className="flex justify-between">
              <span>Urgent Request</span>
              <span>10</span>
            </div>
            <div className="flex justify-between">
              <span>Emergency Request</span>
              <span className="text-red-500 font-medium">5</span>
            </div>
          </div>

          <button className="mt-10 bg-primary hover:bg-[#c77700] text-white text-[16px] py-2 px-4 rounded-md cursor-pointer">
            View All
          </button>
        </div>
      </div>

      {/* Investor Portfolio */}
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-y-4 xl:gap-6 bg-[#f9f9f9] py-3">
        <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
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
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            {/* Investment Return Section */}
            <InvestmentReturn
              investmentReturnData={investmentReturnData}
            ></InvestmentReturn>

            <div className="dashed-line hidden col-span-1 sm:col-span-1 sm:flex justify-center items-center">
              <img
                src="/assets/images/icons/dashed-line.svg"
                alt="dashed-line"
                className="h-full"
              />
            </div>

            {/* Chart Section */}
            <div className="flex flex-col justify-between h-full col-span-1 sm:col-span-6">
              <InvestmentChart chartData={chartData}></InvestmentChart>
            </div>
          </div>
        </div>

        {/* Right Summary Boxes */}
        <div className="flex flex-col sm:flex-row xl:flex-col gap-4 bg-white shadow-sm rounded-xl md:justify-between xl:justify-center p-5 ">
          {/* Summary Card */}
          {summaryData.map((item, index) => {
            return <SummaryCard key={index} item={item}></SummaryCard>;
          })}
        </div>
      </div>
    </>
  );
};

export default InvestmentProfile;
