import React, { useEffect, useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";

const InvestmentPerformanceModal = ({ propertyId, onClose }) => {
  const [property, setProperty] = useState(null);
  const modalRef = useRef();

  // Dummy data for demonstration
  // here it will match id then show the property info, Now id is 1 that's why working for only 1 id's
  const propertyInfo = [
    {
      id: 1,
      name: "Elm Apartment",
      image: "/assets/images/property-01.jpg",
      investmentAmount: "$75,000",
      startDate: "Jan 01, 2025",
      address: "Unit #305–1234 Oakwood Avenue, Apt 305 Brooklyn, NY 11211",
      status: "Active",
      isFirstLienHolder: true,
      profitShare: "20%",
      estimatedDuration: "8 Months",
      lockInPeriod: "Until sale",
      projectEnd: "Aug 01, 2025",
      lockInEnds: "After sale",
      exitCondition: "Profit paid after sale",
      documents: [
        { name: "Agreement_Jan2025.pdf" },
        { name: "Receipt_March2025.pdf" },
        { name: "ROI_Report_Q1.pdf" },
      ],
      profitDistribution: [
        { field: "Principal Returned", value: "$75,000" },
        { field: "Profit Paid(20%)", value: "$15,000" },
        { field: "Total Received", value: "$90,000" },
      ],
      returnSummary: [
        { field: "Acquisition Cost", value: "$50,000" },
        { field: "Renovation Cost", value: "$25,000" },
        { field: "Total Project Cost", value: "$75,000" },
        { field: "Projected Sale Price", value: "$150,000" },
        { field: "Profite", value: "$75,000" },
      ],
    },
  ];

  // Simulate fetching data
  useEffect(() => {
    const found = propertyInfo.find((p) => p.id === propertyId);
    setProperty(found || null);
  }, [propertyId]);

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-55 bg-black/40 flex">
      <div
        ref={modalRef}
        className="ml-auto h-full w-[96%] max-w-[800px] bg-white rounded-l-2xl shadow-xl  overflow-y-auto relative p-4 py-8 md:p-10"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-2xl z-10 cursor-pointer"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        <h1 className="text-[24px] font-[600] text-t-primary mb-6">
          Investment Performance
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left side */}
          <div>
            {/* property image */}
            <div className="mb-4">
              <img
                src={property.image}
                alt={property.name}
                className="w-full mb-4 rounded-xl object-cover"
              />
              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-2 justify-between mb-4">
                  <h1 className="text-[18px] font-[500]">{property.name}</h1>

                  <span className="bg-[#E6F0FF] text-[#0065FF] text-sm font-[400] px-2 py-1 rounded-sm">
                    {property.status}
                  </span>
                </div>
                <div className="text-t-secondary text-sm mb-4">
                  {property.address}
                </div>
                <div className="flex items-center gap-2">
                  {property.isFirstLienHolder && (
                    <span className="bg-[#FCF1E6] text-[#C9631E] text-sm font-[500] px-4 py-2 w-full rounded-sm flex items-center gap-1">
                      <img
                        src="/assets/images/icons/check-ic.svg"
                        alt="check"
                        className="w-4 h-4"
                      />
                      <span>Investor is First Lien Holder</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
            {/* profit info */}
            <div className="border border-[#E5E5E5] rounded-md p-4 space-y-2 mb-4">
              <div className="flex items-center gap-2 justify-between">
                <div className="text-sm text-t-secondary">Profit Share</div>
                <div className="font-[500] text-sm">{property.profitShare}</div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <div className="text-sm text-t-secondary">
                  Estimated Duration
                </div>
                <div className="font-[500] text-sm">
                  {property.estimatedDuration}
                </div>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <div className="text-sm text-t-secondary">Lock-In Period</div>
                <div className="font-[500] text-sm">
                  {property.lockInPeriod}
                </div>
              </div>
            </div>
            {/* investment details */}
            <div className="mb-4">
              <div className="font-[500] text-t-primary text-[18px] mb-2">
                Investment Details
              </div>
              <div className="border border-[#E5E5E5] rounded-md p-4 space-y-2 mb-4">
                <div className="flex items-center gap-2 justify-between">
                  <div className="text-sm text-t-secondary">
                    Investment Amount
                  </div>
                  <div className="font-[500] text-sm">
                    {property.investmentAmount}
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <div className="text-sm text-t-secondary">Start Date</div>
                  <div className="font-[500] text-sm">{property.startDate}</div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <div className="text-sm text-t-secondary">Project End</div>
                  <div className="font-[500] text-sm">
                    {property.projectEnd}
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <div className="text-sm text-t-secondary">Lock-In Ends</div>
                  <div className="font-[500] text-sm">
                    {property.lockInEnds}
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-between">
                  <div className="text-sm text-t-secondary">Exit Condition</div>
                  <div className="font-[500] text-sm">
                    {property.exitCondition}
                  </div>
                </div>
              </div>
            </div>
            {/* Documents */}
            <div>
              <div className="font-[500] text-t-primary text-[18px] mb-2">
                Documents
              </div>
              <div className="space-y-2">
                {property.documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center bg-white border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-all duration-300 rounded-lg px-3 py-4 cursor-pointer"
                  >
                    <img
                      src="/assets/images/icons/pdf-ic.svg"
                      alt="pdf"
                      className="w-6 h-6 mr-2"
                    />
                    <span className="flex-1 text-sm">{doc.name}</span>
                    <button>
                      <RxDownload />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side */}
          <div>
            {/* profit distribution */}
            <div>
              <div className="font-[500] text-t-primary text-[18px] mb-2">
                Profit Distribution
              </div>
              <div className="mb-4 border border-primary rounded-md p-4">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[#E5E5E5]">
                      <td className="py-2 text-t-secondary">Field</td>
                      <td className="py-2 text-right font-[600]">Value</td>
                    </tr>
                    {property.profitDistribution.map((row, i) => (
                      <tr
                        key={row.field}
                        className={
                          i === property.profitDistribution.length - 1
                            ? "font-[600] text-t-primary"
                            : "border-b border-[#E5E5E5]"
                        }
                      >
                        <td className="py-2 text-t-secondary">{row.field}</td>
                        <td className="py-2 text-right text-t-primary font-[600]">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* investment return summary */}
            <div>
              <div className="font-[500] text-t-primary text-[18px] mb-2">
                Investment Return Summary
              </div>
              <div className="border border-[#E5E5E5] rounded-md p-4">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-[#E5E5E5]">
                      <td className="py-2 text-t-secondary">Field</td>
                      <td className="py-2 text-right font-[600]">Value</td>
                    </tr>
                    {property.returnSummary.map((row, i) => (
                      <tr
                        className={
                          i === property.returnSummary.length - 1
                            ? "font-[600] text-t-primary"
                            : "border-b border-[#E5E5E5]"
                        }
                        key={row.field}
                      >
                        <td className="py-2 text-t-secondary">{row.field}</td>
                        <td className="py-2 text-right  font-[600]">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPerformanceModal;
