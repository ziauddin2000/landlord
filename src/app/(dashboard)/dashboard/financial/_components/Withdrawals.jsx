import Analytics from "./Analytics";
import WithdrawalTable from "./WithdrawalTable";

const Withdrawals = () => {
  const withdrawalAnalyticsData = [
    {
      title: "Paid",
      value: "$1290",
      icon: "/assets/images/icons/hand-dollar-ic.svg",
    },
    {
      title: "Approved",
      value: "$300",
      icon: "/assets/images/icons/check-circle-ic.svg",
    },
    {
      title: "Request",
      value: "$300",
      icon: "/assets/images/icons/request-orange-ic.svg",
    },
    {
      title: "Reject",
      value: "$300",
      icon: "/assets/images/icons/info-ic.svg",
    },
  ];

  return (
    <>
      {/* Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 py-3">
        {withdrawalAnalyticsData.map((analytics, index) => (
          <Analytics key={index} analyticsData={analytics} />
        ))}
      </div>
      {/* Withdrawal Table */}
      <WithdrawalTable />
    </>
  );
};

export default Withdrawals;
