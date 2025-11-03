import React, { useState } from "react";
import { AdminHeader } from "./components/AdminHeader";
import { AdminSidebar } from "./components/AdminSidebar";
import { UsersSearchBar } from "./components/UsersSearchBar";
import { UsersFilters } from "./components/UsersFilters";
import { UsersTable } from "./components/UsersTable";
import { UsersPagination } from "./components/UsersPagination";
import { UserData } from "./components/UsersTableRow";

const mockUsers: UserData[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "3",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "4",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "5",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "6",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "7",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
  {
    id: "8",
    name: "John Doe",
    email: "john.doe@email.com",
    status: "Active",
    verification: "Verified",
    balance: "₹450,000",
    joinedDate: "2024-01-15",
  },
];

export const Users: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleView = (userId: string) => {
    console.log("View user:", userId);
  };

  const handleEdit = (userId: string) => {
    console.log("Edit user:", userId);
  };

  const handleFilterClick = () => {
    console.log("Filter clicked");
  };

  const handleDateRangeClick = () => {
    console.log("Date range clicked");
  };

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-[#F8F8F8] p-6">
      <div className="flex gap-6 max-w-[1920px] mx-auto">
        <AdminSidebar isOpen={true} />

        <div className="flex-1 flex flex-col gap-6">
          <AdminHeader />

          <div className="bg-white rounded-[10px] p-8">
            <div className="mb-8">
              <h1 className="text-[20px] font-medium text-black mb-2">
                Users
              </h1>
              <p className="text-[17px] text-[#838383]">
                Manage All Users Joined
              </p>
            </div>

            <div className="flex items-center justify-between mb-8">
              <UsersSearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search Users..."
              />
              <UsersFilters
                onFilterClick={handleFilterClick}
                onDateRangeClick={handleDateRangeClick}
              />
            </div>

            <UsersTable
              users={filteredUsers.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )}
              onView={handleView}
              onEdit={handleEdit}
            />

            <UsersPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalItems={filteredUsers.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
