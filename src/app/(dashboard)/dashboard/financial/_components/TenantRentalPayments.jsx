import Analytics from "./Analytics";
import RentTable from "./RentTable";

const TenantRentalPayments = () => {
  const rentalAnalyticsData = [
    {
      title: "Total Rent Collected",
      value: "$52,400",
      icon: "/assets/images/icons/dollar-bag.svg",
    },
    {
      title: "Due",
      value: "$3,200",
      icon: "/assets/images/icons/timer-ic.svg",
    },
  ];
  return (
    <>
      {/* Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 py-3">
        {rentalAnalyticsData.map((analytics, index) => (
          <Analytics key={index} analyticsData={analytics} />
        ))}
      </div>
      {/* Rent Table */}
      <RentTable />
    </>
  );
};

export default TenantRentalPayments;
