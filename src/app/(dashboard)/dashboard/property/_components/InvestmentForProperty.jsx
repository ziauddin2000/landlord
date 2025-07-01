import Analytics from "./Analytics";
import InvestPropertyList from "./InvestPropertyList";

const InvestmentForProperty = () => {
  const investmentAnalyticsData = [
    {
      title: "Total Property",
      value: "40",
      icon: "/assets/images/icons/building-ic.svg",
    },
    {
      title: "Active",
      value: "12",
      icon: "/assets/images/icons/sale-tag-ic.svg",
    },
    {
      title: "Passive",
      value: "28",
      icon: "/assets/images/icons/coin-ic.svg",
    },
  ];
  return (
    <>
      {/* Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 py-3">
        {investmentAnalyticsData.map((analytics, index) => (
          <Analytics key={index} analyticsData={analytics} />
        ))}
      </div>
      {/* Invest Property List */}
      <InvestPropertyList></InvestPropertyList>
    </>
  );
};

export default InvestmentForProperty;
