import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { TiClipboard } from "react-icons/ti";

const WithdrawModal = ({ row, onClose }) => {
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
        className="ml-auto h-full w-[96%] max-w-[700px] bg-white rounded-l-2xl shadow-xl overflow-y-auto relative p-4 py-8 md:p-10"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-2xl z-10 cursor-pointer"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        {/* Withdraw Details */}
        <h1 className="text-[20px] font-[600] text-t-primary mb-6 pb-3 border-b border-[#E0E0E0]">
          Withdraw Details
        </h1>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <img
                  src={row.property.image}
                  className="w-[50px] h-[50px] rounded-md"
                  alt="property"
                />
              </div>
              <div>
                <h1 className="text-[18px] font-[500] text-t-primary">
                  {row.property.name}
                </h1>
                <p className="text-[14px] font-[400] text-t-primary">
                  {row.property.address}
                </p>
              </div>
            </div>
            <Link href="#" className="text-sm text-primary">
              View Details
            </Link>
          </div>

          <div className="py-4 space-y-3 border-b border-[#E0E0E0]">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Rent Paid Period
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                Jun 10, 2025-Dec 10, 2025
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Withdrawal Method
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                Credit Card
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Transection ID
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                RP - 3021
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Request</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                <span
                  className={`${
                    row.status === "Paid"
                      ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                      : row.status === "Approved"
                      ? "bg-[#E6F0FF] text-[#2B7FFF] px-2 py-1 rounded"
                      : row.status === "Pending"
                      ? "bg-[#FCF1E6] text-[#DD8800] px-2 py-1 rounded"
                      : row.status === "Rejected"
                      ? "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                      : "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                  }`}
                >
                  {row.status}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Request Date & Time
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                Jan 10, 2025-02:45 PM
              </p>
            </div>
          </div>
        </div>

        {/* Payment Details */}
        <div className="py-6">
          <div className="space-y-3">
            <h1 className="font-semibold text-t-primary text-2xl">Payment</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Total</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $1,200
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Platform Fee
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                -
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Paid</p>
              <p className="text-base font-[400] text-[#04A755] text-left sm:text-right">
                $1,100
              </p>
            </div>
          </div>
        </div>

        {/* Withdraw Process */}
        <div className="bg-white rounded-xl border border-[#E0E0E0] py-8 px-4 sm:p-8">
          <ol className="relative">
            {/* Complete Step */}
            <li className="flex items-start gap-5">
              <div
                className="relative z-[2] self-stretch flex flex-col items-center"
                style={{ minHeight: 70 }}
              >
                <span className="flex items-center justify-center min-w-12 w-12 h-12 bg-[#CDFDC6] rounded-full">
                  <FaRegCircleCheck className="text-[#04A755] text-2xl" />
                </span>
                {/* Process Line */}
                <div className="withdraw-process-line bg-[#04A755] z-[-1]" />
              </div>
              <div className="pb-[30px]">
                <h3 className="font-semibold text-lg text-t-primary">
                  Withdrawal Requested
                </h3>
                <p className="text-sm text-t-secondary mt-1">
                  Host submitted withdrawal request
                </p>
                <p className="block text-sm text-t-secondary mt-1">
                  January 24, 2025–14:00
                </p>
              </div>
            </li>
            {/* Pending Step */}
            <li className="flex items-start gap-5">
              <div
                className="relative z-[2] self-stretch flex flex-col items-center"
                style={{ minHeight: 70 }}
              >
                <span className="flex items-center justify-center min-w-12  w-12 h-12 bg-[#F5F5F5] rounded-full">
                  <TiClipboard className="text-[#878787] text-2xl" />
                </span>
                {/* Process Line */}
                <div className="withdraw-process-line bg-[#878787] z-[-1]" />
              </div>
              <div className="pb-[30px]">
                <h3 className="font-semibold text-lg text-t-primary">
                  Withdrawal Requested
                </h3>
                <p className="text-sm text-t-secondary mt-1">
                  Host submitted withdrawal request
                </p>
                <p className="block text-sm text-t-secondary mt-1">
                  January 24, 2025–14:00
                </p>
              </div>
            </li>
            {/* Reject Step */}
            <li className="flex items-start gap-5">
              <div
                className="relative z-[2] self-stretch flex flex-col items-center"
                style={{ minHeight: 70 }}
              >
                <span className="flex items-center justify-center min-w-12  w-12 h-12 bg-[#FDEBEB] rounded-full relative z-[2]">
                  <RxCross2 className="text-[#CB121D] text-2xl" />
                </span>
              </div>
              <div className="pb-[30px]">
                <h3 className="font-semibold text-lg text-t-primary">
                  Withdrawal Requested
                </h3>
                <p className="text-sm text-t-secondary mt-1">
                  Host submitted withdrawal request
                </p>
                <p className="block text-sm text-t-secondary mt-1">
                  January 24, 2025–14:00
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
