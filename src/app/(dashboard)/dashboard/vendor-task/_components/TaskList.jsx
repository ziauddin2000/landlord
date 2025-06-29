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
import VendorModal from "./VendorModal";

// Dummy data
const data = [
  {
    id: 1,
    tenant: {
      name: "Audry hawq",
      role: "Tenant",
      avatar: "https://github.com/shadcn.png",
    },
    requestId: "#M-00123",
    vendor: {
      name: "Audry hawq",
      role: "Vendor",
      avatar: "https://github.com/shadcn.png",
    },
    issue: {
      title: "Leaking Kitchen",
      priority: "Emergency",
    },
    property: {
      image: "../assets/images/property-01.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    requestDate: "Apr 10, 2025 11:00 AM",
    status: "Completed",
  },
  {
    id: 2,
    tenant: {
      name: "Audry hawq",
      role: "Tenant",
      avatar: "https://github.com/shadcn.png",
    },
    requestId: "#M-00123",
    vendor: {
      name: "Audry hawq",
      role: "Vendor",
      avatar: "https://github.com/shadcn.png",
    },
    issue: {
      title: "AC Not Working",
      priority: "Standard",
    },
    property: {
      image: "../assets/images/property-02.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    requestDate: "Apr 10, 2025 11:00 AM",
    status: "On going",
  },
  {
    id: 3,
    tenant: {
      name: "Audry hawq",
      role: "Tenant",
      avatar: "https://github.com/shadcn.png",
    },
    requestId: "#M-00123",
    vendor: {
      name: "Audry hawq",
      role: "Vendor",
      avatar: "https://github.com/shadcn.png",
    },
    issue: {
      title: "AC Not Working",
      priority: "Urgent",
    },
    property: {
      image: "../assets/images/property-03.jpg",
      name: "Murphy House",
      address: "4140 Parker Road",
    },
    requestDate: "Apr 10, 2025 11:00 AM",
    status: "In Review",
  },
];

const statusOptions = [
  { value: "all", label: "All Priority" },
  { value: "Completed", label: "Completed" },
  { value: "On Going", label: "On Going" },
  { value: "In Review", label: "In Review" },
];

const headers = [
  "Name",
  "Request ID",
  "Assign To",
  "Issue",
  "Property Info",
  "Req Date",
  "Status",
  "Action",
];

const TaskList = ({ handleDetails }) => {
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
      row.tenant.name.toLowerCase().includes(search.toLowerCase()) ||
      (row.property.name &&
        row.property.name.toLowerCase().includes(search.toLowerCase())) ||
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
            Task List
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
                    <div className="flex flex-row gap-2 items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={row.tenant.avatar}
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5
                          className="text-t-primary text-[14px] font-[500]"
                          title={row.tenant.name}
                        >
                          {row.tenant.name.substring(0, 10) + "..."}
                        </h5>
                        <p
                          className="text-t-secondary text-[12px]"
                          title={row.tenant.role}
                        >
                          {row.tenant.role}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm">{row.requestId}</h5>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src={row.vendor.avatar}
                          alt="vendor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h5
                          className="text-t-primary text-[14px] font-[500]"
                          title={row.vendor.name}
                        >
                          {row.vendor.name.substring(0, 20) + "..."}
                        </h5>
                        <p
                          className="text-t-secondary text-[12px]"
                          title={row.vendor.role}
                        >
                          {row.vendor.role}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <h5 className="text-sm font-[500]">{row.issue.title}</h5>
                    <p
                      className={`text-[12px] ${
                        row.issue.priority === "Emergency"
                          ? "text-[#CB121D]"
                          : row.issue.priority === "Standard"
                          ? "text-[#0065FF]"
                          : "text-[#DD8800]"
                      }`}
                    >
                      {row.issue.priority}
                    </p>
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
                    <h5 className="text-sm">{row.requestDate}</h5>
                  </TableCell>
                  <TableCell>
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
        <VendorModal row={selectedRow} onClose={closeModal} />
      )}
    </div>
  );
};

export default TaskList;
