import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

// Dummy data array
const paymentMethods = [
  {
    gateway: "Stripe",
    methods: "Credit & Debit",
    status: "active",
  },
  {
    gateway: "PayPal",
    methods: "Wallet",
    status: "active",
  },
  {
    gateway: "ACH Bank",
    methods: "Bank Transfer",
    status: "inactive",
  },
];

const PaymentSettings = () => {
  // State for toggles - initialize from paymentMethods array
  const [toggles, setToggles] = useState(() => {
    const initialToggles = {};
    paymentMethods.forEach((method) => {
      initialToggles[method.gateway] = method.status === "active";
    });
    return initialToggles;
  });

  const handleToggle = (gateway) => {
    setToggles((prev) => ({
      ...prev,
      [gateway]: !prev[gateway],
    }));
  };

  return (
    <div className="py-8 px-6 bg-white shadow rounded-md">
      <h2 className="text-[24px] font-[600] mb-4">Payments Method</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-3 font-medium">Gateway</th>
              <th className="text-left px-4 py-3 font-medium">
                Methods Supported
              </th>
              <th className="text-left px-4 py-3 font-medium">Status</th>
              <th className="text-left px-4 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentMethods.map((method) => (
              <tr key={method.gateway} className="border-b">
                <td className="px-4 py-3 text-base">{method.gateway}</td>
                <td className="px-4 py-3 text-base">{method.methods}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-sm text-sm font-normal ${
                      method.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {method.status === "active" ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleToggle(method.gateway)}
                    className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
                      toggles[method.gateway] ? "bg-[#EF9C00]" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                        toggles[method.gateway]
                          ? "translate-x-4"
                          : "translate-x-0"
                      }`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="mt-6 flex items-center gap-1 border px-4 py-3 rounded-md text-black text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-xl">
          <GoPlus />
        </span>
        <span>Add payment method</span>
      </button>
    </div>
  );
};

export default PaymentSettings;
