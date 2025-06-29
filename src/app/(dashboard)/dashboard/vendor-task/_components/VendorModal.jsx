import { useRef, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";

const VendorModal = ({ row, onClose }) => {
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
        <h1 className="text-[24px] font-[600] text-t-primary mb-6">
          Vendor Task Details
        </h1>

        {/* Tenant and Vendor Details */}
        <div className="flex flex-col sm:flex-row items-start gap-y-4 sm:gap-y-0 sm:items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div>
              <img
                src={row.tenant.avatar}
                className="w-[50px] h-[50px] rounded-full"
                alt="tenant"
              />
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-t-primary">
                {row.tenant.name}
              </h1>
              <p className="text-[14px] font-[400] text-t-primary">
                {row.tenant.role}
              </p>
            </div>
          </div>

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

          <span
            className={`${
              row.issue.priority === "Emergency"
                ? "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                : row.issue.priority === "Standard"
                ? "Standard"
                : "Urgent"
            }`}
          >
            {row.issue.priority}
          </span>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row items-start gap-y-4 sm:gap-4 sm:items-center py-6 border-b border-[#E0E0E0]">
          <a href="#" className="flex items-center gap-2">
            <img
              src="../assets/images/icons/call-orange-ic.svg"
              alt="call"
              className="w-[25px]"
            />
            <span className="text-base font-[400] text-t-primary">
              +1 (555) 123-4567
            </span>
          </a>

          <a href="#" className="flex items-center gap-2">
            <img
              src="../assets/images/icons/mail-orange-ic.svg"
              alt="Mail"
              className="w-[25px]"
            />
            <span className="text-base font-[400] text-t-primary">
              {row.tenant.name.toLowerCase().replace(/\s+/g, "")}@gmail.com
            </span>
          </a>

          <span className="bg-[#fcf1e6] text-[#dd8800] px-2 py-2 text-sm rounded-sm">
            {row.requestDate}
          </span>
        </div>

        {/* Task Details */}
        <div className="py-6 space-y-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Tenant Name</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              {row.tenant.name}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Issue</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              {row.issue.title}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Position</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Kitchen
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Category</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Plumbing
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">
              Preferred Date & Time
            </p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Apr 10, 2025 10:20 - 11:00 AM
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Request ID</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              {row.requestId}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Status</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              <span
                className={`${
                  row.status === "Completed"
                    ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                    : row.status === "On going"
                    ? "bg-[#FCF1E6] text-[#DD8800] px-2 py-1 rounded"
                    : row.status === "In Review"
                    ? "bg-[#E6F0FF] text-[#0065FF] px-2 py-1 rounded"
                    : "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                }`}
              >
                {row.status}
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Request Date</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              {row.requestDate}, 2025
            </p>
          </div>
        </div>

        {/* Task Description */}
        <div className="py-3">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-base text-t-secondary leading-relaxed">
              Spacious apartment with hardwood floors, modern kitchen, walk in
              closets, and a private balcony with city views
            </p>
          </div>
        </div>

        {/* Media */}
        <div className="media grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {media.map((item, idx) => (
            <div
              key={idx}
              className="media-item relative w-full h-[100px] sm:w-full sm:h-[140px] rounded-xl overflow-hidden"
            >
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt="media"
                  className="object-cover w-full h-full"
                />
              )}
              {item.type === "video" && (
                <>
                  {playingIndex === idx ? (
                    <video
                      src={item.src}
                      controls
                      autoPlay
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <>
                      <img
                        src={item.thumbnail}
                        alt="video thumbnail"
                        className="object-cover w-full h-full"
                      />
                      <button
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setPlayingIndex(idx)}
                      >
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="white"
                          style={{ opacity: 0.8 }}
                        >
                          <circle
                            cx="24"
                            cy="24"
                            r="24"
                            fill="black"
                            opacity="0.5"
                          />
                          <polygon points="20,16 34,24 20,32" fill="white" />
                        </svg>
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="py-6 space-y-3 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Parts Fee</p>
            <p className="text-base font-[400] text-t-primary text-left sm:text-right">
              $2,180
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Service Fee</p>
            <p className="text-base font-[400] text-t-primary text-left sm:text-right">
              $500
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Total</p>
            <p className="text-base font-[400] text-t-primary text-left sm:text-right">
              $2,680
            </p>
          </div>
        </div>

        {/* Documents */}
        <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 justify-between gap-4">
          <div className="flex items-center bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 cursor-pointer">
            <img
              src="/assets/images/icons/pdf-ic.svg"
              alt="pdf"
              className="w-6 h-6 mr-2"
            />
            <span className="flex-1 text-sm">
              Current Lease Agreement Review
            </span>
            <button>
              <RxDownload />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 py-3">
          <button className="bg-white border border-[#e5e5e5] text-t-primary px-6 py-3 rounded-sm min-w-[120px] cursor-pointer">
            View payment request
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorModal;
