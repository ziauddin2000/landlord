import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

const PropertyList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const properties = [
    {
      id: 1,
      status: "For Rent",
      name: "Elm Apartment",
      price: "$3,000",
      address: "1234 Elm Street, New York, NY 10001",
      beds: 2,
      baths: 2,
      lease: "1 Year",
      floor: "12 Floor",
      size: "950 sq ft",
      image: "/assets/images/property-01.jpg",
      agent: "Darlene Robertson",
      agentImg: "/assets/images/user-01.jpg",
    },
    {
      id: 2,
      status: "For Sale",
      name: "Elm Apartment",
      price: "$3,000",
      address: "1234 Elm Street, New York, NY 10001",
      beds: 2,
      baths: 2,
      lease: "1 Year",
      floor: "12 Floor",
      size: "950 sq ft",
      image: "/assets/images/property-02.jpg",
      agent: "Ralph Edwards",
      agentImg: "/assets/images/user-02.jpg",
    },
    {
      id: 3,
      status: "For Rent",
      name: "Elm Apartment",
      price: "$3,000",
      address: "1234 Elm Street, New York, NY 10001",
      beds: 2,
      baths: 2,
      lease: "1 Year",
      floor: "12 Floor",
      size: "950 sq ft",
      image: "/assets/images/property-03.jpg",
      agent: "Wade Warren",
      agentImg: "/assets/images/user-03.jpg",
    },
    {
      id: 4,
      status: "For Sale",
      name: "Sunset Villa",
      price: "$4,500",
      address: "5678 Sunset Blvd, Los Angeles, CA 90210",
      beds: 3,
      baths: 2,
      lease: "2 Years",
      floor: "5 Floor",
      size: "1200 sq ft",
      image: "/assets/images/property-01.jpg",
      agent: "Sarah Johnson",
      agentImg: "/assets/images/user-02.jpg",
    },
    {
      id: 5,
      status: "For Rent",
      name: "Downtown Loft",
      price: "$2,800",
      address: "901 Downtown Ave, Chicago, IL 60601",
      beds: 1,
      baths: 1,
      lease: "1 Year",
      floor: "8 Floor",
      size: "750 sq ft",
      image: "/assets/images/property-02.jpg",
      agent: "Mike Chen",
      agentImg: "/assets/images/user-03.jpg",
    },
    {
      id: 6,
      status: "For Sale",
      name: "Garden House",
      price: "$5,200",
      address: "345 Garden St, Miami, FL 33101",
      beds: 4,
      baths: 3,
      lease: "3 Years",
      floor: "2 Floor",
      size: "1800 sq ft",
      image: "/assets/images/property-03.jpg",
      agent: "Lisa Rodriguez",
      agentImg: "/assets/images/user-01.jpg",
    },
    {
      id: 7,
      status: "For Rent",
      name: "Mountain View",
      price: "$3,800",
      address: "789 Mountain Rd, Denver, CO 80201",
      beds: 2,
      baths: 2,
      lease: "1 Year",
      floor: "15 Floor",
      size: "1100 sq ft",
      image: "/assets/images/property-01.jpg",
      agent: "David Wilson",
      agentImg: "/assets/images/user-02.jpg",
    },
    {
      id: 8,
      status: "For Sale",
      name: "Beachfront Condo",
      price: "$6,500",
      address: "123 Beach Dr, San Diego, CA 92101",
      beds: 3,
      baths: 2,
      lease: "2 Years",
      floor: "10 Floor",
      size: "1400 sq ft",
      image: "/assets/images/property-02.jpg",
      agent: "Emma Davis",
      agentImg: "/assets/images/user-03.jpg",
    },
    {
      id: 9,
      status: "For Rent",
      name: "City Center Apartment",
      price: "$3,200",
      address: "456 City Center Ave, Boston, MA 02101",
      beds: 2,
      baths: 1,
      lease: "1 Year",
      floor: "20 Floor",
      size: "900 sq ft",
      image: "/assets/images/property-03.jpg",
      agent: "John Smith",
      agentImg: "/assets/images/user-01.jpg",
    },
    {
      id: 10,
      status: "For Sale",
      name: "Luxury Penthouse",
      price: "$8,500",
      address: "789 Luxury Blvd, Las Vegas, NV 89101",
      beds: 4,
      baths: 3,
      lease: "5 Years",
      floor: "25 Floor",
      size: "2000 sq ft",
      image: "/assets/images/property-01.jpg",
      agent: "Maria Garcia",
      agentImg: "/assets/images/user-02.jpg",
    },
    {
      id: 11,
      status: "For Rent",
      name: "Studio Loft",
      price: "$1,800",
      address: "321 Studio St, Portland, OR 97201",
      beds: 0,
      baths: 1,
      lease: "6 Months",
      floor: "3 Floor",
      size: "500 sq ft",
      image: "/assets/images/property-02.jpg",
      agent: "Alex Johnson",
      agentImg: "/assets/images/user-03.jpg",
    },
    {
      id: 12,
      status: "For Sale",
      name: "Family Home",
      price: "$7,200",
      address: "654 Family Rd, Austin, TX 73301",
      beds: 5,
      baths: 4,
      lease: "10 Years",
      floor: "1 Floor",
      size: "2500 sq ft",
      image: "/assets/images/property-03.jpg",
      agent: "Robert Brown",
      agentImg: "/assets/images/user-01.jpg",
    },
  ];

  // Filter properties based on search and status
  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchMatch =
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.price.toLowerCase().includes(searchTerm.toLowerCase());

      const statusMatch =
        filterStatus === "All" || property.status === filterStatus;

      return searchMatch && statusMatch;
    });
  }, [searchTerm, filterStatus]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = filteredProperties.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="py-3 ">
      <div className="p-6 bg-white rounded-xl shadow-sm">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
          <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-[600] text-t-primary whitespace-nowrap">
            My Property List
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#f5f5f5] rounded-md px-4 py-2.5 pl-10 w-full sm:w-[200px] md:w-[220px] lg:w-[180px] xl:w-[220px] hover:outline-0 hover:border-0 focus:outline-0 focus:border-0 text-sm"
              />
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            <Link href="/dashboard/property/add">
              <button className="text-[14px] sm:text-[15px] lg:text-[16px] bg-primary text-white px-4 py-2.5 rounded-md cursor-pointer hover:bg-[#c77700] transition flex items-center justify-center gap-2 whitespace-nowrap">
                <FiPlus className="w-4 h-4" />
                <span>Add New Property</span>
              </button>
            </Link>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[120px] cursor-pointer focus:outline-0 text-sm">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="For Rent">For Rent</SelectItem>
                <SelectItem value="For Sale">For Sale</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {currentProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-md rounded-xl overflow-hidden min-w-0"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-52 object-cover object-center"
                />
                <div className="absolute flex items-center gap-[5px] top-3 left-3 bg-[#C2C2C2B2] text-white text-sm px-3 py-[6px] rounded-md">
                  <span className="h-[5px] w-[5px] bg-white rounded-full"></span>
                  <span>{property.status}</span>
                </div>
              </div>
              <div className="py-4 px-5">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-[500] text-[18px]">{property.name}</h3>
                  <span className="text-[#04A755] text-[18px] font-[500]">
                    {property.price}
                  </span>
                </div>
                <p className="text-sm text-t-secondary font-[400] mb-3">
                  {property.address}
                </p>

                <div className="grid grid-cols-2 2xl:grid-cols-3 gap-2 text-[14px] font-[500] text-t-secondary mb-3">
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2 min-w-0">
                    <img
                      src="/assets/images/icons/bed-ic.svg"
                      alt="bed"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="truncate">{property.beds} Beds</span>
                  </span>
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2 min-w-0">
                    <img
                      src="/assets/images/icons/buthtub-ic.svg"
                      alt="bed"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="truncate">{property.baths} Baths</span>
                  </span>
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2 min-w-0">
                    <img
                      src="/assets/images/icons/guest-house-ic.svg"
                      alt="bed"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="truncate">{property.lease}</span>
                  </span>
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2 min-w-0">
                    <img
                      src="/assets/images/icons/floor-ic.svg"
                      alt="bed"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="truncate">{property.floor}</span>
                  </span>
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2 min-w-0">
                    <img
                      src="/assets/images/icons/sqr-ic.svg"
                      alt="bed"
                      className="w-5 h-5 flex-shrink-0"
                    />
                    <span className="truncate">{property.size}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <img
                    src={property.agentImg}
                    alt={property.agent}
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="text-sm text-gray-700">
                    Rented by <br /> <b>{property.agent}</b>
                  </span>
                </div>

                <Link href={`/dashboard/property/${property.id}`}>
                  <button className="w-full border border-gray-300 rounded-md py-2 text-[16px] cursor-pointer font-medium hover:bg-gray-100">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {currentProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">
              No properties found matching your criteria.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Try adjusting your search or filter options.
            </p>
          </div>
        )}

        {/* Pagination - Updated to match TaskList style */}
        {totalPages > 0 && (
          <div className="flex justify-end items-center mt-4 gap-2">
            <button
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === 1 ? "bg-muted" : "bg-primary text-white"
              }`}
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === totalPages
                  ? "bg-muted"
                  : "bg-primary text-white"
              }`}
              onClick={handleNext}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
