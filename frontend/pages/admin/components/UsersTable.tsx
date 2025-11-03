import React from "react";
import { UsersTableRow, UserData } from "./UsersTableRow";

interface UsersTableProps {
  users: UserData[];
  onView: (userId: string) => void;
  onEdit: (userId: string) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  onView,
  onEdit,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#C9C9C9]/50">
            <th className="text-left py-4 text-[15px] font-bold text-[#313131]">
              User
            </th>
            <th className="text-left py-4 text-[15px] font-bold text-[#313131]">
              Status
            </th>
            <th className="text-left py-4 text-[15px] font-bold text-[#313131]">
              Verification
            </th>
            <th className="text-left py-4 text-[15px] font-bold text-[#313131]">
              Balance
            </th>
            <th className="text-left py-4 text-[15px] font-bold text-[#313131]">
              Joined
            </th>
            <th className="text-left py-4 text-[15px] font-bold text-[#313131]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UsersTableRow
              key={user.id}
              user={user}
              onView={onView}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
