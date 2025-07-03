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
import { FaCrown, FaRegEye } from "react-icons/fa";
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
import SubscriptionModal from "./SubscriptionModal";

// Dummy data
const data = [
  {
    id: 1,
    paidDate: "April 28, 2025",
    planType: "Trail",
    amount: "Free",
    method: "Credit Card",
    status: "Trial",
  },
  {
    id: 2,
    paidDate: "April 28, 2025",
    planType: "Premium",
    amount: "$29.00",
    method: "-",
    status: "Paid",
  },
  {
    id: 3,
    paidDate: "April 28, 2025",
    planType: "Basic",
    amount: "Free",
    method: "-",
    status: "Free Plan",
  },
  {
    id: 4,
    paidDate: "April 28, 2025",
    planType: "Premium",
    amount: "$29.00",
    method: "Credit Card",
    status: "Paid",
  },
];

const headers = [
  "Paid Date",
  "Plan Type",
  "Amount",
  "Methods",
  "Status",
  "Action",
];

const statusOptions = [
  { value: "all", label: "All " },
  { value: "Trial", label: "Trial" },
  { value: "Paid", label: "Paid" },
  { value: "Free Plan", label: "Free Plan" },
];

const SubscriptionList = ({ handleDetails }) => {
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
      row.planType.toLowerCase().includes(search.toLowerCase()) ||
      row.method.toLowerCase().includes(search.toLowerCase());
    const statusMatch = status === "all" ? true : row.status === status;
    const dateMatch = date ? row.paidDate === date : true;
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
            Subscription List
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
                    <h5 className="text-sm">{row.paidDate}</h5>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm font-medium">
                      <span
                        className={`w-fit flex items-center gap-2 ${
                          row.planType === "Basic"
                            ? "bg-[#FCF1E6] text-[#DD8800] px-2 py-1 rounded"
                            : row.planType === "Trail" ||
                              row.planType === "Premium"
                            ? "bg-[#E6F0FF] text-[#2B7FFF] px-2 py-1 rounded"
                            : "bg-[#F5F5F5] text-[#878787] px-2 py-1 rounded"
                        }`}
                      >
                        <FaCrown />
                        <span>{row.planType}</span>
                      </span>
                    </h5>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm">{row.amount}</h5>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm">{row.method}</h5>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`text-sm font-medium ${
                        row.status === "Trial" || row.status === "Paid"
                          ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
                          : row.status === "Free Plan"
                          ? "bg-[#E6F0FF] text-[#2B7FFF] px-2 py-1 rounded"
                          : "bg-[#F5F5F5] text-[#878787] px-2 py-1 rounded"
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
        <SubscriptionModal row={selectedRow} onClose={closeModal} />
      )}
    </div>
  );
};

export default SubscriptionList;
