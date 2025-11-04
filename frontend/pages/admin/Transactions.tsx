import React, { useState, useMemo } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { TransactionsTable } from "./transactions/components/TransactionsTable";
import { TransactionStatusFilter } from "./transactions/components/TransactionStatusFilter";
import { TransactionsPagination } from "./transactions/components/TransactionsPagination";
import { TransactionData } from "./transactions/components/TransactionsTableRow";

const mockTransactions: TransactionData[] = [
  {
    id: "1",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
  },
  {
    id: "2",
    transactionId: "TXN-002",
    user: "jane.smith@email.com",
    type: "Sell",
    crypto: "ETH",
    amount: "0.05",
    inrValue: "₹280,800",
    status: "Pending",
    time: "5 mins ago",
  },
  {
    id: "3",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    type: "Buy",
    crypto: "ETH",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
  },
  {
    id: "4",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
  },
  {
    id: "5",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
  },
  {
    id: "6",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
  },
  {
    id: "7",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
  },
  {
    id: "8",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
  },
  {
    id: "9",
    transactionId: "TXN-001",
    user: "john.doe@email.com",
    type: "Buy",
    crypto: "BTC",
    amount: "0.05",
    inrValue: "₹200,000",
    status: "Completed",
    time: "2 mins ago",
  },
];

export const Transactions: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const itemsPerPage = 10;

  const handleView = (transactionId: string) => {
    console.log("View transaction:", transactionId);
  };

  const filteredTransactions = useMemo(() => {
    if (selectedStatus === "all") {
      return mockTransactions;
    }

    return mockTransactions.filter(
      (transaction) =>
        transaction.status.toLowerCase() === selectedStatus.toLowerCase(),
    );
  }, [selectedStatus]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const paginatedTransactions = filteredTransactions.slice(
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
                Transaction Management
              </h1>
              <p className="text-sm sm:text-base md:text-[17px] text-[#838383]">
                Manage All User transactions
              </p>
            </div>

            <div className="flex items-center justify-end mb-6 sm:mb-8">
              <TransactionStatusFilter
                selectedStatus={selectedStatus}
                onStatusChange={setSelectedStatus}
              />
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="sm:px-0 px-4">
                <TransactionsTable
                  transactions={paginatedTransactions}
                  onView={handleView}
                />
              </div>
            </div>

            <TransactionsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredTransactions.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
