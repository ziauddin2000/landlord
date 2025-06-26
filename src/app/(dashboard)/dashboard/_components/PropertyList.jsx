import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { FiPlus, FiSearch } from "react-icons/fi";

const PropertyList = () => {
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
      image: "assets/images/property-01.jpg",
      agent: "Darlene Robertson",
      agentImg: "assets/images/user-01.jpg",
    },
    {
      id: 2,
      status: "For Rent",
      name: "Elm Apartment",
      price: "$3,000",
      address: "1234 Elm Street, New York, NY 10001",
      beds: 2,
      baths: 2,
      lease: "1 Year",
      floor: "12 Floor",
      size: "950 sq ft",
      image: "assets/images/property-02.jpg",
      agent: "Ralph Edwards",
      agentImg: "assets/images/user-02.jpg",
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
      image: "assets/images/property-03.jpg",
      agent: "Wade Warren",
      agentImg: "assets/images/user-03.jpg",
    },
  ];

  return (
    <div className="py-3 ">
      <div className="p-6 bg-white rounded-xl shadow-sm">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center sm:items-start lg:items-center gap-4 mb-6">
          <h2 className="text-[24px] font-[600] sm:whitespace-nowrap text-t-primary">
            My Property List
          </h2>
          <div className="flex flex-wrap sm:flex-row items-center gap-y-4 gap-x-2 sm:gap-4 w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#f5f5f5] rounded-md px-4 py-2 pl-10 w-[200px] sm:w-[180px] md:w-[250px] lg:w-[180px] xl:w-[250px] hover:outline-0 hover:border-0 focus:outline-0 focus:border-0"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 " />
            </div>

            <button className="text-[16px] sm:text-[14px] md:text-[16px] bg-primary text-white px-3 lg:px-2  xl:px-3 py-2 rounded-md cursor-pointer hover:bg-[#c77700] transition flex items-center gap-1 whitespace-nowrap">
              <FiPlus />
              <span>Add New Property</span>
            </button>

            <Select>
              <SelectTrigger className="w-[120px] cursor-pointer focus:outline-0 ">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Popular">Popular</SelectItem>
                <SelectItem value="Latest">Latest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-[14px] font-[500] text-t-secondary mb-3">
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2">
                    <img
                      src="/assets/images/icons/bed-ic.svg"
                      alt="bed"
                      className="w-5 h-5"
                    />
                    <span>{property.beds} Beds</span>
                  </span>
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2">
                    <img
                      src="/assets/images/icons/buthtub-ic.svg"
                      alt="bed"
                      className="w-5 h-5"
                    />
                    <span>{property.baths} Baths</span>
                  </span>
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2">
                    <img
                      src="/assets/images/icons/guest-house-ic.svg"
                      alt="bed"
                      className="w-5 h-5"
                    />
                    <span>{property.lease}</span>
                  </span>
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2">
                    <img
                      src="/assets/images/icons/floor-ic.svg"
                      alt="bed"
                      className="w-5 h-5"
                    />
                    <span>{property.floor}</span>
                  </span>
                  <span className="px-2 py-2 border border-[#D6D6D6] rounded-md flex items-center gap-2">
                    <img
                      src="/assets/images/icons/sqr-ic.svg"
                      alt="bed"
                      className="w-5 h-5"
                    />
                    <span>{property.size}</span>
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

                <button className="w-full border border-gray-300 rounded-md py-2 text-[16px] cursor-pointer font-medium hover:bg-gray-100">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 justify-between items-center text-sm text-t-secondary">
          <p>Showing 5–40 of 126 results</p>
          <div className="flex items-center *:cursor-pointer">
            <button className="px-3 py-2 border border-[#EDEDED] rounded-tl-sm rounded-bl-sm hover:bg-gray-100">
              Previous
            </button>
            <button className="px-4 py-2 bg-primary border border-primary text-white">
              1
            </button>
            <button className="px-4 py-2 border border-[#EDEDED] hover:bg-gray-100">
              2
            </button>
            <button className="px-4 py-2 border border-[#EDEDED] hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-2 border border-[#EDEDED] rounded-tr-sm rounded-br-sm hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
