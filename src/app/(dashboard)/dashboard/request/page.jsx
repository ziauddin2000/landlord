"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import DatePicker from "@/components/ui/date-picker";
import BookingModal from "./_components/BookingModal";
import TransferModal from "./_components/TransferModal";
import MaintenanceModal from "./_components/MaintenanceModal";
import { RxCross2 } from "react-icons/rx";
import PropertyTourModal from "./_components/PropertyTourModal";

const Request = () => {
  // Handle Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleView = (id, tab) => {
    const row = data.find((item) => item.id === id);
    setSelectedRow({ ...row, tab });
    setModalOpen(true);
  };

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "Approved", label: "Approved" },
    { value: "In Review", label: "In Review" },
    { value: "Rejected", label: "Rejected" },
  ];

  const headers = [
    "Name",
    "Request ID",
    "Property Info",
    "Req Date",
    "Status",
    "Action",
  ];

  let tabs = [
    {
      label: "Booking",
      value: "booking",
    },
    {
      label: "Transfer",
      value: "transfer",
    },
    {
      label: "Maintenance",
      value: "maintenance",
    },
    {
      label: "Property Tour",
      value: "property-tour",
    },
  ];

  const tabData = {
    booking: [
      {
        id: 1,
        paidDate: "10/08/2025",
        payment: "Success",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Karthik Murughan",
        phone: "081234567890",
        requestId: "RP-3021",
        propertyImg: "../assets/images/property-01.jpg",
        propertyName: "Villa in Dubai",
        propertyAddress: "123 Main St, Anytown, USA",
        dueDate: "April 5, 2025",
        status: "Approved",
      },
      {
        id: 2,
        paidDate: "10/08/2025",
        payment: "Failed",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Karthik Murughan",
        phone: "081234567890",
        requestId: "RP-3021",
        propertyImg: "../assets/images/property-02.jpg",
        propertyName: "Villa in France",
        propertyAddress: "123 Main St, Anytown, USA",
        dueDate: "April 5, 2025",
        status: "In Review",
      },
      {
        id: 3,
        paidDate: "10/08/2025",
        payment: "Success",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Karthik Murughan",
        phone: "081234567890",
        requestId: "RP-3021",
        propertyImg: "../assets/images/property-03.jpg",
        propertyName: "Villa in Paris",
        propertyAddress: "123 Main St, Anytown, USA",
        dueDate: "April 5, 2025",
        status: "Rejected",
      },
    ],
    transfer: [
      {
        id: 1,
        paidDate: "12/09/2025",
        payment: "Success",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Alex Johnson",
        phone: "081234567891",
        requestId: "TR-1001",
        propertyImg: "../assets/images/property-02.jpg",
        propertyName: "Villa in France",
        propertyAddress: "456 Main St, Anytown, USA",
        dueDate: "May 10, 2025",
        status: "Approved",
      },
      {
        id: 2,
        paidDate: "12/09/2025",
        payment: "Success",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Alex Johnson",
        phone: "081234567891",
        requestId: "TR-1001",
        propertyImg: "../assets/images/property-02.jpg",
        propertyName: "Villa in France",
        propertyAddress: "456 Main St, Anytown, USA",
        dueDate: "May 10, 2025",
        status: "In Review",
      },
    ],
    maintenance: [
      {
        id: 1,
        paidDate: "12/09/2025",
        payment: "Success",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Alex Johnson",
        phone: "081234567891",
        requestId: "TR-1001",
        propertyImg: "../assets/images/property-02.jpg",
        propertyName: "Villa in France",
        propertyAddress: "456 Main St, Anytown, USA",
        dueDate: "May 10, 2025",
        status: "Approved",
      },
      {
        id: 2,
        paidDate: "12/09/2025",
        payment: "Success",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Alex Johnson",
        phone: "081234567891",
        requestId: "TR-1001",
        propertyImg: "../assets/images/property-02.jpg",
        propertyName: "Villa in France",
        propertyAddress: "456 Main St, Anytown, USA",
        dueDate: "May 10, 2025",
        status: "Approved",
      },
    ],
    "property-tour": [
      {
        id: 1,
        paidDate: "12/09/2025",
        payment: "Success",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Alex Johnson",
        phone: "081234567891",
        requestId: "TR-1001",
        propertyImg: "../assets/images/property-02.jpg",
        propertyName: "Villa in France",
        propertyAddress: "456 Main St, Anytown, USA",
        dueDate: "May 10, 2025",
        status: "Approved",
      },
      {
        id: 2,
        paidDate: "12/09/2025",
        payment: "Success",
        avatar: "https://github.com/shadcn.png",
        tenantName: "Alex Johnson",
        phone: "081234567891",
        requestId: "TR-1001",
        propertyImg: "../assets/images/property-02.jpg",
        propertyName: "Villa in France",
        propertyAddress: "456 Main St, Anytown, USA",
        dueDate: "May 10, 2025",
        status: "In Review",
      },
    ],
  };

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [date, setDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("booking");

  // Get data for the active tab
  const data = tabData[activeTab] || [];

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

  // Pagination logic
  const ROWS_PER_PAGE = 10;
  const totalPages = Math.ceil(filteredData.length / ROWS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  // Reset to first page if filters or tab change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, status, date, activeTab]);

  // Handle Transfer Reject
  const [showTransferRejectModal, setShowTransferRejectModal] = useState(false);
  const handleReject = () => {
    setModalOpen(false);
    setShowTransferRejectModal(true);
  };

  // Handle Tour Reject
  const [showTourRejectModal, setShowTourRejectModal] = useState(false);
  const handleTourReject = () => {
    setModalOpen(false);
    setShowTourRejectModal(true);
  };

  return (
    <>
      <div className="px-3 py-4 sm:px-4 sm:py-4 lg:px-7 lg:py-4 bg-[#f5f5f5] min-h-screen">
        {/* Breadcrumb */}
        <Breadcrumb className="*:text-[16px] py-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Analytics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-t-primary">
                Booking Details
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full py-3"
        >
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-transparent py-0 w-full sm:w-fit h-auto">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                onClick={() => {
                  setActiveTab(tab.value);
                  setSearch("");
                  setStatus("all");
                  setDate("");
                }}
                className={`
                px-3 py-3 rounded-md cursor-pointer text-[16px] font-[500]
                bg-white border border-[#f5f5f5] text-t-secondary  
                data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary
                transition 
              `}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* content */}
          {tabs.map((tab, index) => (
            <TabsContent key={index} value={tab.value}>
              {activeTab === tab.value && (
                <div className="w-full p-6 bg-white rounded-xl shadow-sm mt-4">
                  {/* Header with filters */}
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-6 w-full">
                    <h2 className="text-[24px] font-[600] text-t-primary mb-2 md:mb-0 flex-shrink-0">
                      {tab.label} Request
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
                      <div className="w-full sm:w-[170px] md:flex-1 md:min-w-[120px] md:max-w-[170px] min-w-0 ">
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
                                {row.requestId}
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
                                    {row.propertyAddress.substring(0, 20) +
                                      "..."}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <h5 className="text-t-primary font-[500] text-[16px]">
                                {row.dueDate}
                              </h5>
                            </TableCell>
                            <TableCell>
                              <span
                                className={`${
                                  row.status === "Approved"
                                    ? "bg-[#CDFDC6] text-[#04A755] px-2 py-1 rounded"
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
                                onClick={() => handleView(row.id, activeTab)}
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
                        currentPage === 1
                          ? "bg-muted"
                          : "bg-primary text-white "
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
                        currentPage === totalPages
                          ? "bg-muted"
                          : "bg-primary text-white "
                      }`}
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages || totalPages === 0}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Modal rendering */}
      {modalOpen &&
        selectedRow &&
        (selectedRow.tab === "booking" ? (
          <BookingModal row={selectedRow} onClose={() => setModalOpen(false)} />
        ) : selectedRow.tab === "transfer" ? (
          <TransferModal
            row={selectedRow}
            handleReject={handleReject}
            onClose={() => setModalOpen(false)}
          />
        ) : selectedRow.tab === "maintenance" ? (
          <MaintenanceModal
            row={selectedRow}
            onClose={() => setModalOpen(false)}
          />
        ) : selectedRow.tab === "property-tour" ? (
          <PropertyTourModal
            row={selectedRow}
            handleTourReject={handleTourReject}
            onClose={() => setModalOpen(false)}
          />
        ) : null)}

      {/* Transfer Reject Modal */}
      {showTransferRejectModal && (
        <div
          className="fixed inset-0 z-55 flex items-center justify-center bg-black/30"
          onClick={() => setShowTransferRejectModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-[96%] max-w-[550px] p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              onClick={() => setShowTransferRejectModal(false)}
            >
              <RxCross2 />
            </button>
            <h2 className="text-lg font-semibold text-t-primary mb-1">
              Transfer Cancellation
            </h2>
            <p className="text-sm text-t-secondary mb-3">
              Tour cancellation reason
            </p>
            <hr className="mb-3" />
            <div>
              <div className="text-base font-semibold text-t-primary mb-1">
                Transfer no longer needed
              </div>
              <div className="text-sm text-t-secondary">
                Once you request the transfer, the system will automatically
                generate a lease agreement for the new property.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tour Reject Modal */}
      {showTourRejectModal && (
        <div
          className="fixed inset-0 z-55 flex items-center justify-center bg-black/30"
          onClick={() => setShowTourRejectModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg w-[96%] max-w-[550px] p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
              onClick={() => setShowTourRejectModal(false)}
            >
              <RxCross2 />
            </button>
            <h2 className="text-lg font-semibold text-t-primary mb-1">
              Tour Cancellation
            </h2>
            <p className="text-sm text-t-secondary mb-3">
              Tour cancellation reason
            </p>
            <hr className="mb-3" />
            <div>
              <div className="text-base font-semibold text-t-primary mb-1">
                Scheduling conflict
              </div>
              <div className="text-sm text-t-secondary">
                Once you request the tour, the system will automatically
                generate a tour agreement for the new property.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Request;
