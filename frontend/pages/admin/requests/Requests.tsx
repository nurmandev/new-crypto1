import React, { useState, useMemo } from "react";
import { AdminHeader } from "../components/AdminHeader";
import { AdminSidebar } from "../components/AdminSidebar";
import { RequestsTable } from "./components/RequestsTable";
import { RequestStatusFilter } from "./components/RequestStatusFilter";
import { RequestsPagination } from "./components/RequestsPagination";
import { RequestDetailsModal } from "./components/RequestDetailsModal";
import { RequestData } from "./components/RequestsTableRow";

const mockRequests: RequestData[] = [
  {
    id: "1",
    requestId: "REQ-001",
    type: "Deposit INR",
    userName: "John Doe",
    userEmail: "john.doe@email.com",
    amount: "50,000",
    currency: "INR",
    status: "Pending",
    time: "2024-01-20 10:30:00",
  },
  {
    id: "2",
    requestId: "REQ-002",
    type: "Withdraw INR",
    userName: "Jane Smith",
    userEmail: "jane.smith@email.com",
    amount: "25000",
    currency: "INR",
    status: "Approved",
    time: "2024-01-20 09:15:00",
  },
  {
    id: "3",
    requestId: "REQ-003",
    type: "Withdraw Crypto",
    userName: "Sarah Johnson",
    userEmail: "sarah.johnson@email.com",
    amount: "1.5",
    currency: "ETH",
    status: "Rejected",
    time: "2024-01-20 10:30:00",
  },
  {
    id: "4",
    requestId: "REQ-004",
    type: "Deposit",
    userName: "John Doe",
    userEmail: "john.doe@email.com",
    amount: "₹50,000",
    currency: "INR",
    status: "Pending",
    time: "2024-01-20 10:30:00",
  },
  {
    id: "5",
    requestId: "REQ-005",
    type: "Deposit",
    userName: "John Doe",
    userEmail: "john.doe@email.com",
    amount: "₹50,000",
    currency: "INR",
    status: "Pending",
    time: "2024-01-20 10:30:00",
  },
  {
    id: "6",
    requestId: "REQ-006",
    type: "Deposit",
    userName: "John Doe",
    userEmail: "john.doe@email.com",
    amount: "₹50,000",
    currency: "INR",
    status: "Pending",
    time: "2024-01-20 10:30:00",
  },
  {
    id: "7",
    requestId: "REQ-007",
    type: "Deposit",
    userName: "John Doe",
    userEmail: "john.doe@email.com",
    amount: "₹50,000",
    currency: "INR",
    status: "Pending",
    time: "2024-01-20 10:30:00",
  },
  {
    id: "8",
    requestId: "REQ-008",
    type: "Deposit",
    userName: "John Doe",
    userEmail: "john.doe@email.com",
    amount: "₹50,000",
    currency: "INR",
    status: "Pending",
    time: "2024-01-20 10:30:00",
  },
];

export const Requests: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState<RequestData | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const itemsPerPage = 10;

  const handleView = (requestId: string) => {
    const request = mockRequests.find((r) => r.id === requestId);
    if (request) {
      setSelectedRequest(request);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

  const handleApprove = (requestId: string) => {
    console.log("Approving request:", requestId);
    // TODO: Implement actual approval logic (API call)
  };

  const handleReject = (requestId: string) => {
    console.log("Rejecting request:", requestId);
    // TODO: Implement actual rejection logic (API call)
  };

  const filteredRequests = useMemo(() => {
    if (selectedStatus === "all") {
      return mockRequests;
    }

    return mockRequests.filter(
      (request) =>
        request.status.toLowerCase() === selectedStatus.toLowerCase(),
    );
  }, [selectedStatus]);

  const statusCounts = useMemo(() => {
    return {
      pending: mockRequests.filter((r) => r.status === "Pending").length,
      approved: mockRequests.filter((r) => r.status === "Approved").length,
      rejected: mockRequests.filter((r) => r.status === "Rejected").length,
    };
  }, []);

  const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);

  const paginatedRequests = filteredRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="min-h-screen bg-[#F8F8F8] p-4 sm:p-6">
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1920px] mx-auto">
        <AdminSidebar isOpen={true} />

        <div className="flex-1 flex flex-col gap-6">
          <AdminHeader />

          <div className="bg-white rounded-[10px] p-4 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-lg sm:text-xl md:text-[20px] font-medium text-black mb-2">
                Users
              </h1>
              <p className="text-sm sm:text-base md:text-[17px] text-[#838383]">
                Manage All Users Joined
              </p>
            </div>

            <div className="flex items-center justify-end mb-6 sm:mb-8">
              <RequestStatusFilter
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
                pendingCount={statusCounts.pending}
                approvedCount={statusCounts.approved}
                rejectedCount={statusCounts.rejected}
              />
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="sm:px-0 px-4">
                <RequestsTable
                  requests={paginatedRequests}
                  onView={handleView}
                />
              </div>
            </div>

            <RequestsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredRequests.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>

      <RequestDetailsModal
        request={selectedRequest}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
};
