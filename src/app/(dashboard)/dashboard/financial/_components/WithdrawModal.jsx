import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";

const WithdrawModal = ({ row, onClose }) => {
  const [playingIndex, setPlayingIndex] = useState(null);
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

  const media = [
    {
      type: "image",
      src: "https://images.pexels.com/photos/32489809/pexels-photo-32489809.jpeg?_gl=1*11k8agm*_ga*MjExMDI1Mjc2Mi4xNzQ5NzgzODQ2*_ga_8JE65Q40S6*czE3NTExNjgxOTYkbzMkZzEkdDE3NTExNjgyMzQkajIyJGwwJGgw",
    },
    {
      type: "video",
      src: "https://videos.pexels.com/video-files/3145626/3145626-hd_1920_1080_30fps.mp4",
      thumbnail:
        "https://images.pexels.com/photos/13725650/pexels-photo-13725650.jpeg",
    },
  ];

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

        {/* Title */}
        <h1 className="text-[20px] font-[600] text-t-primary mb-6">
          Tenant Rent Payment Details
        </h1>
        {/* Tenant and Vendor Details */}
        <div className="flex flex-col sm:flex-row items-start gap-y-4 sm:gap-y-0 sm:items-center justify-between mb-6 border-b border-[#E5E5E5] pb-4">
          <div className="flex items-center gap-4">
            <div>
              <img
                src={row.tenant.avatar}
                className="w-[50px] h-[50px] rounded-full"
                alt="tenant"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[18px] font-[500] text-t-primary">
                  <span>{row.tenant.name}</span>
                </h1>
                <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-[#FCF1E6]">
                  <img
                    src="/assets/images/icons/crown-orange-ic.svg"
                    alt="crown"
                    width={20}
                    height={20}
                  />
                  <span className="text-primary text-sm">Diamond</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/call-orange-ic.svg"
                    alt="call"
                    width={20}
                    height={20}
                  />
                  <span className="text-t-secondary text-sm">
                    +1 555-123-7890
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons/mail-orange-ic.svg"
                    alt="call"
                    width={20}
                    height={20}
                  />
                  <span className="text-t-secondary text-sm">
                    help@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Link href="#" className="text-sm text-primary">
            View Profile
          </Link>
        </div>
        {/* Rental Information */}
        <div>
          <h1 className="text-[20px] font-[600] text-t-primary mb-4">
            Rental Information
          </h1>
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
              <p className="text-base font-[500] text-t-primary">Methods</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                Credit Card
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Payment</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                <span
                  className={`${
                    row.payment === "Success"
                      ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                      : row.payment === "Pending"
                      ? "bg-[#FCF1E6] text-[#DD8800] px-2 py-1 rounded"
                      : row.payment === "Rejected"
                      ? "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                      : "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                  }`}
                >
                  {row.payment}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Rent Payment Period
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                {row.paidDate}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Due Date</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                {row.dueDate}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Transection ID
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                {row.requestId}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Status</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                <span
                  className={`${
                    row.status === "Paid"
                      ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                      : row.status === "Due"
                      ? "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
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
                Paid Date & Time
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                Jun 10, 2025-02:45 PM
              </p>
            </div>
          </div>
        </div>
        {/* Transaction Summary */}
        <div>
          <h1 className="text-[20px] font-[600] text-t-primary mt-4">
            Transaction Summary
          </h1>
          <div className="py-4 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Monthly fee (2,530*6){" "}
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $15,180
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">
                Service charge
              </p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $2,100
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Tax (7%)</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $750
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Get 6% off</p>
              <p className="text-base font-[400] text-[#CB121D] text-left sm:text-right">
                $1,080
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
              <p className="text-base font-[500] text-t-primary">Total</p>
              <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
                $16,920
              </p>
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <button className="w-full sm:w-auto bg-primary border border-primary text-white px-4 py-3 rounded-sm text-sm cursor-pointer">
            Request For Withdraw
          </button>
          <button className="w-full sm:w-auto bg-white border border-gray-200 text-t-primary px-4 py-3 rounded-sm text-sm cursor-pointer">
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;
