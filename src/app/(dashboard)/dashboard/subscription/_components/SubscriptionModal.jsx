import Link from "next/link";
import { useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const SubscriptionModal = ({ row, onClose }) => {
  const modalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-end z-55">
      <div
        ref={modalRef}
        className="ml-auto h-full w-[96%] max-w-[700px] bg-white rounded-l-2xl shadow-xl overflow-y-auto relative p-4 py-8 md:p-10 flex flex-col justify-between"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-2xl z-10 cursor-pointer"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        {/* Invoice Title */}
        <h1 className="text-[20px] font-[600] text-t-primary mb-2 pb-3">
          Invoice Paid
        </h1>

        {/* Invoice Details */}
        <div className="flex-1">
          <h2 className="py-3 border-b border-[#E0E0E0] text-base font-medium text-t-secondary">
            Summary
          </h2>

          <div className="py-4 space-y-2 border-b border-[#E0E0E0]">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">To</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                Monir Hossain
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">From</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                L & V
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Invoice</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                #ARW8HDM-0098
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Category</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                Plumbing
              </p>
            </div>
          </div>

          <h2 className="mt-5 py-3 border-b border-[#E0E0E0] text-base font-medium text-t-secondary">
            Plan Type
          </h2>

          <div className="py-4 space-y-1 border-b border-[#E0E0E0]">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                May 28, 2025 - Jun 28, 2025
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right"></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Premium</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $29.00
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Monthly</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                0
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Total due</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $29.00
              </p>
            </div>
          </div>
          <div className="py-4 space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Amount paid</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $29.00
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Amount remaining
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $0.00
              </p>
            </div>
          </div>

          <h2 className="mt-5 py-3 border-b border-[#E0E0E0] text-base font-medium">
            Payment History
          </h2>
          <div className="py-4 space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                May 28, 2025
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right"></p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md border border-[#d6d6d64b]">
                  <img
                    src="/assets/images/icons/visa-ic.svg"
                    className="w-10"
                    alt="Visa"
                  />
                </div>
                <p className="text-t-secondary text-sm font-[400]">
                  <span>****</span> 4251
                </p>
              </div>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $29.00
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex flex-wrap  items-center gap-5 mt-5">
          <button className="w-full sm:w-auto bg-primary hover:bg-[#c77700] text-white px-4 py-3 rounded-md cursor-pointer">
            Download Receipt
          </button>
          <button className="w-full sm:w-auto bg-transparent text-t-secondary border border-[#C2C2C2] px-4 py-3 rounded-md cursor-pointer">
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
