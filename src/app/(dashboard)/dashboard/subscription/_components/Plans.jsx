import Link from "next/link";
import { FiCheck } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Plans = () => {
  let plans = [
    {
      name: "Standard",
      price: "$0/monthly",
      description: "Unlock exclusive features for a better rental experience.",
      availableFeatures: [
        "Add & manage rental listings",
        "Communicate with tenants",
        "Access basic contractor messaging",
        "No full maintenance control",
        "No advanced contractor tools",
      ],
      unavailableFeatures: [
        "No full maintenance control",
        "No advanced contractor tools",
      ],
    },
    {
      name: "Premium",
      price: "$299/monthly",
      save: "Save 10%",
      description: "Unlock exclusive features for a better rental experience.",
      availableFeatures: [
        "Add & manage rental listings",
        "Communicate with tenants",
        "Access basic contractor messaging",
        "No full maintenance control",
        "No advanced contractor tools",
      ],
      unavailableFeatures: [
        "No full maintenance control",
        "No advanced contractor tools",
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="py-8">
      <h1 className="text-lg font-bold text-t-primary mb-5">
        Choose Your Plan
      </h1>

      <div className="bg-white p-6 rounded-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === index;
            return (
              <div
                key={index}
                className={`relative bg-white border border-[#d6d6d6a1] p-6 rounded-lg transition-colors ${
                  isSelected ? "border-[#F5A623] bg-[#FFF8E1]" : ""
                }`}
                onClick={() => setSelectedPlan(index)}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => setSelectedPlan(index)}
                  className="absolute top-4 right-4 w-5 h-5 custom-checkbox cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white checked:bg-primary checked:border-primary checked:text-white flex items-center justify-center focus:outline-none"
                  onClick={(e) => e.stopPropagation()}
                />

                <h3 className="text-base font-semibold mb-3 text-t-secondary">
                  {plan.name}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <p className="text-xl font-bold">{plan.price}</p>
                  {plan.save && (
                    <span className="text-[#04A755] text-sm bg-[#CDFDC6] border border-[#04A755] font-medium rounded-sm px-2 py-1">
                      {plan.save}
                    </span>
                  )}
                </div>
                <p className="text-t-secondary mb-5">{plan.description}</p>
                <hr className="pt-5" />
                <ul className="mb-6 space-y-2">
                  {plan.availableFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FiCheck className="text-[#04A755] text-xl" />
                      <span className="text-base text-t-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.unavailableFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <RxCross2 className="text-[#CB121D] text-xl" />
                      <span className="text-base text-t-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`inline-block mt-1 px-4 py-2 rounded-md text-center border transition-colors
                    ${
                      isSelected
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-t-primary border-[#d6d6d6a1]"
                    }
                  `}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
