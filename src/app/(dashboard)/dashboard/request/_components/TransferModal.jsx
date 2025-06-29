import { useRef, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";

const TransferModal = ({ row, handleReject, onClose }) => {
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
        className="ml-auto h-full w-[96%] max-w-[700px] bg-white rounded-l-2xl shadow-xl  overflow-y-auto relative p-4 py-8 md:p-10"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-2xl z-10 cursor-pointer"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        {/* Title */}
        <h1 className="text-[24px] font-[600] text-t-primary mb-6">
          Transfer Request
        </h1>

        {/* Tenant Details */}
        <div className="flex flex-col sm:flex-row items-start gap-y-4 sm:gap-y-0 sm:items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <img
                src="https://github.com/shadcn.png"
                className="w-[50px] h-[50px] rounded-full"
              />
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-t-primary">
                {row.tenantName}
              </h1>
              <p className="text-[14px] font-[400] text-t-primary">Tenant</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <img
                src={row.propertyImg}
                className="w-[50px] h-[50px] rounded-md"
              />
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-t-primary">
                {row.propertyName}
              </h1>
              <p
                className="text-[14px] font-[400] text-t-primary"
                title={row.propertyAddress}
              >
                {row.propertyAddress.substring(0, 20)}...
              </p>
            </div>
          </div>

          <button className="text-primary text-base font-[400] cursor-pointer">
            View Details
          </button>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row items-start gap-y-4 sm:gap-4 sm:items-center py-6 border-b border-[#E0E0E0] ">
          <a href="#" className="flex items-center gap-2">
            <img
              src="../assets/images/icons/call-orange-ic.svg"
              alt="call"
              className="w-[25px]"
            />
            <span className="text-base font-[400] text-t-primary">
              {row.phone}
            </span>
          </a>

          <a href="#" className="flex items-center gap-2">
            <img
              src="../assets/images/icons/mail-orange-ic.svg"
              alt="Mail"
              className="w-[25px]"
            />
            <span className="text-base font-[400] text-t-primary">
              testabc@gmail.com
            </span>
          </a>
        </div>

        {/* Transfer Details */}
        <div className="py-6 space-y-3  border-b border-[#E0E0E0]">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">
              Current Address
            </p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Maple Grove 42 Elm St, Austin, TX
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Employer Name</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Mahher Hereoan
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Job Title</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Business
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Annual Salary</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              $10,000-$20,000
            </p>
          </div>
        </div>

        {/* Requested Property */}
        <div className="py-6 space-y-3  border-b border-[#E0E0E0]">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">
              Requested Property
            </p>
            <div className="flex justify-end gap-2 items-center">
              <p className="text-base font-[400] text-left sm:text-right">
                {row.propertyName}
              </p>
              <img
                src={row.propertyImg}
                alt="property"
                className="w-10 h-10 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Location</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              #R-Murphy House 4140 Parker Rd. Allentown, New Mexi
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Request Type</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Property Transfer
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Request ID</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              #R-00123
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Status</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              <span
                className={
                  row.status === "Approved"
                    ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                    : row.status === "In Review"
                    ? "bg-[#E6F0FF] text-[#0065FF] px-2 py-1 rounded"
                    : "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                }
              >
                {row.status}
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Request Date</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Apr 10, 2025
            </p>
          </div>
        </div>

        {/* Documents */}
        <div className="py-6  grid grid-cols-1 sm:grid-cols-2 justify-between gap-4">
          <div className="flex items-center bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 cursor-pointer">
            <img
              src="/assets/images/icons/pdf-ic.svg"
              alt="pdf"
              className="w-6 h-6 mr-2"
            />
            <span className="flex-1 text-sm">Lease Agreement</span>
            <button>
              <RxDownload />
            </button>
          </div>

          <div className="flex items-center bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 cursor-pointer">
            <img
              src="/assets/images/icons/pdf-ic.svg"
              alt="pdf"
              className="w-6 h-6 mr-2"
            />
            <span className="flex-1 text-sm">Lease Agreement</span>
            <button>
              <RxDownload />
            </button>
          </div>

          <div className="flex items-center bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 cursor-pointer">
            <img
              src="/assets/images/icons/pdf-ic.svg"
              alt="pdf"
              className="w-6 h-6 mr-2"
            />
            <span className="flex-1 text-sm">Lease Agreement</span>
            <button>
              <RxDownload />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 py-2">
          <button className="bg-primary border border-primary text-base font-[500] text-white px-4 py-3 rounded-sm min-w-[120px] sm:min-w-[140px] cursor-pointer">
            Accept
          </button>
          <button
            onClick={handleReject}
            className="bg-white border border-[#e5e5e5] text-t-primary px-4 py-3 rounded-sm min-w-[120px] sm:min-w-[140px] cursor-pointer"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
