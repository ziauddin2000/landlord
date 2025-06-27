import React, { useEffect, useState, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

const InvestmentPerformanceModal = ({ propertyId, onClose }) => {
  const [property, setProperty] = useState(null);
  const modalRef = useRef();

  // Dummy data for demonstration
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
    <div className="fixed inset-0 z-50 bg-black/40 flex">
      <div
        ref={modalRef}
        className="ml-auto h-full w-[96%] max-w-[800px] bg-white rounded-l-2xl shadow-xl  overflow-y-auto relative p-10"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-6 text-gray-400 hover:text-gray-700 text-2xl z-10"
          onClick={onClose}
        >
          <RxCross2 />
        </button>

        <h1 className="text-[24px] font-[600] text-t-primary mb-6">
          Investment Performance
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="mb-4">
              <img
                src={property.image}
                alt={property.name}
                className="w-full mb-4 rounded-xl object-cover"
              />
              <div>
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
                    <span className="bg-[#FCF1E6] text-[#C9631E] text-sm font-[500] px-3 py-2 w-full rounded flex items-center gap-1">
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
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-xs text-gray-500">Profit Share</div>
                <div className="font-semibold text-base">
                  {property.profitShare}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Estimated Duration</div>
                <div className="font-semibold text-base">
                  {property.estimatedDuration}
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Lock-In Period</div>
                <div className="font-semibold text-base">
                  {property.lockInPeriod}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="font-semibold mb-2">Investment Details</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-gray-500">Investment Amount</div>
                  <div>{property.investmentAmount}</div>
                </div>
                <div>
                  <div className="text-gray-500">Start Date</div>
                  <div>{property.startDate}</div>
                </div>
                <div>
                  <div className="text-gray-500">Project End</div>
                  <div>{property.projectEnd}</div>
                </div>
                <div>
                  <div className="text-gray-500">Lock-In Ends</div>
                  <div>{property.lockInEnds}</div>
                </div>
                <div>
                  <div className="text-gray-500">Exit Condition</div>
                  <div>{property.exitCondition}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Documents</div>
              <div className="space-y-2">
                {property.documents.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center bg-gray-50 rounded px-3 py-2"
                  >
                    <img
                      src="/assets/images/icons/pdf-ic.svg"
                      alt="pdf"
                      className="w-6 h-6 mr-2"
                    />
                    <span className="flex-1 text-sm">{doc.name}</span>
                    <button>
                      <svg
                        className="w-5 h-5 text-gray-400 hover:text-primary"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 pt-0 overflow-y-auto flex-1">
            <div className="font-semibold text-lg mb-4">
              Profit Distribution
            </div>
            <div className="mb-6">
              <table className="w-full text-sm">
                <tbody>
                  {property.profitDistribution.map((row, i) => (
                    <tr
                      key={row.field}
                      className={
                        i === property.profitDistribution.length - 1
                          ? "font-bold text-primary"
                          : ""
                      }
                    >
                      <td className="py-1">{row.field}</td>
                      <td className="py-1 text-right">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="font-semibold text-lg mb-4">
              Investment Return Summary
            </div>
            <div>
              <table className="w-full text-sm">
                <tbody>
                  {property.returnSummary.map((row) => (
                    <tr key={row.field}>
                      <td className="py-1">{row.field}</td>
                      <td className="py-1 text-right">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPerformanceModal;
