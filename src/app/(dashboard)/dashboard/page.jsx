import React from "react";
import Analytics from "./_components/Analytics";
import InvestmentProfile from "./_components/InvestmentProfile";

const DashboardHome = () => {
  return (
    <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5]">
      <Analytics></Analytics>

      <InvestmentProfile></InvestmentProfile>
    </div>
  );
};

export default DashboardHome;
