import React from "react";

const Analytics = ({ analyticsData }) => {
  return (
    <>
      {/* Card */}
      <div className="bg-white rounded-xl px-5 py-6 flex items-center gap-5">
        {/* Icon */}
        <div className="bg-[#FCF1E6] p-3 rounded-md h-[56px] min-w-[56px] flex items-center justify-center">
          <img
            src={analyticsData.icon}
            alt={analyticsData.title}
            className="w-7 h-7"
          />
        </div>

        {/* Text */}
        <div>
          <p className="text-[20px] md:text-[24px] font-[700] text-[#170A00]">
            {analyticsData.value}
          </p>
          <p className="text-[16px] md:text-[18px] text-[#707070] font-[500]">
            {analyticsData.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default Analytics;
