import React, { useState } from "react";

const paymentMethods = [
  {
    name: "Credit/Debit Card",
    key: "card",
  },
  {
    name: "ACH",
    key: "ach",
  },
  {
    name: "PayPal",
    key: "paypal",
  },
  {
    name: "Zelle",
    key: "zelle",
  },
  {
    name: "Apple Pay",
    key: "applepay",
  },
];

const PaymentGateway = () => {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].key);

  return (
    <div className="bg-white rounded-2xl p-8 max-w-2xl shadow">
      <h2 className="text-[24px] font-semibold mb-2">
        Add New Payment Gateway
      </h2>
      <p className="text-t-secondary text-sm mb-5">
        You can pay your invoice with Card or via Bank Debit
      </p>

      {/* Payment Methods */}
      <div className="flex flex-wrap  gap-4 mb-5">
        {paymentMethods.map((method) => (
          <label
            key={method.key}
            className="flex items-center gap-1 cursor-pointer text-sm"
          >
            <input
              type="radio"
              name="payment-method"
              checked={selectedMethod === method.key}
              onChange={() => setSelectedMethod(method.key)}
              className="appearance-none min-w-5 h-5 border-1 border-gray-300 rounded-full relative cursor-pointer transition-all checked:border-primary checked:after:content-[''] checked:after:absolute checked:after:w-2.5 checked:after:h-2.5 checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:rounded-full checked:after:bg-primary"
            />
            <span>{method.name}</span>
          </label>
        ))}
      </div>

      {/* Conditional Form */}
      {(() => {
        switch (selectedMethod) {
          case "card":
            return (
              <>
                {/* Card Brands */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/assets/images/icons/mastercard-ic.svg"
                    alt="Mastercard"
                    className="h-7"
                  />
                  <img
                    src="/assets/images/icons/visa-ic.svg"
                    alt="Visa"
                    className="h-5"
                  />
                </div>
                {/* Card Number */}
                <div className="mb-4">
                  <label className="text-base font-medium">Card Number</label>
                  <input
                    type="text"
                    placeholder="6564 1212 7595 7952"
                    className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                  />
                </div>
                {/* Card Holder Name */}
                <div className="mb-4">
                  <label className="text-base font-medium">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Mr. Tailor"
                    className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                  />
                </div>
                {/* Expiry and CVV */}
                <div className="flex gap-3 mb-4">
                  <div className="flex-1">
                    <label className="text-base font-medium">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="03/27"
                      className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="font-medium text-sm">CVV/CVC/CVN</label>
                    <input
                      type="text"
                      placeholder="458"
                      className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                    />
                  </div>
                </div>
                {/* Save Card Checkbox */}
                <div className="flex items-center mb-6 gap-2">
                  <input
                    type="checkbox"
                    id="save-card"
                    className=" custom-checkbox mr-2 h-[22px] w-[22px] appearance-none rounded-sm border border-gray-300 bg-white checked:bg-primary checked:border-primary checked:text-white flex items-center justify-center focus:outline-none"
                  />
                  <label
                    htmlFor="save-card"
                    className="text-base text-primary cursor-pointer select-none"
                  >
                    Save card for future payment
                  </label>
                </div>
                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary hover:bg-primary/80 text-white rounded-lg py-3 font-semibold text-base transition cursor-pointer">
                    Accept
                  </button>
                  <button className="flex-1 bg-white text-t-primary border border-[#E0E0E0] rounded-lg py-3 font-semibold text-base hover:bg-gray-50 transition cursor-pointer">
                    Reject
                  </button>
                </div>
              </>
            );
          case "ach":
            return (
              <>
                <div className="mb-6">
                  <label className="font-medium text-sm">
                    Bank Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your bank account number"
                    className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                  />
                  <label className="font-medium text-sm mt-4 block">
                    Routing Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your routing number"
                    className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                  />
                </div>
                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary hover:bg-primary/80 text-white rounded-lg py-3 font-semibold text-base transition cursor-pointer">
                    Accept
                  </button>
                  <button className="flex-1 bg-white text-t-primary border border-[#E0E0E0] rounded-lg py-3 font-semibold text-base hover:bg-gray-50 transition cursor-pointer">
                    Reject
                  </button>
                </div>
              </>
            );
          case "paypal":
            return (
              <>
                <div className="mb-6">
                  <label className="font-medium text-sm">PayPal Email</label>
                  <input
                    type="email"
                    placeholder="Enter your PayPal email"
                    className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                  />
                </div>
                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary hover:bg-primary/80 text-white rounded-lg py-3 font-semibold text-base transition cursor-pointer">
                    Accept
                  </button>
                  <button className="flex-1 bg-white text-t-primary border border-[#E0E0E0] rounded-lg py-3 font-semibold text-base hover:bg-gray-50 transition cursor-pointer">
                    Reject
                  </button>
                </div>
              </>
            );
          case "zelle":
            return (
              <>
                <div className="mb-6">
                  <label className="font-medium text-sm">
                    Zelle Email or Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Zelle email or phone"
                    className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                  />
                </div>
                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary hover:bg-primary/80 text-white rounded-lg py-3 font-semibold text-base transition cursor-pointer">
                    Accept
                  </button>
                  <button className="flex-1 bg-white text-t-primary border border-[#E0E0E0] rounded-lg py-3 font-semibold text-base hover:bg-gray-50 transition cursor-pointer">
                    Reject
                  </button>
                </div>
              </>
            );
          case "applepay":
            return (
              <>
                <div className="mb-6">
                  <label className="font-medium text-sm">
                    Apple Pay Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Apple Pay number"
                    className="w-full px-3 py-2 rounded-lg border border-[#E0E0E0] mt-1 focus:outline-none  focus:border-primary"
                  />
                </div>
                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-primary hover:bg-primary/80 text-white rounded-lg py-3 font-semibold text-base transition cursor-pointer">
                    Accept
                  </button>
                  <button className="flex-1 bg-white text-t-primary border border-[#E0E0E0] rounded-lg py-3 font-semibold text-base hover:bg-gray-50 transition cursor-pointer">
                    Reject
                  </button>
                </div>
              </>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default PaymentGateway;
