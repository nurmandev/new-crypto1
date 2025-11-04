import React from "react";
import { RequestsTableRow, RequestData } from "./RequestsTableRow";

interface RequestsTableProps {
  requests: RequestData[];
  onView: (requestId: string) => void;
}

export const RequestsTable: React.FC<RequestsTableProps> = ({
  requests,
  onView,
}) => {
  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#C9C9C9]/50">
            <th className="text-left py-3 sm:py-4 px-2 sm:px-0">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Request ID
              </span>
            </th>
            <th className="text-left py-3 sm:py-4 px-2 sm:px-0">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Type
              </span>
            </th>
            <th className="text-left py-3 sm:py-4 px-2 sm:px-0">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                User
              </span>
            </th>
            <th className="text-left py-3 sm:py-4 px-2 sm:px-0 hidden sm:table-cell">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Amount
              </span>
            </th>
            <th className="text-left py-3 sm:py-4 px-2 sm:px-0 hidden md:table-cell">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Currency
              </span>
            </th>
            <th className="text-left py-3 sm:py-4 px-2 sm:px-0">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Status
              </span>
            </th>
            <th className="text-left py-3 sm:py-4 px-2 sm:px-0 hidden lg:table-cell">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Time
              </span>
            </th>
            <th className="text-left py-3 sm:py-4 px-2 sm:px-0">
              <span className="text-xs sm:text-sm md:text-[15px] font-bold text-[#313131]">
                Actions
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <RequestsTableRow
              key={request.id}
              request={request}
              onView={onView}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
