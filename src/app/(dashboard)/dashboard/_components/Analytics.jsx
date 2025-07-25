import React from "react";

const analyticsData = [
  {
    title: "Total Task",
    value: "56",
    icon: "/assets/images/icons/task-ic.svg",
  },
  {
    title: "Ongoing",
    value: "110",
    icon: "/assets/images/icons/timer-ic.svg",
  },
  {
    title: "In Review",
    value: "12",
    icon: "/assets/images/icons/analytics-ic.svg",
  },
  {
    title: "Complete",
    value: "200",
    icon: "/assets/images/icons/check-circle-ic.svg",
  },
];

const Analytics = () => {
  return (
    <div className="py-3">
      {/* Section title */}
      <div className="flex justify-between items-center mb-5">
        <p className="text-[#707070] text-[16px] font-[500]">Vendor Task</p>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {analyticsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl px-5 py-6 flex items-center gap-5"
          >
            {/* Icon */}
            <div className="bg-[#FCF1E6] p-3 rounded-md h-[56px] min-w-[56px] flex items-center justify-center">
              <img src={item.icon} alt={item.title} className="w-7 h-7" />
            </div>

            {/* Text */}
            <div>
              <p className="text-[20px] md:text-[24px] font-[700] text-[#170A00]">
                {item.value}
              </p>
              <p className="text-[16px] md:text-[18px] text-[#707070] font-[500]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
