import { useRef, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";

const MaintenanceModal = ({ row, onClose }) => {
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

  // Maintenance Media
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

  // Vendor data and state
  const [selectedVendor, setSelectedVendor] = useState(0);
  const vendors = [
    {
      name: "Audry hawq",
      avatar: "/assets/images/user-01.jpg",
    },
    {
      name: "Audry hawq",
      avatar: "/assets/images/user-01.jpg",
    },
    {
      name: "Audry hawq",
      avatar: "/assets/images/user-01.jpg",
    },
  ];

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
          Maintenance Request
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

          <button className="text-[#CB121D] bg-[#FDEBEB] px-3 py-2 rounded-sm text-base font-[400] cursor-pointer">
            Emergency
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

        {/* Maintenance Details */}
        <div className="py-6 space-y-3  border-b border-[#E0E0E0]">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between">
            <p className="text-base font-[500] text-t-primary">Issue</p>
            <p className="text-base font-[400] text-t-secondary text-left sm:text-right">
              Leaking Kitchen Faucet
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
              May 20, 2025 11:00 AM
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
          <div>
            <span class="inline-flex items-center rounded-md bg-gray-50 px-5 py-5 text-base font-medium text-t-secondary ring-1 ring-gray-500/10 ring-inset">
              Spacious apartment with hardwood floors, modern kitchen, walk in
              closets, and a private balcony with city views
            </span>
          </div>
          {/* Maintenance Media */}
          <div className="maintenance-media grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {media.map((item, idx) => (
              <div
                key={idx}
                className="maintenance-media-item relative w-full h-[100px] sm:w-full sm:h-[140px] rounded-xl overflow-hidden"
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
        </div>

        {/* Vendor */}
        <div className="py-6">
          {/* Vendor Selection */}
          <div className="bg-white rounded-xl border border-[#F0F0F0] p-6">
            <h2 className="text-base font-semibold text-t-primary mb-1">
              Select Vendor
            </h2>
            <p className="text-sm text-t-secondary mb-4">
              14 Vendors are available today
            </p>
            <div className="space-y-3 max-h-[260px] overflow-y-auto pr-2">
              {vendors.map((vendor, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3 rounded-xl border transition
                    ${
                      selectedVendor === idx
                        ? "border-[#FFB800] bg-[#FFF8F0]"
                        : "border-[#F0F0F0] bg-white"
                    }
                    cursor-pointer`}
                  onClick={() => setSelectedVendor(idx)}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <img
                      src={vendor.avatar}
                      alt={vendor.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-base font-medium text-t-primary">
                        {vendor.name}
                      </div>
                      <div className="text-sm text-t-secondary">Vendor</div>
                    </div>
                    <span className="px-3 py-1 rounded bg-[#CDFDC6] text-[#04A755] text-sm font-normal">
                      Available
                    </span>
                  </div>
                  <span>
                    {selectedVendor === idx ? (
                      <span className="w-6 h-6 rounded-full border-1 border-[#FFB800] flex items-center justify-center">
                        <span className="w-3 h-3 rounded-full bg-[#FFB800] block"></span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center w-6 h-6 rounded-full border-1 border-[#170a00]"></span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 py-2">
          <button className="bg-primary border border-primary text-base font-[500] text-white px-4 py-3 rounded-sm min-w-[120px] sm:min-w-[140px] cursor-pointer">
            Assign
          </button>
          <button className="bg-white border border-[#e5e5e5] text-t-primary px-4 py-3 rounded-sm min-w-[120px] sm:min-w-[140px] cursor-pointer">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceModal;
