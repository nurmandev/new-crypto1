import React from "react";
import { Eye, Edit } from "lucide-react";

export interface UserData {
  id: string;
  name: string;
  email: string;
  status: "Active" | "Inactive";
  verification: "Verified" | "Pending";
  balance: string;
  joinedDate: string;
}

interface UsersTableRowProps {
  user: UserData;
  onView: (userId: string) => void;
  onEdit: (userId: string) => void;
}

export const UsersTableRow: React.FC<UsersTableRowProps> = ({
  user,
  onView,
  onEdit,
}) => {
  return (
    <tr className="border-b border-[#C9C9C9]/50">
      <td className="py-6">
        <div className="flex flex-col gap-1.5">
          <div className="text-[17px] font-semibold text-black">
            {user.name}
          </div>
          <div className="text-[15px] font-light text-black">{user.email}</div>
        </div>
      </td>
      <td className="py-6">
        <span className="inline-flex px-2.5 py-1 rounded bg-[#BDFDDB] text-[#1C5C3A] text-[10px]">
          {user.status}
        </span>
      </td>
      <td className="py-6">
        <span className="inline-flex px-2.5 py-1 rounded bg-[#BDFDDB] text-[#1C5C3A] text-[10px]">
          {user.verification}
        </span>
      </td>
      <td className="py-6">
        <div className="text-[15px] text-black">{user.balance}</div>
      </td>
      <td className="py-6">
        <div className="text-[15px] font-light text-black">
          {user.joinedDate}
        </div>
      </td>
      <td className="py-6">
        <div className="flex items-center gap-3.5">
          <button
            onClick={() => onView(user.id)}
            className="hover:opacity-70 transition-opacity"
            aria-label="View user"
          >
            <Eye className="w-5 h-5 text-black" />
          </button>
          <button
            onClick={() => onEdit(user.id)}
            className="hover:opacity-70 transition-opacity"
            aria-label="Edit user"
          >
            <Edit className="w-[18px] h-[18px] text-black" />
          </button>
        </div>
      </td>
    </tr>
  );
};
