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
import DatePicker from "@/components/ui/date-picker";
import RentModal from "./RentModal";
import WithdrawModal from "./WithdrawModal";

// Dummy data
const data = [
  {
    id: 1,
    reqDate: "10/07/2025",
    requestId: "RP-3021",
    property: {
      image: "../assets/images/property-01.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    amount: "$1,200",
    method: "Bank",
    status: "Approved",
  },
  {
    id: 2,
    reqDate: "10/07/2025",
    requestId: "RP-3022",
    property: {
      image: "../assets/images/property-02.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    amount: "$1,200",
    method: "Bank",
    status: "Pending",
  },
  {
    id: 3,
    reqDate: "10/07/2025",
    requestId: "RP-3023",
    property: {
      image: "../assets/images/property-03.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    amount: "$1,200",
    method: "Bank",
    property: {
      image: "../assets/images/property-03.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    amount: "$1,200",
    method: "Bank",
    status: "Rejected",
  },
  {
    id: 4,
    reqDate: "10/07/2025",
    requestId: "RP-3023",
    property: {
      image: "../assets/images/property-03.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    amount: "$1,200",
    method: "Bank",
    status: "Request",
    property: {
      image: "../assets/images/property-03.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    amount: "$1,200",
    method: "Bank",
    status: "Paid",
  },
];

const statusOptions = [
  { value: "all", label: "All " },
  { value: "Approved", label: "Approved" },
  { value: "Pending", label: "Pending" },
  { value: "Paid", label: "Paid" },
  { value: "Rejected", label: "Rejected" },
];

const headers = [
  "Req Date",
  "ID",
  "Property",
  "Amount",
  "Method",
  "Status",
  "Action",
];

const WithdrawalTable = ({ handleDetails }) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [date, setDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  // Handle details click
  const handleDetailsClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedRow(null);
  };

  // Filtering logic
  const filteredData = data.filter((row) => {
    const searchMatch =
      row.property.name.toLowerCase().includes(search.toLowerCase()) ||
      row.requestId.toLowerCase().includes(search.toLowerCase());
    const statusMatch = status === "all" ? true : row.status === status;
    const dateMatch = date ? row.requestDate === date : true;
    return searchMatch && statusMatch && dateMatch;
  });

  // Pagination logic
  const ROWS_PER_PAGE = 10;

  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  // Reset to first page if filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, status, date]);

  return (
    <div className="py-3">
      <div className="w-full p-6 bg-white rounded-xl shadow-sm">
        {/* Header with filters */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-6 w-full">
          <h2 className="text-[24px] font-[600] text-t-primary mb-2 md:mb-0 flex-shrink-0">
            My Withdrawals Lists
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
              <DatePicker
                value={date}
                onChange={setDate}
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
            {paginatedData.length ? (
              paginatedData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <h5 className="text-sm">{row.reqDate}</h5>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm">{row.requestId}</h5>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="w-10 h-10 rounded-sm overflow-hidden">
                        <img
                          src={row.property.image}
                          alt="property"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5
                          className="text-t-primary text-[14px] font-[500]"
                          title={row.property.name}
                        >
                          {row.property.name.length > 20
                            ? row.property.name.substring(0, 20) + "..."
                            : row.property.name}
                        </h5>
                        <p
                          className="text-t-secondary text-[12px]"
                          title={row.property.address}
                        >
                          {row.property.address.substring(0, 20) + "..."}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm">{row.amount}</h5>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm">{row.method}</h5>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`${
                        row.status === "Paid"
                          ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                          : row.status === "Pending"
                          ? "bg-[#FCF1E6] text-[#DD8800] px-2 py-1 rounded"
                          : row.status === "Approved"
                          ? "bg-[#E6F0FF] text-[#2B7FFF] px-2 py-1 rounded"
                          : row.status === "Rejected"
                          ? "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                          : "bg-[#FDEBEB] text-[#CB121D] px-2 py-1 rounded"
                      }`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDetailsClick(row)}
                      className="h-8 w-8 p-0 cursor-pointer bg-transparent text-p-primary hover:bg-primary hover:text-white"
                    >
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
        {/* Pagination */}
        <div className="flex justify-end items-center mt-4 gap-2">
          <button
            className={`px-3 py-1 rounded  cursor-pointer ${
              currentPage === 1 ? "bg-muted" : "bg-primary text-white "
            }`}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-3 py-1 rounded  cursor-pointer ${
              currentPage === totalPages ? "bg-muted" : "bg-primary text-white "
            }`}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>

      {/* Vendor Modal */}
      {showModal && selectedRow && (
        <WithdrawModal row={selectedRow} onClose={closeModal} />
      )}
    </div>
  );
};

export default WithdrawalTable;
