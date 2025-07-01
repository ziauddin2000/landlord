import React from "react";
import Analytics from "./Analytics";
import PropertyList from "./PropertyList";

const MyPropertyList = () => {
  const propertyAnalyticsData = [
    {
      title: "Total Property",
      value: "8",
      icon: "/assets/images/icons/building-ic.svg",
    },
    {
      title: "Property Rent",
      value: "5",
      icon: "/assets/images/icons/property-orange-ic.svg",
    },
  ];

  return (
    <>
      {/* Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 py-3">
        {propertyAnalyticsData.map((analytics, index) => (
          <Analytics key={index} analyticsData={analytics} />
        ))}
      </div>
      {/* Property List */}
      <PropertyList />
    </>
  );
};

export default MyPropertyList;
