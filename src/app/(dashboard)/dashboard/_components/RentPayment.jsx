"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegEye } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

// Dummy data
const data = [
  {
    paidDate: "10/08/2025",
    payment: "Success",
    avatar: "https://github.com/shadcn.png",
    tenantName: "Karthik Murughan",
    phone: "081234567890",
    id: "RP-3021",
    propertyImg: "assets/images/property-01.jpg",
    propertyName: "Villa in Dubai",
    propertyAddress: "123 Main St, Anytown, USA",
    amount: 316,
    dueDate: "April 5, 2025",
    status: "Paid",
  },
  {
    paidDate: "10/08/2025",
    payment: "Failed",
    avatar: "https://github.com/shadcn.png",
    tenantName: "Karthik Murughan",
    phone: "081234567890",
    id: "RP-3021",
    propertyImg: "assets/images/property-02.jpg",
    propertyName: "Villa in France",
    propertyAddress: "123 Main St, Anytown, USA",
    amount: 316,
    dueDate: "April 5, 2025",
    status: "Due",
  },
  {
    paidDate: "10/08/2025",
    payment: "Success",
    avatar: "https://github.com/shadcn.png",
    tenantName: "Karthik Murughan",
    phone: "081234567890",
    id: "RP-3021",
    propertyImg: "assets/images/property-03.jpg",
    propertyName: "Villa in Paris",
    propertyAddress: "123 Main St, Anytown, USA",
    amount: 316,
    dueDate: "April 5, 2025",
    status: "Due",
  },
];

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "Paid", label: "Paid" },
  { value: "Due", label: "Due" },
];

const headers = [
  "Paid Date",
  "Payment",
  "Tenant Name",
  "ID",
  "Property",
  "Amount",
  "Due Date",
  "Status",
  "Action",
];

const RentPayment = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [date, setDate] = useState("");

  // Filtering logic
  const filteredData = data.filter((row) => {
    const searchMatch =
      row.tenantName.toLowerCase().includes(search.toLowerCase()) ||
      (row.propertyName &&
        row.propertyName.toLowerCase().includes(search.toLowerCase())) ||
      row.id.toLowerCase().includes(search.toLowerCase());
    const statusMatch = status === "all" ? true : row.status === status;
    const dateMatch = date ? row.paidDate === date : true;
    return searchMatch && statusMatch && dateMatch;
  });

  return (
    <div className="py-3">
      <div className="w-full p-6 bg-white rounded-xl shadow-sm">
        {/* Header with filters */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-6 w-full">
          <h2 className="text-[24px] font-[600] text-t-primary mb-2 md:mb-0 flex-shrink-0">
            Tenant Rent Payment
          </h2>
          <div className="flex flex-col gap-2 w-full sm:flex-row sm:flex-wrap sm:gap-2 md:gap-4 md:w-auto md:justify-end md:flex-wrap max-w-full min-w-0">
            <div className="relative w-full sm:w-auto sm:max-w-[220px] md:flex-1 md:min-w-[120px] md:max-w-[220px] min-w-0">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <FiSearch />
              </span>
              <Input
                className="pl-9 pr-2 bg-muted border-none focus-visible:ring-0 focus-visible:border-ring rounded-md w-full"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-auto sm:min-w-[120px] sm:max-w-[220px] md:flex-1 md:min-w-[120px] md:max-w-[220px] min-w-0">
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="bg-muted border-none focus-visible:ring-0 focus-visible:border-ring rounded-md w-full">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full sm:w-auto sm:w-[170px] md:flex-1 md:min-w-[120px] md:max-w-[170px] min-w-0">
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-muted border-none focus-visible:ring-0 focus-visible:border-ring rounded-md w-full"
                placeholder="Select date"
              />
            </div>
          </div>
        </div>
        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow className="bg-muted rounded-md">
              {headers.map((header) => (
                <TableHead key={header}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length ? (
              filteredData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.paidDate}</TableCell>
                  <TableCell>
                    <span
                      className={`${
                        row.payment === "Success"
                          ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                          : "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                      }`}
                    >
                      {row.payment}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={row.avatar}
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5
                          className="text-t-primary text-[14px] font-[500]"
                          title={row.tenantName}
                        >
                          {row.tenantName.substring(0, 10) + "..."}
                        </h5>
                        <p
                          className="text-t-secondary text-[12px]"
                          title={row.phone}
                        >
                          {row.phone.substring(0, 8) + "..."}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-t-primary font-[500] text-[16px]">
                      {row.id}
                    </h5>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="w-10 h-10 rounded-sm overflow-hidden">
                        <img
                          src={row.propertyImg}
                          alt="property"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5
                          className="text-t-primary text-[14px] font-[500]"
                          title={row.propertyName}
                        >
                          {row.propertyName.substring(0, 20) + "..."}
                        </h5>
                        <p
                          className="text-t-secondary text-[12px]"
                          title={row.propertyAddress}
                        >
                          {row.propertyAddress.substring(0, 20) + "..."}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-t-primary font-[500] text-[16px]">
                      ${row.amount}
                    </h5>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-t-primary font-[500] text-[16px]">
                      {row.dueDate}
                    </h5>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`${
                        row.status === "Paid"
                          ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                          : "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                      }`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button className="h-8 w-8 p-0 cursor-pointer bg-transparent text-p-primary hover:bg-primary hover:text-white">
                      <FaRegEye />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={headers.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RentPayment;
